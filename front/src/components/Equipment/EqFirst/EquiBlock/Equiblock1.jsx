import React from "react";
import "../../Eqir.css";
import { eqFirst, eqFirst2 } from "../../../../const/consts";
const Equiblock1 = () => {
  return (
    <div className="container">
      <div className="eq1">
        <h1>RESIDENTIAL HVAC</h1>
        <div className="for-descrip">
          {eqFirst.map((item) => (
            <div className="for-des-main" key={item.id}>
              <img src={item.image} alt="" />
              <div>
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="eq1">
        <h1>COMMERCIAL HVAC</h1>
        <div className="for-descrip">
          {eqFirst2.map((item) => (
            <div className="for-des-main" key={item.id}>
              <img src={item.image} alt="" />
              <div>
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equiblock1;
