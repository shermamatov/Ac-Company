import React from "react";
import "../about/about.scss";
import galochkaIcon from "../../../images/galochka.png";
import stars from "../../../images/block1Stars.png";
import google from "../../../images/Google.png";
import facebook from "../../../images/Facebook.png";
import yelp from "../../../images/Yelp.png";

// import bigIcon from "../../Services/img/services-icon-big.png";
import smallIcon from "../../../images/one.webp";

const Block22 = () => {
    const width = window.screen.width;
    return (
        <div
            style={{ marginBottom: `${width > 1800 ? "5%" : "15%"}` }}
            className="container"
        >
            <div className="block1__inner2">
                <div className="about_block1_row_left">
                    <img
                        src={smallIcon}
                        alt=""
                        className="about_block1_imgBlock"
                    />
                    {/* <img
                        style={{ width: "26%" }}
                        src={smallIcon}
                        alt=""
                        className="servicesSection3_row_left_smalls"
                    /> */}
                </div>
                <div className="block1_lefts">
                    <p>
                        Our attention to detail and commitment to our values
                        have helped us grow. It all started 15 years ago with
                        our President, a young aspiring HVAC technician, who
                        wanted to make an impact in the industry. Well, with his
                        drive, and the help of our NexGen family along the way,
                        we've grown to 8 locations across Southern California,
                        servicing customers every day and continuing to grow
                        into the industry standard for all things HVAC. Welcome
                        to NexGen!
                    </p>
                    <div className="left_bottom_block">
                        <div className="block1_desc">
                            <div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Block22;
