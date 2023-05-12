import React from "react";
import "./BlogSingle.scss";
import banner1 from "../../../images/blog_single_banner1.webp";
import twit from "../../../images/twit.png";
import link from "../../../images/link.png";
import share from "../../../images/share.png";
import face from "../../../images/face.png";
const BlogSingle = () => {
    return (
        <div className="container">
            <div className="blog_nav_block">
                <div className="black">All</div>
                <div className="purple">Cooling</div>
                <div className="blue">Business Strategy </div>
                <div className="redy">Heating </div>
                <div className="yellow">Repairing</div>
                <div className="green">Commercial</div>
            </div>
            <div className="blogSingle_main_block">
                <div className="blue">Business Strategy</div>
                <h1>
                    A-Series Ultra Low NOx Gas Furnace 80% Single Stage 40,000
                    BTU Non-Variable Upflow/Horizontal 14.5" wide
                </h1>
                <img src={banner1} alt="" />
                <p>
                    Yet, as many higher education professionals can surely
                    attest to, I have also witnessed the other challenge in
                    group decision making. In academia, engaging in critical
                    dissent is encouraged (reviewed by Jetten & Hornsey, 2014),
                    and while this is a fine attribute, practically,{" "}
                </p>
                <div className="qestion">
                    <h4>1. What is the point of this meeting?</h4>
                    <p>
                        Yet, as many higher education professionals can surely
                        attest to, I have also witnessed the other challenge in
                        group decision making. In academia, engaging in critical
                        dissent is encouraged (reviewed by Jetten & Hornsey,
                        2014), and while this is a fine attribute, practically,
                        this can mean that we sometimes spend so much time
                        expressing our thoughts, opinions, and concerns trying
                        to reach consensus and we somehow never arrive at
                        decisions in a timely manner.
                    </p>
                </div>
                <div className="qestion">
                    <h4>2. What is the problem?</h4>
                    <p>
                        To make decisions as a group, the problems must first be
                        clarified. In a meeting focused on problem-solving, be
                        sure to agree on a definition of the problem before
                        talking about potential solutions (Rogelberg, Scott, &
                        Kello, 2007).
                    </p>
                </div>
                <div className="qestion">
                    <h4>3. Have a leader who leads.</h4>
                    <p>
                        While everyone should feel comfortable talking, someone
                        must lead. Too often I have watched meetings end with
                        “okay, well…we are out of time, so let’s continue this
                        next time.” Or “let’s chew on this” or “let’s table
                        this” or “well, there’s a lot here, so…..” (the sentence
                        doesn’t even get completed as they look to the others
                        for a direction).
                    </p>
                </div>
                <p className="margin">
                    A leader needs to watch the time and not waste the point of
                    the meeting. Satisfaction with a meeting and perception of
                    meeting productivity are significantly and positively
                    related to leaders being able to move a meeting along and
                    encourage decision making (Malouff et al., 2012).
                </p>
                <div className="yasmin_block">
                    <p>
                        Yasmine is currently an Associate Professor of
                        Psychology at Mount Saint Mary College where she teaches
                        a wide array of courses in the Psychology department.
                        She is a Fulbright Scholar spent a year working at the
                        Medical Decision Making Center at Ono Academic College
                        in Israel.
                    </p>
                </div>
                <p>
                    While everyone should feel comfortable talking, someone must
                    lead. Too often I have watched meetings end with “okay,
                    well…we are out of time, so let’s continue this next time.”
                    Or “let’s chew on this” or “let’s table this” or “well,
                    there’s a lot here, so…..” (the sentence doesn’t even get
                    completed as they look to the others for a direction).
                </p>
                <div className="line"></div>
                <div className="mess">
                    <img style={{ width: "40px" }} src={share} alt="" />
                    <img src={face} alt="" />
                    <img src={twit} alt="" />
                    <img src={link} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BlogSingle;
