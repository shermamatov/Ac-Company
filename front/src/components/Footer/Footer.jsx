import React from "react";
import "./Footer.scss";
import facebook from "../../images/path16.png";
import m from "../../images/m.png";
import Yelp from "../../images/Yelp1.png";
import call from "../../images/call.png";
import email from "../../images/email.png";
//import geo from "../../images/geo.png";
import hero from "../../images/logo.png";
// строго использовать css.module

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="footer_hero_adap">
                        <img src={hero} alt="" />
                    </div>
                    <div className="col-md-4">
                        <div className="about">
                            <h1>About</h1>
                            <div className="polosa"></div>
                        </div>
                        <p className="col-md-p">
                            We are an award winning HVAC company with over 10+
                            years experience in the business. We provide a wide
                            range of services for both residential and
                            commercial clients.
                        </p>

                        <div className="main_icons">
                            <div className="okrug">
                                <img src={facebook} alt="" />
                            </div>
                            <div className="okrug">
                                <img src={m} alt="" />
                            </div>
                            <div style={{}} className="okrug">
                                <img width={"80%"} src={Yelp} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contacts">
                            <h1>Contacts</h1>
                            <div className="polosa"></div>
                        </div>
                        {/* <div className="col-md-4-mini">
                        {/* <div className="col-md-4-mini">
                            <div className="mini_img_block">
                                <img src={geo} alt="" />
                            </div>
                            <div className="con-min">
                                <h4>Address</h4>
                                <p>73 Canal Street, New York, Los</p>
                            </div>
                        </div> */}
                        {/* </div>  */}
                        <div className="contacts_polosa"></div>
                        <div className="col-md-4-mini">
                            <div className="mini_img_block">
                                <img src={call} alt="" />
                            </div>
                            <div className="con-min">
                                <h4>Phone number</h4>
                                <a href="tel: +1(818) 858 14 15 ">+1(818) 858 14 15 </a>
                            </div>
                        </div>
                        <div className="contacts_polosa"></div>

                        <div className="col-md-4-mini">
                            <div className="mini_img_block">
                                <img src={email} alt="" />
                            </div>
                            <div className="con-min">
                                <h4>E-mail</h4>
                                <p><a href="mailto:info@1ACguys.com">info@1ACguys.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="about">
                            <h1>Quick links</h1>
                            <div className="polosa"></div>
                        </div>
                        <div>
                            <div className="title">
                                <p className="col-md-p-4"> about Us</p>
                            </div>
                            <div className="que_polasa"></div>

                            <div className="title">
                                <p className="col-md-p-4"> Services</p>
                            </div>
                            <div className="que_polasa"></div>
                            <div className="title">
                                <p className="col-md-p-4"> News</p>
                            </div>
                            <div className="que_polasa"></div>
                            <div className="title">
                                <p className="col-md-p-4"> Locations</p>
                            </div>
                            <div className="que_polasa"></div>
                            <div className="title">
                                <p className="col-md-p-4"> Contacts</p>
                            </div>
                            <div className="que_polasa"></div>
                        </div>
                    </div>
                    <div className="footer_hero">
                        <img src={hero} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
