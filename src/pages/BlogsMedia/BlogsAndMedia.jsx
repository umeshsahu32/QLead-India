import React, { Fragment } from "react";
import BlogCard from "./BlogCard";
import { BlogData } from "./BlogsMediaData";
import styles from "./BlogsAndMedia.module.css";

const BlogsAndMedia = () => {
  return (
    <Fragment>
      <div className={styles.blogList}>
        {BlogData.map((blog, index) => (
          <BlogCard
            key={index}
            image={blog.image}
            title={blog.imageFront}
            platform="Times of India"
            description={blog.description}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default BlogsAndMedia;
