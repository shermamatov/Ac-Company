import React from "react";
import galochkaIcon from "../../../images/galochka.png";
import stars from "../../../images/block1Stars.png";
import google from "../../../images/Google.png";
import facebook from "../../../images/Facebook.png";
import yelp from "../../../images/Yelp.png";
import banner from "../../../images/mask2.webp";
// import "./Family.scss";
const BlockTestAbout = () => {
    return (
        <div className="container" style={{ marginBottom: "100px" }}>
            <div className="block1__inner">
                <div className="block1_left about_block1_test">
                    <p
                        style={{
                            color: "red",
                            fontSize: "20px",
                            fontFamily: "montserrat",
                            fontWeight: "600",
                            marginLeft: "5px",
                            marginBottom: "10px",
                        }}
                    >
                        about us
                    </p>
                    <h1>
                        Family owners <br /> business of{" "}
                        <br className="about_br" /> engineers
                    </h1>
                    <div className="left_bottom_block">
                        <div className="block1_desc">
                            <p
                                className="about_block1_p"
                                style={
                                    {
                                        // fontFamily: "Montserrat",
                                        // fontWeight: "500",
                                        // width: "50%",
                                        // lineHeight: "150%",
                                    }
                                }
                            >
                                We offer a wide range of HVAC services catered
                                to both residential and commercial clients. Even
                                the all-powerful Pointing has no control about
                                the blind texts.
                            </p>
                            {/* <div>
                                <img src={galochkaIcon} alt="" />
                                <h4>30+ years experience in engineering</h4>
                            </div>
                            <div>
                                <img src={galochkaIcon} alt="" />
                                <h4>Available 24/7 for Emergencies</h4>
                            </div>
                            <div>
                                <img src={galochkaIcon} alt="" />
                                <h4>
                                    Quick service Same-Day inspection and
                                    estimate
                                </h4>
                            </div>
                            <div className="rating_block">
                                <img src={stars} alt="" />
                                <p>95% of clients recommend us</p>
                            </div>
                            <div className="mass_block">
                                <img src={google} alt="" />
                                <img src={facebook} alt="" />
                                <img src={yelp} alt="" />
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="block1_right">
                    <div className="banner_block">
                        <img src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlockTestAbout;
