import React from "react";
import bigIcon from "../../../../../images/services-icon-big.png";
import smallIcon from "../../../../../images/services-icon-small.png";
const BestOffBlock2 = () => {
    return (
        <section className="servicesSection3">
            <div className="container">
                <div className="servicesSection3_row">
                    <div className="servicesSection3_row_left">
                        <img
                            src={bigIcon}
                            alt=""
                            className="servicesSection3_row_left_big"
                        />
                        <img
                            src={smallIcon}
                            alt=""
                            className="servicesSection3_row_left_small"
                        />
                    </div>
                    <div className="servicesSection3_row_right">
                        <h1 className="servicesSection3_title">
                            10 YERS WARANTY
                        </h1>
                        <button className="servicesSection3_btn">
                            online book now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BestOffBlock2;
