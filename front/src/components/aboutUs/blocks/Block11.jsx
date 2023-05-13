import React from "react";
import serviecesSection1Img from "../../Services/img/servicesSection1.png";

const Block11 = () => {
    const width = window.screen.width;
    return (
        <section className="servicesSection1">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <p
                            style={{
                                color: "red",
                                fontSize: "20px",
                                fontFamily: "montserrat",
                            }}
                        >
                            about us
                        </p>
                        <h1 className="servicesSection1_title">
                            Family owners business of engineers
                        </h1>
                        <p className="servicesSection1_text">
                            We offer a wide range of HVAC services catered to
                            both residential and commercial clients. Even the
                            all-powerful Pointing has no control about the blind
                            texts.
                        </p>
                    </div>
                    <div
                        className={`col-6 ${
                            width > 1800 && "servicesSec1_img_block"
                        }`}
                    >
                        <img
                            className="servicesSection1_img"
                            src={serviecesSection1Img}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Block11;
