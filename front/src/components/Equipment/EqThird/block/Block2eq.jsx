import React from "react";
import sogood from "../../../../images/sogood.png";
import strong from "../../../../images/strong.png";

const Block2eq = () => {
  return (
    <div className="BLock2eq">
      <div className="Block2eq-main">
        <div className="drof">
          <div className="drof-s">
            <h1>10 YERS WARANTY</h1>
            <button className="strch">online book now</button>
          </div>
          <div>
            <img className="strong" src={strong} alt="" />
            <img className="sogood" src={sogood} alt="" />
          </div>
        </div>
        <div className="second-block">
          <div className="second-main">
            <h2 className="vor">Description</h2>
            <h2 className="vors">Manual</h2>
          </div>
          <div className="info-block">
            <p>Furnace + Coil + Condenser</p>
            <br />
            <p>
              A Goodman combination system is a great choice to keep your home
              warm all season long. With tons of extra features and a great
              price, the GMES800403AN is a perfect choice for heating.
            </p>
            <br />
            <p>
              40,000 BTU 80% AFUE Single Stage Goodman Gas Furnace -
              Upflow/Horizontal
            </p>
            <br />
            <br />
            <h3>OVERVIEW</h3>
            <br />
            <p>
              The GMES800403AN Goodman gas furnace features high-quality
              construction and efficient operation at a great value. The
              GMES800403AN single-stage, multi-speed furnace utilizes Goodman's
              superior heat exchanger design to provide efficient, reliable
              heating to your home. If you're looking to cut your energy bills
              and improve your comfort without breaking the bank, your search
              stops with the Goodman GMES800403AN.
            </p>
            <br />
            <h3>QUICK FACTS</h3>
            <p>
              40,000 BTU 80% AFUE Single Stage Goodman Gas Furnace -
              Upflow/Horizontal
            </p>
            <br />
            <p>Requires metal flue venting</p>
            <br />
            <p>read more</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block2eq;
