import reviewsVideoImg from "../../../img/reviews-video-img.png";

const VideoForm = () => {
    return (
        <div className="reviewsWritePopup_bottom">
            <h1 className="reviewsWritePopup_bottom_title">upload video</h1>
            <div className="reviewsWritePopup_bottom_img">
                <button className="reviewsWritePopup_bottom_btn">
                    {" "}
                    &#215;
                </button>
                <img src={reviewsVideoImg} alt="" />
            </div>
        </div>
    );
};

export default VideoForm;
