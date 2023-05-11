import React from "react";
import serviecesSection1Img from "../img/servicesSection1.png";
import { services_list1, services_list2 } from "../../../const/consts";

const Section1 = () => {
    const width = window.screen.width;

    return (
        <section className="servicesSection1">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1 className="servicesSection1_title">
                            HVAC Services in Southern California
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
                    <div className="col-6">
                        <ul className="servicesSection1_list">
                            {services_list1.map((item) => {
                                return (
                                    <li
                                        className="servicesSection1_list_item"
                                        key={item.text}
                                    >
                                        <img src={item.img} alt="" />
                                        <p>{item.text}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul className="servicesSection1_list">
                            {services_list2.map((item) => {
                                return (
                                    <li
                                        className="servicesSection1_list_item"
                                        key={item.text}
                                    >
                                        <img src={item.img} alt="" />
                                        <p>{item.text}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section1;
