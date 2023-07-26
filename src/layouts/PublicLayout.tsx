import { useCallback } from "react";
import Navbar from "../components/Navbar";
import Header from "./Header";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

interface PublicProps {
    children: any;
    pageTitle: string;
}
const PublicLayout: React.FC<PublicProps> = ({ children, pageTitle }) => {
    const particlesInit = useCallback(async (engine: any) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async () => {
        //console.log(container);
    }, []);

    return (
        <div>
            <Header title={pageTitle} />
            <Navbar />
            <div className="App" id="butter">
                {children}
            </div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        number: {
                            value: 150,
                            density: {
                                enable: true,
                                value_area: 700,
                            },
                        },
                        color: {
                            value: "#fff",
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 0,
                                color: "#000000",
                            },
                            polygon: {
                                nb_sides: 5,
                            },
                            image: {
                                src: "img/github.svg",
                                width: 100,
                                height: 100,
                            },
                        },
                        opacity: {
                            value: 1,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0,
                                sync: false,
                            },
                        },
                        size: {
                            value: 3,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 4,
                                size_min: 0.3,
                                sync: false,
                            },
                        },
                        line_linked: {
                            enable: false,
                            distance: 150,
                            color: "#ffffff",
                            opacity: 0.4,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 1,
                            direction: "none",
                            random: true,
                            straight: false,
                            out_mode: "out",
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 600,
                            },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
};

export default PublicLayout;
