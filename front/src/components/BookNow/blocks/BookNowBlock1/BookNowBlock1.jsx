import React from "react";
import "./BookNowBlock1.scss";
import img1 from "../../images/bookNow_img1.webp";
const BookNowBlock1 = () => {
    return (
        <div className="bookNow_block1">
            <div className="left">
                <p>BOOK NOW</p>
                <h1>Our team is always happy to help you</h1>
            </div>
            <div className="right">
                <img src={img1} alt="" />
            </div>
        </div>
    );
};

export default BookNowBlock1;
