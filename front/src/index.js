import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ChelContext from "./Contexts/ChelContext";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ChelContext>
        <BrowserRouter >
            <App />
        </BrowserRouter>
    </ChelContext>
);
