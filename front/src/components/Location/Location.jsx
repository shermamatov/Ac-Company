import React from "react";
import LocationBlock1 from "./LocationBlocks/LocationBlock1/LocationBlock1";
import "./Location.scss";
import LocationBlock2 from "./LocationBlocks/LocationBlock2/LocationBlock2";
const Location = () => {
    return (
        <div className="location_main">
            <LocationBlock1 />
            <LocationBlock2 />
        </div>
    );
};

export default Location;
