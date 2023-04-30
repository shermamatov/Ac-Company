import React from "react";
import "./Special.scss";
import obman1 from "../../../../images/Group 736.png";
import obman2 from "../../../../images/Group 736.png";
const Special = () => {
  return (
    <div className="container">
      <div className="block2__inner">
        <h2>Special Deals</h2>
        <p>
          We offer a special deals for Repair service and Installation &
          Replacement servicess
        </p>
        <div>
          <img src={obman1} alt="" />
          <img src={obman2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Special;
