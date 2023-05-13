import React from "react";
import moros from "../../../../images/moros.png";
import knop from "../../../../images/kon.png";

import left from "../../../../images/left.png";
import right from "../../../../images/right.png";
import facebook from "../../../../images/facebooks.png";
import twitters from "../../../../images/twitters.png";
import ins from "../../../../images/Lin.png";
import zv from "../../../../images/zv.png";

const Block1eq = () => {
  return (
    <div className="EqThird container">
      <div className="EqThird-main">
        <section>
          <div className="EqThird_first_section">
            {/*  */}
            <div className="Fors-left">
              <div className="main-image-elec">
                <img src={moros} alt="" />
              </div>
              <div className="for_scrolling">
                <div className="forScrollBlock">
                  <img src={left} alt="" />
                </div>
                <div className="photesScroll">
                  <img src={knop} alt="" />
                </div>
                <div className="photesScroll">
                  <img src={knop} alt="" />
                </div>
                <div className="photesScroll">
                  <img src={knop} alt="" />
                </div>
                <div className="forScrollBlock">
                  <img src={right} alt="" />
                </div>
              </div>
            </div>
            <div className="Fors-right">
              <div className="for-title">
                <h1>
                  A-Series Ultra Low NOx Gas Furnace 80% Single Stage 40,000 BTU
                  Non-Variable Upflow/Horizontal 14.5" wide
                </h1>
                <p>
                  A global print fulfillment company partnered with Mason
                  Interactive to grow omnichannel sales via Search Engine
                  Optimization (SEO). During the course of the engagement, the
                  client saw a 134% increase in organic traffic, resulting in a
                  measurable increase in leads, and sales. the client saw a 134%
                  increase in organic traffic, resulting in a measurable
                  increase in leads, and sales.
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    style={{ width: "15px", height: "15px" }}
                    src={zv}
                    alt=""
                  />
                  <p>4.7 (145 review)</p>
                </div>
                <div className="Fors-lefts">
                  <div className="main-image-elec">
                    <img src={moros} alt="" />
                  </div>
                  <div className="for_scrolling">
                    <div className="forScrollBlock">
                      <img src={left} alt="" />
                    </div>
                    <div className="photesScroll des">
                      <img src={knop} alt="" />
                    </div>
                    <div className="photesScroll">
                      <img src={knop} alt="" />
                    </div>
                    <div className="photesScroll des">
                      <img src={knop} alt="" />
                    </div>
                    <div className="forScrollBlock">
                      <img src={right} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="chetchik">
                <div>
                  <div className="pich">
                    <h3>1.5 Ton</h3>
                    <h2 style={{ color: "red" }}>$ 2,500.00 ($ 150/m)</h2>
                  </div>

                  <div className="icons-in">
                    <img src={facebook} alt="" />
                    <img src={twitters} alt="" />
                    <img src={ins} alt="" />
                  </div>
                  <div className="pomosh">
                    <div>
                      <div className="fit">
                        <td className="asd">
                          <th>1.5 Ton</th>
                          <th>$ 2,500.00</th>

                          <th>2 Ton</th>
                          <th>$ 2,900.00</th>
                          <th>2.5 Ton</th>
                          <th>$ 3,200.00</th>
                          <th>3 Ton</th>
                          <th>$ 3,600.00</th>
                          <th>4 Ton</th>
                          <th>$ 3,700.00</th>
                          <th>5 Ton</th>
                          <th>$ 4,100.00</th>
                        </td>
                      </div>
                      <button className="REPLACEMENT">
                        REPLACEMENT <span style={{ color: "black " }}>$99</span>{" "}
                      </button>
                    </div>
                    <div className="shadow"></div>

                    <div className="selector">
                      <div className="box-shadow">
                        <h2>Today free estimate</h2>
                        <button>online book now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Block1eq;
