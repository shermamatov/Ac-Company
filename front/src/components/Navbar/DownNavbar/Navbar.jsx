import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../../images/logo.png";
import menu from "../../../images/burgerMenu.png";
import btnIcon from "../btn-icon.png";

const Navbar = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (
        <div className="down_navbar">
            <div className="navigate_block">
                <ul>
                    <li
                        className={`${pathname == "/about_us" && "orange"}`}
                        onClick={() => navigate("/about_us")}
                    >
                        ABOUT US
                    </li>
                    <li className="line"></li>
                    <li
                        className={`${pathname == "/best_offers" && "orange"}`}
                        onClick={() => navigate("/best_offers")}
                    >
                        BEST OFFERS
                    </li>
                    <li className="line"></li>
                    <li className={`${pathname == "/services" && "orange"}`}>
                        <Link to={"/services"}>SERVICES</Link>
                    </li>
                    <li className="line"></li>
                    <li
                        className={`${pathname == "/review" && "orange"}`}
                        onClick={() => navigate("/review")}
                    >
                        REVIEWS
                    </li>
                    <li className="line"></li>
                    <li
                        className={`${pathname == "/eq" && "orange"}`}
                        onClick={() => navigate("eq")}
                    >
                        EQUIPMENT
                    </li>
                    <li className="line"></li>
                    <li
                        className={`${pathname == "/blog" && "orange"}`}
                        onClick={() => navigate("/blog")}
                    >
                        BLOG
                    </li>
                    <li className="line"></li>
                    <li
                        className={`${pathname == "/photos" && "orange"}`}
                        onClick={() => navigate("/photos")}
                    >
                        PROJECT PHOTOS
                    </li>
                </ul>
            </div>
            <div className="down_navbar_button_block">
                <button onClick={() => navigate("/book")}>
                    Book online now <img src={btnIcon} alt="" />
                </button>
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
