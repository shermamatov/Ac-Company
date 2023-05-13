import reviewsVideoImg from "../../../img/reviews-video-img.png";

const WriteForm = () => {
    return (
        <div>
            <div className="reviewsWritePopup_bottom">
                <h1 className="reviewsWritePopup_bottom_title">upload photo</h1>
                <div className="reviewsWritePopup_bottom_img">
                    <button className="reviewsWritePopup_bottom_btn">
                        &#215;
                    </button>
                    <img src={reviewsVideoImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default WriteForm;
