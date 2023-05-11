import React from "react";
import Family from "../../Home/block/block1/Family";
import BestOffBlock1 from "../BestOffers1/BestOff1Blocks/BestOff1Block1/BestOffBlock1";
import BestOffBlock2 from "../BestOffers1/BestOff1Blocks/BestOff1Block2/BestOffBlock2";
import LatestNews from "../../Home/block/block10/LatestNews";
import Partners from "../../Home/block/block11/Partners";

const BestOffers2 = () => {
    return (
        <div>
            <Family />
            <BestOffBlock1 col={6} />
            <BestOffBlock2 />
            <LatestNews />
            <Partners />
        </div>
    );
};

export default BestOffers2;
