import React from "react";
import styles from "./BlogHeader.module.css";

const BlogHeader = ({ blogDetails }) => {
  return (
    <div className={styles.headerComponent}>
      <div className={styles.blogHead}>
        <img src={blogDetails?.image} className={styles.headerImage} />
        <div className={styles.blogNameContainer}>
          <span className={styles.category}>{blogDetails?.category}</span>
          <h3>{blogDetails?.title}</h3>
          <p>{blogDetails?.description}</p>
          <div className={styles.authorContainer}>
            <span>{blogDetails?.author}</span>
            <span>{blogDetails?.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
