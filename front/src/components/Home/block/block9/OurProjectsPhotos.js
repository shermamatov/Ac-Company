import "./ourProjectPhotos.scss";

import projectPhoto1 from "../../../../images/project_photo1.png";
import projectPhoto2 from "../../../../images/project_photo2.png";
import projectPhoto3 from "../../../../images/project_photo3.png";

import React from 'react';

const OurProjectsPhotos = () => {
    return (
        <section className="block9">
          <div className="container">
            <div className="block9_top">
              <div className="block9_top_left">
                <h2 className="block9_subtitle">PHOTOS</h2>
                <h1 className="block9_title">Our project photos</h1>
              </div>
    
              <div className="block9_top_btns">
                <button> &lt; </button>
                <button> &gt; </button>
              </div>
            </div>
            <div className="block9_slider">
              <div className="block9_slider_item">
                <img src={projectPhoto1} alt="" />
              </div>
              <div className="block9_slider_item">
                <img src={projectPhoto2} alt="" />
              </div>
              <div className="block9_slider_item">
                <img src={projectPhoto3} alt="" />
              </div>
              <div className="block9_slider_item">
                <img src={projectPhoto1} alt="" />
              </div>
              <div className="block9_slider_item">
                <img src={projectPhoto2} alt="" />
              </div>
              <div className="block9_slider_item">
                <img src={projectPhoto3} alt="" />
              </div>
            </div>
    
            <div className="block9_bottom">
              <div className="block9_bottom_btns">
                <button> &lt; </button>
                <button> &gt; </button>
              </div>
            </div>
          </div>
        </section>
      );
};

export default OurProjectsPhotos;
