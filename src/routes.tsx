import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";
import LandingPage from "./pages/LandingPage";

export const Router = () => {
    return (
        <>
            <ToastContainer />
            <HelmetProvider>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </HelmetProvider>
        </>
    );
};
