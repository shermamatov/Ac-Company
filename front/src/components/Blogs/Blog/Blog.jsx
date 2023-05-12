import React from "react";
import BlogBlock1 from "./blocks/BlogBlock1/BlogBlock1";
import BlogBlock2 from "./blocks/BlogBlock2/BlogBlock2";
import BlogBlock3 from "./blocks/BlogBlock3/BlogBlock3";

const Blog = () => {
    return (
        <div className="container">
            <BlogBlock1 />
            <BlogBlock2 />
            <BlogBlock3 />
        </div>
    );
};

export default Blog;
