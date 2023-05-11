import React from "react";
import Family from "../../Home/block/block1/Family";
import BestOffBlock1 from "./BestOff1Blocks/BestOff1Block1/BestOffBlock1";
import BestOffBlock2 from "./BestOff1Blocks/BestOff1Block2/BestOffBlock2";
import Enjeneers from "../../Home/block/block5/Enjeneers";
import OurProjectsPhotos from "../../Home/block/block9/OurProjectsPhotos";
import LatestNews from "../../Home/block/block10/LatestNews";
import Partners from "../../Home/block/block11/Partners";
import Section3 from "../../Services/sections/Section3";
const BestOffers1 = () => {
    return (
        <div>
            <Family />
            <BestOffBlock1 col={2} />
            <Section3 />
            {/* <BestOffBlock2 /> */}
            <Enjeneers />
            <OurProjectsPhotos />
            <LatestNews />
            <Partners />
        </div>
    );
};

export default BestOffers1;
