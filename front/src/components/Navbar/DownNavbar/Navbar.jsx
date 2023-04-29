import React from "react";
import {Link} from 'react-router-dom';
import "./Navbar.scss";
import logo from "../../../images/logo.png";
import menu from "../../../images/burgerMenu.png";
import btnIcon from '../btn-icon.png';

const Navbar = () => {
    return (
        <div className="down_navbar">
            <div className="navigate_block">
                <ul>
                    <li>ABOUT US</li>
                    <li className="line"></li>
                    <li>BEST OFFERS</li>
                    <li className="line"></li>
                    <li><Link to={'/services'}>SERVICES</Link></li>
                    <li className="line"></li>
                    <li>REVIEWS</li>
                    <li className="line"></li>
                    <li>EQUIPMENT</li>
                    <li className="line"></li>
                    <li>BLOG</li>
                    <li className="line"></li>
                    <li>PROJECT PHOTOS</li>
                </ul>
            </div>
            <div className="down_navbar_button_block">
                <button>Book online now <img src={btnIcon} alt="" /></button>
            </div>
            <div className="adap_downNavbar">
                <div className="adap_logo_block">
                    <img src={logo} alt="" />
                </div>
                <div className="adap_button_block">
                    <button>Book online now</button>
                </div>
                <div>
                    <img src={menu} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
