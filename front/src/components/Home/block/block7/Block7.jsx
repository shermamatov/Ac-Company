import React from "react";
import "./Block7.scss";
import { otzv1, otzv2 } from "../../../../const/consts";
import rating from "../../../../images/rating.png";
import banner7 from "../../../../images/banner_block7.webp";
import superGey from "../../../../images/neg.png";
import Slider from "react-slick";
const Block7 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      className="block7_main"
      style={{
        backgroundImage: `url(${banner7})`,
        backgroundRepeat: "no-repeat",
        // backgroundSize: "100%",
      }}
    >
      <div className="block7_left">
        <p>TESTIMONIALS</p>
        <h2>Words From Customers</h2>
        <div className="text_review">
          {otzv1.map((item) => (
            <div className="text_review_block" key={item.id}>
              <p>{item.desc}</p>
              <h5>{item.name}</h5>
              <div>
                <img src={rating} alt="" />
                <p>{item.rating}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text_review_adap">
          <Slider {...settings}>
            {otzv2.map((item) => (
              <div className="text_review_block" key={item.id}>
                <p>{item.desc}</p>
                <h5>{item.name}</h5>
                <div>
                  <img src={rating} alt="" />
                  <p>{item.rating}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <h2>Schedule appointment </h2>
      <div className="block7_right">
        <div className="block7_img_block">
          <img style={{ width: "200%" }} src={superGey} alt="" />
        </div>
        <div>
          <button className="block7_btn1">online book now</button>
          <p>or</p>
          <button className="block7_btn2">Call now</button>
        </div>
      </div>
    </div>
  );
};

export default Block7;
