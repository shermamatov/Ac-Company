import React from "react";
import "./Services.css";
import "./ServicesAdaptive.css";
import { services_list1, services_list2 } from "../../../../const/consts";
const Services = () => {
    return (
        <div>
            <div className="container">
                <div className="block__inner">
                    <div className="services__text">
                        <p className="mini_title">OUR SERVICES</p>
                        <h2 className="block__title">
                            HVAC Services in Southern California
                        </h2>
                        <p className="block__desc">
                            We offer a wide range of HVAC services catered to
                            both residetial and commercial clients. Even the
                            all-powerful Pointing has no control about the blind
                            texts.
                        </p>
                    </div>
                    <div className="services__block">
                        <ul className="services__list services__list--fc">
                            {services_list1.map((item) => (
                                <li key={item.text}>
                                    <img src={item.img} alt="" />
                                    <p>{item.text}</p>
                                </li>
                            ))}
                        </ul>
                        <ul className="services__list">
                            {services_list2.map((item) => (
                                <li key={item.text}>
                                    <img src={item.img} alt="" />
                                    <p>{item.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
