import React from "react";
import { completedProjetsList } from "../../../const/consts";

const Section2 = () => {
  return (
    <section className="servicesSection2">
      <div className="container">

        <h1 className="servicesSection2_title"><span>10 000+ COMPLETED <br /> PROJECTS</span></h1>
        <div className="row">
          <div className="col-3">
            <ul className="servicesSection2_list">
              {completedProjetsList.map((item) => {
                return (
                  <li key={item.text} className="servicesSection2_list_item">
                   <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-3">
            <ul className="servicesSection2_list">
              {completedProjetsList.map((item) => {
                return (
                  <li key={item.text} className="servicesSection2_list_item">
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-3">
            <ul className="servicesSection2_list">
              {completedProjetsList.map((item) => {
                return (
                  <li key={item.text} className="servicesSection2_list_item">
                   <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-3">
            <ul className="servicesSection2_list">
              {completedProjetsList.map((item) => {
                return (
                  <li key={item.text} className="servicesSection2_list_item">
                  <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <button className="servicesSection2_btn">more projects</button>
      </div>
    </section>
  );
};

export default Section2;
