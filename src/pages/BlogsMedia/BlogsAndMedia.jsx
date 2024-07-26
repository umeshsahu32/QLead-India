import React, { Fragment, useState, useEffect } from "react";
import styles from "./BlogsAndMedia.module.css";
import { BlogData } from "./BlogsMediaData";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import BlogCard from "./BlogCard";
import { useLocation } from "react-router-dom";

const BlogsAndMedia = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
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
