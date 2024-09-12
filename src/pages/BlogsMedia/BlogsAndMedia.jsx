import React, { Fragment } from "react";
import styles from "./BlogsAndMedia.module.css";
import { BlogData } from "./BlogsMediaData";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import BlogCard from "./BlogCard";

const BlogsAndMedia = () => {
  return (
    <Fragment>
      <SectionHeading heading="Blogs And Media" />
      <div className={styles.sectionContainer}>
        <div>
          <BlogCard posts={BlogData} />
        </div>
      </div>
    </Fragment>
  );
};

export default BlogsAndMedia;
