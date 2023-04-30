import React from "react";
import galochkaIcon from "../../../../images/galochka.png";
import stars from "../../../../images/block1Stars.png";
import google from "../../../../images/Google.png";
import facebook from "../../../../images/Facebook.png";
import yelp from "../../../../images/Yelp.png";
import banner from "../../../../images/mask.png";
import "./Family.scss";
const Family = () => {
  return (
    <div className="container">
      <div className="block1__inner">
        <div className="block1_left">
          <h1>
            Family owners <br /> business of <br /> engineers
          </h1>
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
                <h4>Quick service Same-Day inspection and estimate</h4>
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
        <div className="block1_right">
          <div className="banner_block">
            <img src={banner} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Family;
