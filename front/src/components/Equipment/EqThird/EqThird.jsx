import React from "react";
import Block1eq from "./block/Block1eq";
import Block2eq from "./block/Block2eq";
import Block3eq from "./block/Block3eq";
import Block4eq from "./block/Block4eq";
import "../Eqir.css";
import EqSecondBlock3 from "../EqSecond/EqSecondBlocks/EqSecondBlock3/EqSecondBlock3";
import Enjeneers from "../../Home/block/block5/Enjeneers";
import LatestNews from "../../Home/block/block10/LatestNews";
import Partners from "../../Home/block/block11/Partners";

// import moros from "../../../images/moros.png";
// import knop from "../../../images/kon.png";

const EqThird = () => {
  return (
    <div className="sihh">
      <Block1eq />
      <Block2eq />
      <Block3eq />
      {/* <Block4eq /> */}
      <EqSecondBlock3 />
      <EqSecondBlock3 />
      <Enjeneers />
      <LatestNews />
      <Partners />
    </div>
  );
};

export default EqThird;
