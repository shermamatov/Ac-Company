import React, { useState } from "react";
import "./BookNowForm2.scss";
import Slider from "react-slick";
import arrLeft from "../../../../images/pagg_arr_l.png";
import arrRight from "../../../../images/pagg_arr_r.png";
// import superChel from "../../../../images/superHero.png";

const BookNowForm2 = ({ setLocal }) => {
    const [day, setDay] = useState(3);
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const settings2 = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="bookNow_form2">
            <h2>Choose day and time</h2>
            <div className="blockNow_form2_block2">
                <div className="blockNowForm2">
                    {/* <h2 className="blockNowForm2_month"> */}
                    <div className="date_block-wrapper month_form">
                        <button className="month_form-prev-btn">
                            <img src={arrLeft} alt="" />
                        </button>
                        <Slider {...settings2}>
                            <div>
                                <h3>February</h3>
                            </div>
                            <div>
                                <h3>march</h3>
                            </div>
                            <div>
                                <h3>april</h3>
                            </div>
                            <div>
                                <h3>may</h3>
                            </div>
                            <div>
                                <h3>june</h3>
                            </div>
                            <div>
                                <h3>july</h3>
                            </div>
                            <div>
                                <h3>august</h3>
                            </div>
                        </Slider>
                        <button className="month_form-next-btn">
                            <img src={arrRight} alt="" />
                        </button>
                    </div>
                    {/* </h2> */}
                    <div className="date_block-wrapper">
                        <button className="date_block-wrapper-prev-btn">
                            <img src={arrLeft} alt="" />
                        </button>
                        <Slider {...settings}>
                            <div>
                                <div
                                    className="date_block"
                                    onClick={() => {
                                        setDay(20);
                                        console.log(day);
                                    }}
                                >
                                    <h2>Monday</h2>
                                    <h1>20</h1>
                                </div>
                            </div>

                            <div>
                                <div
                                    className="date_block"
                                    onClick={() => {
                                        setDay(21);
                                        console.log(day);
                                    }}
                                >
                                    <h2>Monday</h2>
                                    <h1>21</h1>
                                </div>
                            </div>

                            <div>
                                <div
                                    className="date_block"
                                    onClick={() => {
                                        setDay(22);
                                        console.log(day);
                                    }}
                                >
                                    <h2>Monday</h2>
                                    <h1>22</h1>
                                </div>
                            </div>

                            <div>
                                <div
                                    className="date_block"
                                    onClick={() => {
                                        setDay(23);
                                        console.log(day);
                                    }}
                                >
                                    <h2>Monday</h2>
                                    <h1>23</h1>
                                </div>
                            </div>
                            <div>
                                <div
                                    className="date_block"
                                    onClick={() => {
                                        setDay(24);
                                        console.log(day);
                                    }}
                                >
                                    <h2>Monday</h2>
                                    <h1>24</h1>
                                </div>
                            </div>

                            <div>
                                <div
                                    className="date_block"
                                    onClick={() => {
                                        setDay(25);
                                        console.log(day);
                                    }}
                                >
                                    <h2>Monday</h2>
                                    <h1>25</h1>
                                </div>
                            </div>

                            <div>
                                <div
                                    className="date_block"
                                    onClick={() => {
                                        setDay(26);
                                        console.log(day);
                                    }}
                                >
                                    <h2>Monday</h2>
                                    <h1>26</h1>
                                </div>
                            </div>
                        </Slider>
                        <button className="date_block-wrapper-next-btn">
                            <img src={arrRight} alt="" />
                        </button>
                    </div>
                    <h2 className="blockNowForm2_time">
                        Select time for Monday, February 20
                    </h2>
                    <div className="blockNowForm2_time_wrapper">
                        <p className="blockNowForm2_time_item">8 am - 11 am</p>
                        <p className="blockNowForm2_time_item">11 am - 2 pm</p>
                        <p className="blockNowForm2_time_item">2 pm - 5 pm</p>
                        <p className="blockNowForm2_time_item">5 pm - 8 pm</p>
                    </div>
                    <textarea
                        placeholder="Comment"
                        className="blockNowForm2_textarea"
                    ></textarea>
                </div>
                {/* <div className="form2_block2_imgBlock">
                    <img src={superChel} alt="" />
                </div> */}
            </div>
            <button
                className="form1_next_btn"
                onClick={() => setLocal("form3")}
            >
                Submit
            </button>
        </div>
    );
};

export default BookNowForm2;
