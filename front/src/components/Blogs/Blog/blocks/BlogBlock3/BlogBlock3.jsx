import React, { useEffect, useState } from "react";
import "./BlogBlock3.scss";
import banner1 from "../../../../../images/blog_block3_banner1.webp";
import banner2 from "../../../../../images/blog_block3_banner2.webp";
import banner3 from "../../../../../images/blog_block3_banner2.webp";

const BlogBlock3 = () => {
    const width = window.screen.width;
    const arr = [banner1, banner2, banner3, banner1];
    const arr2 = [
        banner1,
        banner2,
        banner3,
        banner1,
        banner1,
        banner2,
        banner3,
        banner1,
        banner3,
        banner1,
    ];
    return (
        <div className="blog_block3">
            {width > 800 &&
                arr.map((item, index) => (
                    <div className="blog_card" key={index}>
                        <img src={item} alt="" />
                        <div className="redy">Heating</div>
                        <p className="blue fz-16">December 30, 2019</p>
                        <h3>How, when and why we stay</h3>
                        <p>
                            Staying in touch with customers is important for any
                            company; it often forms part of any good marketing
                            strategy.{" "}
                        </p>
                        <a href="#" className="redy">
                            Read More article
                        </a>
                    </div>
                ))}
            {width < 800 &&
                arr2.map((item, index) => (
                    <div className="blog_card" key={index}>
                        <img src={item} alt="" />
                        <div className="redy">Heating</div>
                        <p className="blue fz-16">December 30, 2019</p>
                        <h3>How, when and why we stay</h3>
                        <p>
                            Staying in touch with customers is important for any
                            company; it often forms part of any good marketing
                            strategy.{" "}
                        </p>
                        <a href="#" className="redy">
                            Read More article
                        </a>
                    </div>
                ))}
            {/* <div className="blog_card">
                <img src={banner2} alt="" />
                <div className="purple" style={{ fontWeight: "700" }}>
                    Cooling
                </div>
                <p className="blue fz-16">December 30, 2019</p>
                <h3>How, when and why we stay</h3>
                <p>
                    Staying in touch with customers is important for any
                    company; it often forms part of any good marketing strategy.
                </p>
                <a href="#" className="redy mt-10">
                    Read More article
                </a>
            </div>
            <div className="blog_card">
                <img src={banner3} alt="" />
                <div className="purple" style={{ fontWeight: "700" }}>
                    Cooling
                </div>
                <p className="blue fz-16">December 30, 2019</p>
                <h3>How, when and why we stay</h3>
                <p>
                    Staying in touch with customers is important for any
                    company; it often forms part of any good marketing strategy.
                </p>
                <a href="#" className="redy mt-10">
                    Read More article
                </a>
            </div>
            <div className="blog_card">
                <img src={banner1} alt="" />
                <div className="purple" style={{ fontWeight: "700" }}>
                    Cooling
                </div>
                <p className="blue fz-16">December 30, 2019</p>
                <h3>How, when and why we stay</h3>
                <p>
                    Staying in touch with customers is important for any
                    company; it often forms part of any good marketing strategy.
                </p>
                <a href="#" className="redy mt-10">
                    Read More article
                </a>
            </div> */}
        </div>
    );
};

export default BlogBlock3;
