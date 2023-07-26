import PublicLayout from "../layouts/PublicLayout";
import { useState } from "react";
import { ImSpinner8 } from "react-icons/im";
import EmailIcon from "../icons/EmailIcon";
import axios from "axios";
import { errorToast, successToast } from "../config";
import { cardList } from "../data/cardList";
import { AnimatePresence, motion } from "framer-motion";
// import { Link } from "react-router-dom";

const LandingPage = () => {
    const [email, setEmail] = useState("");
    const [processing, setProcessing] = useState(false);

    const addToWaitlist = (e: { preventDefault: any }) => {
        e.preventDefault();
        setProcessing(true);
        axios
            .post(
                `https://initdev.vercel.app/api-v1/add-subscriber?apikey=Aq6NvLdigSBVHnzgI1zP&email=${email}`
            )
            .then(function (res) {
                setProcessing(false);
                setEmail("");
                successToast(res.data.message);
            })
            .catch(function (error) {
                setEmail("");
                setProcessing(false);
                try {
                    errorToast(error.response.data.error);
                } catch {
                    errorToast(error.message);
                }
            });
    };

    return (
        <PublicLayout pageTitle="Home">
            <div className="containerFluid landingPageContainer">
                <section className="landingPageHeader">
                    <div className="headerImageDiv">
                        <img
                            src="https://res.cloudinary.com/ruthless-labs/image/upload/v1690207637/spacebank/r1pyloewc4cwqn8ozole.png"
                            alt="LandingPageLeftImage"
                        />
                    </div>

                    <div>
                        <h1 className="headerTitle">
                            The Future is <span>Space Banking</span>
                        </h1>
                        <div className="subTitleComponent">
                            <p className="headerSubTitle">
                                Explore the Boundless Possibilities of
                                Spacebank:{" "}
                                <strong>
                                    Your Gateway to Multi-Planetary Transaction
                                </strong>
                            </p>
                        </div>
                        <div className="waitlistFormContent">
                            <form onSubmit={addToWaitlist}>
                                <div className="inputDiv">
                                    <button type="button">
                                        <EmailIcon />
                                    </button>
                                    <input
                                        type="email"
                                        name="waitlistEmail"
                                        placeholder="Your Email Address"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        className="form-control customInput"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="spin"
                                        disabled={processing}
                                    >
                                        {processing ? (
                                            <ImSpinner8 />
                                        ) : (
                                            "Join Waitlist"
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                        <p className="headerCaption">
                            "Where Innovation Meets Freedom & Security"
                        </p>
                    </div>
                    <div className="headerImageDiv">
                        <img
                            src="https://res.cloudinary.com/ruthless-labs/image/upload/v1690207634/spacebank/zrkjeayptlershepg2bv.png"
                            alt="LandingPageRightImage"
                        />
                    </div>
                </section>
                <section className="captionCardSection">
                    <div className="row justify-content-center">
                        {cardList.map((card, index) => {
                            return (
                                <div className="col-md-4 col-sm-6" key={index}>
                                    <AnimatePresence>
                                        <motion.div
                                            whileHover={{
                                                scale: 1.2,
                                                transition: { duration: 0.3 },
                                            }}
                                            className="singleCaptionCard"
                                        >
                                            <div className="header">
                                                <span>{card.icon}</span>
                                            </div>
                                            <div className="content">
                                                <h2>{card.title}</h2>
                                                <p>{card.description}.</p>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </section>
                {/* <section className="infoSection one">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="imageDiv">
                                <img
                                    src="https://res.cloudinary.com/ruthless-labs/image/upload/v1690294866/spacebank/tiz6r0vpxcyavmmqgzpd.jpg"
                                    alt="spacebank"
                                />
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="content">
                                <h4>
                                    All your finance{" "}
                                    <span>modules in one App</span>
                                </h4>
                                <p>
                                    Welcome to our Fintech website! We are here
                                    to revolutionize the way you manage you
                                    finances, making it easier, faster and more
                                    accessible for everyone.
                                </p>
                                <p>
                                    With out cutting-edge technology and
                                    innovative solutions, we aim to empower
                                    individuals.
                                </p>
                                <div className="linkDiv">
                                    <Link to="/learn">Learn more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="infoSection two">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="content">
                                <h4>
                                    Revolutionizing the Future of Finance:
                                    Unleashing the Power of Fintech
                                </h4>
                                <p>
                                    "Crypto Made Simple: Spacebank - Your
                                    Passport to Financial Independence."
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div
                                className="imageDiv"
                                style={{ justifyContent: "flex-end" }}
                            >
                                <img
                                    src="https://res.cloudinary.com/ruthless-labs/image/upload/v1690294866/spacebank/tiz6r0vpxcyavmmqgzpd.jpg"
                                    alt="spacebank"
                                />
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>
        </PublicLayout>
    );
};

export default LandingPage;
