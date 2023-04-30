import React from "react";
import Slider from "react-slick";
import rating from "../../../../images/rating.png";
import img2 from "../../../../images/block7_img2.webp";
import "./Block8.scss";
const Block8 = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 5,
        focusOnSelect: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };
    return (
        <div>
            <div className="block8_top">
                <h2>Video review from our costumers</h2>
            </div>
            <Slider {...settings}>
                <div>
                    <div className="video_left_block">
                        <img src={img2} alt="" />
                        <h5>Jacob Jones</h5>
                        <div>
                            <img src={rating} alt="" />
                            <p>4.7</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="video_left_block">
                        <img src={img2} alt="" />
                        <h5>Jacob Jones</h5>
                        <div>
                            <img src={rating} alt="" />
                            <p>4.7</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="video_left_block">
                        <img src={img2} alt="" />
                        <h5>Jacob Jones</h5>
                        <div>
                            <img src={rating} alt="" />
                            <p>4.7</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="video_left_block">
                        <img src={img2} alt="" />
                        <h5>Jacob Jones</h5>
                        <div>
                            <img src={rating} alt="" />
                            <p>4.7</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="video_left_block">
                        <img src={img2} alt="" />
                        <h5>Jacob Jones</h5>
                        <div>
                            <img src={rating} alt="" />
                            <p>4.7</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Block8;
