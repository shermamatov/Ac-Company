import React from "react";
import "./BlogBlock1.scss";
import banner1 from "../../../../../images/blog_block1_banner1.webp";
const BlogBlock1 = () => {
    return (
        <div>
            <div className="blog_nav_block">
                <div className="black">All</div>
                <div className="purple">Cooling</div>
                <div className="blue">Business Strategy </div>
                <div className="redy">Heating </div>
                <div className="yellow">Repairing</div>
                <div className="green">Commercial</div>
            </div>
            <div className="blog_block1">
                <div className="blog_block1_left">
                    <img src={banner1} alt="" />
                </div>
                <div className="blog_block1_right">
                    <div className="blue">Business Strategy</div>
                    <h1>
                        A-Series Ultra Low NOx Gas Furnace 80% Single Stage
                        40,000 BTU Non-Variable Upflow/ Horizontal 14.5" wide
                    </h1>
                    <p>
                        A global print fulfillment company partnered with Mason
                        Interactive to grow omnichannel sales via Search Engine
                        Optimization (SEO). During the course of the engagement,
                        the client saw a 134% increase in organic traffic,
                        resulting in a measurable increase in leads, and sales.
                        the client saw a 134% increase in organic traffic,
                        resulting in a measurable increase in leads, and sales.
                    </p>
                    <a href="#" className="redy">
                        Read More article
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BlogBlock1;
