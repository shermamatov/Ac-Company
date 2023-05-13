import React from "react";
import location from "../../../images/locationIcon.png";
import phone from "../../../images/phoneIcon.png";
import "./UpNavbar.scss";
const UpNavbar = () => {
    return (
        <div className="up_navbar">
            <div className="up_navbar_div">
                <div className="up_navbar_location_img">
                    <img src={location} alt="" />
                </div>
                <p>73 Canal Street, California, LA</p>
            </div>
            <div className="button_block">
                <button>
                    <span>20% Todays special Deal in your city</span>
                </button>
            </div>
            <div className="up_navbar_div">
                <a href="tel:+1(818)8581415">+1-818-888-10-10</a>
                <div className="up_navbar_phone_img">
                    <img src={phone} alt="" />
                </div>
            </div>
        </div>
    );
};

export default UpNavbar;
