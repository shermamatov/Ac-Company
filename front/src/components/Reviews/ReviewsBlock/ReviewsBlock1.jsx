import { useState } from "react";
import reviewsBlock1Star from "../img/reviewsBlock1-star.svg";
import reviewsBlock1Cirlce from "../img/reviewsBlock1-circle.png";
import reviewsBlock1Big from "../img/reviewsBlock1-big.png";
import ReviewsWritePopup from "./ReviewsPopup/ReviewsWritePopup/ReviewsWritePopup";
import banner from "../../../images/mask2.webp";

// import superHero from "../../../images/superHero.png";
const ReviewsBlock1 = () => {
    const [showPopup, setShowPopup] = useState(false);
    return (
        <section className="reviewsBlock1">
            <ReviewsWritePopup
                showPopup={showPopup}
                setShowPopup={setShowPopup}
            />
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <p className="reviewsBlock1_subtitle">TESTIMONIALS</p>
                        <h1 className="reviewsBlock1_title">
                            Overall Rating <br /> from 129 Reviews
                        </h1>
                        <div className="reviewsBlock1_stars">
                            <div className="reviewsBlock1_stars_icon">
                                <img src={reviewsBlock1Star} alt="" />
                                <img src={reviewsBlock1Star} alt="" />
                                <img src={reviewsBlock1Star} alt="" />
                                <img src={reviewsBlock1Star} alt="" />
                                <img src={reviewsBlock1Star} alt="" />
                            </div>
                            <h4 className="reviewsBlock1_stars_count">
                                5.0/4.7
                            </h4>
                        </div>
                        <p className="reviewsBlock1_text">
                            95% of clients recommend us
                        </p>
                        <div className="reviewsBlock1_raiting">
                            <div className="reviewsBlock1_raiting_item">
                                <p className="reviewsBlock1_raiting_item_left">
                                    5 star
                                </p>
                                <div className="reviewsBlock1_raiting_item_line"></div>
                                <p className="reviewsBlock1_raiting_item_right">
                                    (120)
                                </p>
                            </div>
                            <div className="reviewsBlock1_raiting_item">
                                <p className="reviewsBlock1_raiting_item_left">
                                    4 star
                                </p>
                                <div className="reviewsBlock1_raiting_item_line"></div>
                                <p className="reviewsBlock1_raiting_item_right">
                                    (9)
                                </p>
                            </div>
                            <div className="reviewsBlock1_raiting_item">
                                <p className="reviewsBlock1_raiting_item_left">
                                    3 star
                                </p>
                                <div className="reviewsBlock1_raiting_item_line"></div>
                                <p className="reviewsBlock1_raiting_item_right">
                                    (0)
                                </p>
                            </div>
                            <div className="reviewsBlock1_raiting_item">
                                <p className="reviewsBlock1_raiting_item_left">
                                    2 star
                                </p>
                                <div className="reviewsBlock1_raiting_item_line"></div>
                                <p className="reviewsBlock1_raiting_item_right">
                                    (0)
                                </p>
                            </div>
                            <div className="reviewsBlock1_raiting_item">
                                <p className="reviewsBlock1_raiting_item_left">
                                    1 star
                                </p>
                                <div className="reviewsBlock1_raiting_item_line"></div>
                                <p className="reviewsBlock1_raiting_item_right">
                                    (0)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="reviewsBlock1_right">
                        <button onClick={() => setShowPopup(true)}>
                            Write a review
                        </button>
                        <div>
                            <img src={banner} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewsBlock1;
