import React from "react";
import "./Enjeneers.css";
import "./EnjeneersAdaptive.css";
import img1 from "../../../../images/img1.png";
import img2 from "../../../../images/img2.png";
import img3 from "../../../../images/img3.png";
import img4 from "../../../../images/img4.png";
import img5 from "../../../../images/img5.png";
import img6 from "../../../../images/img6.png";
import im1 from "../../../../images/Vector (5).png";
import im2 from "../../../../images/Vector (6).png";
const Enjeneers = () => {
  return (
    <div className="block1">
      <div className="main_block">
        <div className="block1-title">
          <p className="work-title">our workers</p>
          <h1>Our engineers are trained at manufacturing plants</h1>
          <p className="work-text">
            We offer a wide range of HVAC services catered to both residential
            and commercial clients. Even the all-powerful Pointing has no
            control about the blind texts.
          </p>
        </div>
        <div className="box-for-image">
          <div className="item">
            <img src={img1} alt="" />
          </div>
          <div className="item">
            <img src={img2} alt="" />
          </div>
          <div className="item">
            <img src={img3} alt="" />
          </div>
          <div className="item">
            <img src={img4} alt="" />
          </div>
          <div className="item">
            <img src={img5} alt="" />
          </div>
          <div className="item">
            <img src={img6} alt="" />
          </div>
          <div className="item">
            <img src={img3} alt="" />
          </div>
          <div className="item">
            <img src={img4} alt="" />
          </div>
          <div className="item item1">
            <img src={img2} alt="" />
          </div>
        </div>
        <div className="date">
          <div className="date-box">
            <img src={im1} alt="" />
            <div className="date-mini-box">
              <h1>+1000</h1>
              <h4>Completed project</h4>
            </div>
          </div>
          <div className="date-box">
            <img src={im2} alt="" />
            <div className="date-mini-box">
              <h1>+5000</h1>
              <h4>Happy clients</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enjeneers;
