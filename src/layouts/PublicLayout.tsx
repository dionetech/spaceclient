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
                <Particles
                    id="tsparticles"
                    url="https://res.cloudinary.com/ruthless-labs/raw/upload/v1690388068/spacebank/wextkw3tmvwzwhs0jsmx.json"
                    init={particlesInit}
                    loaded={particlesLoaded}
                />
                {children}
            </div>
        </div>
    );
};

export default PublicLayout;
