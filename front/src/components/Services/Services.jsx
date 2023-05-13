import "./services.scss";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Location from "../Home/block/location/Location";
import SectionFamily from "./sections/SectionFamily";

const Services = () => {
    return (
        <div>
            <SectionFamily />
            <Section1 />
            <Section2 />
            <Section3 />
        </div>
    );
};

export default Services;
