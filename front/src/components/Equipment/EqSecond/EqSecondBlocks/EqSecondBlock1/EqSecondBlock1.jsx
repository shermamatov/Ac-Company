import React, { useState } from "react";
import img1 from "../../../../Reviews/img/review_img.png";
import img2 from "../../../images/EqSecond_img2.png";
import img3 from "../../../images/EqSecond_img3.png";
import "./EqSecondBlock1.scss";

const EqSecondBlock1 = ({ setCategActive, categActive }) => {
    return (
        <div className="EqSecondBlock1 container">
            <div className="EqSecondBlock1_top">
                <div className="EqSecondBlock1_left">
                    <h4 className="redy">EQUIPMENT</h4>
                    <h1>GAS FURNACE</h1>
                    <p>
                        A global print fulfillment company partnered with Mason
                        Interactive to grow omnichannel sales via Search Engine
                        Optimization (SEO). During the course of the engagement,
                        the client saw a 134% increase in organic traffic,
                        resulting in a measurable increase in leads, and sales.
                        the client saw a 134% increase in organic traffic,
                        resulting in a measurable increase in leads, and sales.
                    </p>
                </div>
                <div className="EqSecondBlock1_right">
                    <img src={img1} alt="" />
                </div>
            </div>
            <div className="EqSecondBlock1_bottom">
                <div
                    className={`${categActive && "ESB1b_acive"}`}
                    onClick={() => setCategActive(true)}
                >
                    <img src={img3} alt="" />
                    <h3>Furnace & AC</h3>
                </div>
                <div
                    className={`${!categActive && "ESB1b_acive"}`}
                    onClick={() => setCategActive(false)}
                >
                    <img src={img2} alt="" />
                    <h3>
                        Packaged <br /> & Rooftop Units
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default EqSecondBlock1;
