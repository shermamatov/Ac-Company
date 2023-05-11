import React from "react";

import Block11 from "./blocks/Block11";
import Block22 from "./blocks/Block22";
import Enjeneers from "../Home/block/block5/Enjeneers";
import OurProjectsPhotos from "../Home/block/block9/OurProjectsPhotos";

import Partners from "../Home/block/block11/Partners";
import Location from "../Home/block/location/Location";
import AboutBlock2 from "./blocks/AboutBlock2";

const AboutUs = () => {
    return (
        <div className="aboutUs">
            <Block11 />
            <AboutBlock2 />
            <Block22 />
            <Enjeneers />
            <OurProjectsPhotos />
            <Partners />
            <Location />
            {/* <LatestNews /> */}
        </div>
    );
};

export default AboutUs;
