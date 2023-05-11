import img1 from "../img/section3-img1.png";
import img2 from "../img/section3-img2.png";
import img3 from "../img/section3-img3.png";

const Section3 = () => {
    return (
        <section className="servicesMoreSection3">
            <div className="container">
                <p className="servicesMoreSection3_subtitle">OUR SERVICES</p>
                <h1 className="servicesMoreSection3_title">
                    Heating repair in <span>Los Angeles</span>
                </h1>
                <p className="servicesMoreSection3_text">
                    We offer a wide range of HVAC services catered to both
                    residential and commercial clients. Even the all-powerful
                    Pointing has no control about the blind texts.
                </p>
                <div className="row">
                    <div className="col-4">
                        <div className="servicesMoreSection3_card">
                            <h3 className="servicesMoreSection3_card_title">
                                Furnace repair
                            </h3>
                            <img
                                src={img1}
                                alt=""
                                className="servicesMoreSection3_card_img"
                            />
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="servicesMoreSection3_card">
                            <h3 className="servicesMoreSection3_card_title">
                                Heater repair
                            </h3>
                            <img
                                src={img2}
                                alt=""
                                className="servicesMoreSection3_card_img"
                            />
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="servicesMoreSection3_card">
                            <h3 className="servicesMoreSection3_card_title">
                                Heat pump repair
                            </h3>
                            <img
                                src={img3}
                                alt=""
                                className="servicesMoreSection3_card_img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section3;
