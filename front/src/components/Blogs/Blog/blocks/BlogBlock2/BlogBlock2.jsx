import React from "react";
import "./BlogBlock2.scss";
import banner1 from "../../../../../images/blog_block2_banner1.webp";
import banner2 from "../../../../../images/blog_block2_banner2.webp";
const BlogBlock2 = () => {
    return (
        <div className="blog_block2">
            <div className="blog_card">
                <img src={banner1} alt="" />
                <div className="redy">Heating</div>
                <p className="blue fz-16">December 30, 2019</p>
                <h3>How, when and why we stay</h3>
                <p>
                    Staying in touch with customers is important for any
                    company; it often forms part of any good marketing strategy.
                    Staying in touch with customers is important for any
                    company; it often forms part of any good marketing strategy.{" "}
                </p>
                <a href="#" className="redy">
                    Read More article
                </a>
            </div>
            <div className="blog_card">
                <img src={banner2} alt="" />
                <div className="purple" style={{ fontWeight: "700" }}>
                    Cooling
                </div>
                <p className="blue fz-16">December 30, 2019</p>
                <h3>How, when and why we stay</h3>
                <p>
                    Staying in touch with customers is important for any
                    company; it often forms part of any good marketing strategy.
                    Staying in touch with customers is important for any
                    company; it often forms part of any good marketing strategy.
                </p>
                <a href="#" className="redy mt-10">
                    Read More article
                </a>
            </div>
        </div>
    );
};

export default BlogBlock2;
