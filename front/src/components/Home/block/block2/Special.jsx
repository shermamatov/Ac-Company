import React from "react";
import "./Special.scss";
import obman1 from "../../../../images/bum.png";
import obman2 from "../../../../images/bum2.png";
const Special = () => {
    return (
        <div className="block2_main">
            <div className="block2__inner">
                <h2>Special Deals</h2>
                <p>
                    We offer a special deals for Repair service and Installation
                    & Replacement servicess
                </p>
                <div className="block2_obman">
                    <div>
                        <img src={obman1} alt="" />
                        <h3>
                            Up to <span>10 years</span> air <br /> conditioner
                            warranty <br />
                            Lifetime work <br /> guarantee
                        </h3>
                        <a href="#">read more</a>
                        <button>Book now</button>
                    </div>
                    <div>
                        <img src={obman2} alt="" />
                        <h3>
                            We give a <span>1 year guarantee</span> <br /> for
                            the trouble-free <br /> operation of your old air{" "}
                            <br />
                            conditioner{" "}
                        </h3>
                        <a href="#">read more</a>
                        <button>Book now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Special;
