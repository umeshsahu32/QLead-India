import React, { Fragment } from "react";
import BlogCard from "./BlogCard";
import { BlogData } from "./BlogsMediaData";
import styles from "./BlogsAndMedia.module.css";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const BlogsAndMedia = () => {
  return (
    <Fragment>
      <div className={styles.blog_container}>
        <SectionHeading heading="Blogs and Media" />
        <div className={styles.blogList}>
          {BlogData.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.imageFront}
              title={blog.title}
              platform={blog.platform}
              description={blog.description}
              link={blog.link}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default BlogsAndMedia;
