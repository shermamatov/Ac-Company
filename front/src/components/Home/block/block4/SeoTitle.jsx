import React, { useEffect, useState } from "react";
import banner from "../../../../images/banner1.webp";
import "./SeoTitle.css";
import "./SeoTitleAdaptive.css";
const SeoTitle = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className="seo">
            {/* <div className="container"> */}
            <div className="seo__inner">
                <div className="seo__top">
                    <div className="seo_img_block">
                        <img src={banner} alt="" />
                    </div>
                    <p
                        className={
                            width > 980 ? "seo__desc d-none" : "seo__desc"
                        }
                    >
                        The core SEO strategy has remained steady from day one:
                        provide high-quality content to website visitors and be
                        an authoritative thought leader in the industry;
                        creating new, highly-useful content for the blog and
                        landing pages; focusing on on-page optimizations
                        targeting high-value search-terms.
                    </p>
                </div>
                <div className="seo__text">
                    <h2 className="seo__title">
                        SEO Title HVAC contractor <br /> in Los Angeles
                    </h2>
                    <p className="seo__desc">
                        A global print fulfillment company partnered with Mason
                        Interactive to grow omnichannel sales via Search Engine
                        Optimization (SEO). During the course of the engagement,
                        the client saw a 134% increase in organic traffic,
                        resulting in a measurable increase in leads, and{" "}
                    </p>
                    <p
                        className={
                            width > 980 ? "seo__desc" : "seo__desc d-none"
                        }
                    >
                        The core SEO strategy has remained steady from day one:
                        provide high-quality content to website visitors and be
                        an authoritative thought leader in the industry;
                        creating new, highly-useful content for the blog and
                        landing pages; focusing on on-page optimizations
                        targeting high-value search-terms.
                    </p>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
};

export default SeoTitle;
