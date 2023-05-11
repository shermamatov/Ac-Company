import "./servicesMore.scss";
import Section1 from "../Home/block/block1/Family";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "../Services/sections/Section3";
import Location from "../Home/block/location/Location";
import Enjeneers from "../Home/block/block5/Enjeneers";
import OurProjectsPhotos from "../Home/block/block9/OurProjectsPhotos";
import LatestNews from "../Home/block/block10/LatestNews";
import Partners from "../Home/block/block11/Partners";

const ServicesMore = () => {
    return (
        <div>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Enjeneers />
            <OurProjectsPhotos />
            <LatestNews />
            <Partners />
        </div>
    );
};

export default ServicesMore;
