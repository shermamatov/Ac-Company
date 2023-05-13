import React from "react";
import "./EqSecondBlock3.scss";
import star from "../../../images/EqSecond_star.png";
import share from "../../../images/EqSecond_share.png";
import { EqArr1Mini } from "../../../../../const/consts";
import arrR from "../../../../../images/pagg_arr_r.png";
import arrL from "../../../../../images/pagg_arr_l.png";
import Slider from "react-slick";
const EqSecondBlock3 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
    };
    return (
        <div className="EqSecondBlock3 container">
            <h1>Recently views</h1>
            <div className="EqSecondBlock3_catalog_block">
                {EqArr1Mini.map((item) => (
                    <div className="EqSecond_card" key={item.id}>
                        <img src={item.image} alt="" />
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <h3>${item.price}</h3>
                        <div className="EqSecond_card_rating">
                            <img src={star} alt="" /> {item.rating}
                        </div>
                        <img
                            src={share}
                            className="EqSecond_card_share"
                            alt=""
                        />
                        <div className="EqSecond_card_state">New</div>
                    </div>
                ))}
            </div>

            <div className="EqSecondBlock3_catalog_block_adap">
                <Slider {...settings}>
                    {EqArr1Mini.map((item) => (
                        <div className="EqSecond_card_adap" key={item.id}>
                            <img src={item.image} alt="" />
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                            <h3>${item.price}</h3>
                            <div className="EqSecond_card_rating">
                                <img src={star} alt="" /> {item.rating}
                            </div>
                            <img
                                src={share}
                                className="EqSecond_card_share"
                                alt=""
                            />
                            <div className="EqSecond_card_state">New</div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="Eq_Second_mini_pag">
                <div className="paginate_block2">
                    <div>
                        <img src={arrL} alt="" />
                    </div>
                    <div>
                        <img src={arrR} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EqSecondBlock3;
