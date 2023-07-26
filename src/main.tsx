import React from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import "./bootstrap.css";
import "./index.css";
import "./media.css";
import App from "./App.tsx";
import { BrowserRouter as RouterApp } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterApp>
            <App />
        </RouterApp>
    </React.StrictMode>
);
