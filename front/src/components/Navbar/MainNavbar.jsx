import React from "react";
import UpNavbar from "./UpNavbar/UpNavbar";
import Navbar from "./DownNavbar/Navbar";
import logo from "../../images/logo.png";
import "./MainNavbar.scss";
const MainNavbar = () => {
    return (
        <div className="container">
            <div className="main_navbar">
                <div className="logo_block">
                    <img src={logo} alt="" />
                </div>
                <div className="navbars_block">
                    <UpNavbar />
                    <Navbar />
                </div>
            </div>
        </div>
    );
};

export default MainNavbar;
