import React from "react";
import "./BookNowForm1.scss";
// import superChel from "../../../../images/superHero.png";
const BookNowForm1 = ({ setLocal }) => {
    return (
        <div className="bookNow_form1">
            <h3>Fill out the form and we will come as soon as possible.</h3>
            <div className="bookNow_form1_block">
                <div className="left">
                    <form>
                        <div>
                            <label htmlFor="fname">
                                Name <span>*</span>
                            </label>
                            <input
                                type="text"
                                name="fname"
                                placeholder="Johne Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="fPhone">
                                Phone <span>*</span>
                            </label>
                            <input
                                type="text"
                                name="fPhone"
                                placeholder="818 545 12 23"
                            />
                        </div>
                        <div>
                            <label htmlFor="femail">
                                E-Mail <span>*</span>
                            </label>
                            <input
                                type="text"
                                name="femail"
                                placeholder="example@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="faddress">
                                address <span>*</span>
                            </label>
                            <input
                                type="text"
                                name="faddress"
                                placeholder="12532 Weliam ave, Glendael, CA 92505"
                            />
                        </div>
                        <div>
                            <label htmlFor="fservice">
                                Service <span>*</span>
                            </label>
                            <input
                                type="text"
                                name="fservice"
                                placeholder="Heating Repair, AC Repair, ..."
                            />
                        </div>
                        <div className="odinokii_input">
                            <input
                                type="text"
                                placeholder="I'm a owner, I'm manager, Paymner"
                            />
                        </div>
                    </form>
                </div>
                <div className="right">
                    {/* <img src={superChel} alt="" /> */}
                </div>
            </div>
            <button
                className="form1_next_btn"
                onClick={() => setLocal("form2")}
            >
                Next
            </button>
        </div>
    );
};

export default BookNowForm1;
