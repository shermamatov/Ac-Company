import cardTextIcon from "../img/card-textIcon.png";
import cardCenterIcon from "../img/card-centerIcon.png";
import cardImg from "../img/card-img.png";
import cardArrow from "../img/card-arrow.png";
import cardImgMobile from "../img/card-img-mobile.png";
import cardMobileIcon from "../img/card-mobileIcon.png";

const Section2 = () => {
  return (
    <section className="servicesMoreSection2">
      <div className="container">
        <div className="servicesMoreSection2_card">
          <div className="servicesMoreSection2_card_title">
            <img
              src={cardTextIcon}
              alt=""
              className="servicesMoreSection2_card_title_textIcon"
            />
            <h1 className="servicesMoreSection2_card_title_text">
              <img
                src={cardCenterIcon}
                alt=""
                className="servicesMoreSection2_card_title_centerIcon"
              />
              Repair service
            </h1>
            <img
              src={cardTextIcon}
              alt=""
              className="servicesMoreSection2_card_title_textIcon"
            />
          </div>
          <p className="servicesMoreSection2_card_text">
            We give a <span>1 year guarantee</span> for the trouble-free
            operation of your old air conditioner{" "}
          </p>
          <a href="#" className="servicesMoreSection2_card_link">
            read more
          </a>
          <button className="servicesMoreSection2_card_btn">Book now</button>
          <img src={cardImg} alt="" className="servicesMoreSection2_card_img" />
        </div>

        <div className="servicesMoreSection2_card-mobile">
          <div className="servicesMoreSection2_card_title">
            <img
              src={cardMobileIcon}
              alt=""
              className="servicesMoreSection2_card_title_textIcon"
            />
            <h1 className="servicesMoreSection2_card_title_text">
              <img
                src={cardCenterIcon}
                alt=""
                className="servicesMoreSection2_card_title_centerIcon"
              />
              Installation & <br /> Replacement service
            </h1>
            <img
              src={cardTextIcon}
              alt=""
              className="servicesMoreSection2_card_title_textIcon"
            />
          </div>

          <button className="servicesMoreSection2_card_btn">Book now</button>

          <div className="servicesMoreSection2_card_bottom">
            <div className="servicesMoreSection2_card_bottom_left">
              <p className="servicesMoreSection2_card_text">
                Up to <span>10 years</span> air conditioner warranty Lifetime
                work guarantee
              </p>
              <a href="#" className="servicesMoreSection2_card_link">
                read more
              </a>
            </div>

            <div className="servicesMoreSection2_card_bottom_right">
              <img
                src={cardArrow}
                alt=""
                className="servicesMoreSection2_card_arrowImg"
              />
              <img
                src={cardImgMobile}
                alt=""
                className="servicesMoreSection2_card_img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
