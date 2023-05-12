import React from "react";
import PhotoBlock1 from "./PhotosBlocks/PhotoBlock1/PhotoBlock1";
import arrR from "../../images/pagg_arr_r.png";
import arrL from "../../images/pagg_arr_l.png";

const Photos = () => {
    return (
        <div>
            <PhotoBlock1 />
            <div className="paginate_block">
                <div>
                    <img src={arrL} alt="" />
                </div>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <div>
                    <img src={arrR} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Photos;
