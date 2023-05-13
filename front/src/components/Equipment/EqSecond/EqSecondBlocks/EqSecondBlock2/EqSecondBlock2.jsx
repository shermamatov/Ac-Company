import React, { useState } from "react";
import { EqArr1, EqArr2 } from "../../../../../const/consts";
import "./EqSecondBlock2.scss";
import star from "../../../images/EqSecond_star.png";
import share from "../../../images/EqSecond_share.png";
import filterIcon from "../../../../Photos/images/filterIcon.png";
import EqSecondFilter from "../EqSecondFilter/EqSecondFilter";
import arrR from "../../../../../images/pagg_arr_r.png";
import arrL from "../../../../../images/pagg_arr_l.png";
const EqSecondBlock2 = ({ setCategActive, categActive, modal, setModal }) => {
    function catalogRender() {
        if (categActive) {
            return EqArr2;
        } else {
            return EqArr1;
        }
    }

    return (
        <div className="EqSecondBlock2 container">
            <div
                className="EqSecond_filter_block"
                onClick={(e) => {
                    setModal(!modal);
                    e.stopPropagation();
                }}
            >
                <img src={filterIcon} alt="" />
                <p>Filter</p>
            </div>
            <div className="EqSecondBlock2_catalog_block">
                {modal && <EqSecondFilter />}
                {catalogRender().map((item) => (
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

export default EqSecondBlock2;
