import React from 'react'
import './latestNews.scss'
import projectPhoto1 from "../../../../images/project_photo1.png";
import projectPhoto2 from "../../../../images/project_photo2.png";
import projectPhoto3 from "../../../../images/project_photo3.png";

export default function LatestNews() {
  return (
    <div className='news'>
        <div className="container">
            <div className="news__inner">
                <div className="news__top">
                    <p className="mini_title">STAY INFORMED</p>
                    <h2 className="block__title">
                        Our Latest News
                    </h2>
                </div>
                <div className="news__bottom">
                    <div className="news__blog">
                        <img src={projectPhoto1} alt="" />
                        <span>13 Sep 2022</span>
                        <h3>Installation</h3>
                        <p>We offer a wide range of HVAC services catered to both residential and commercial clients. Even the all-powerful Pointing has no control about the blind texts.</p>
                        <button>read more</button>
                    </div>
                    <div className="news__blog">
                        <img src={projectPhoto2} alt="" />
                        <span>13 Sep 2022</span>
                        <h3>Installation</h3>
                        <p>We offer a wide range of HVAC services catered to both residential and commercial clients. Even the all-powerful Pointing has no control about the blind texts.</p>
                        <button>read more</button>
                    </div>
                    <div className="news__blog">
                        <img src={projectPhoto3} alt="" />
                        <span>13 Sep 2022</span>
                        <h3>Installation</h3>
                        <p>We offer a wide range of HVAC services catered to both residential and commercial clients. Even the all-powerful Pointing has no control about the blind texts.</p>
                        <button>read more</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
