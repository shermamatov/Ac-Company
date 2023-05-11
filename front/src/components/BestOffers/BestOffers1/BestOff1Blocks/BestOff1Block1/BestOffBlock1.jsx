import React from "react";
import "./BestOffBlock1.scss";
import obman1 from "../../../../../images/bum.png";
import obman2 from "../../../../../images/bum2.png";
const BestOffBlock1 = ({ col }) => {
    function renderdCard(c) {
        let arr = [];
        for (let i = 0; i < c; i++) {
            arr.push(i);
        }
        return arr;
    }
    return (
        <div>
            <div className="block2_main">
                <div className="block2__inner2">
                    {renderdCard(col).map((item) => (
                        <div className="block2_obman" key={item}>
                            <div>
                                <img src={obman1} alt="" />
                                <h3>
                                    Up to <span>10 years</span> air <br />{" "}
                                    conditioner warranty <br />
                                    Lifetime work <br /> guarantee
                                </h3>
                                <a href="#">read more</a>
                                <button>Book now</button>
                            </div>
                            <div>
                                <img src={obman2} alt="" />
                                <h3>
                                    We give a <span>1 year guarantee</span>{" "}
                                    <br /> for the trouble-free <br /> operation
                                    of your old air <br />
                                    conditioner{" "}
                                </h3>
                                <a href="#">read more</a>
                                <button>Book now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestOffBlock1;
