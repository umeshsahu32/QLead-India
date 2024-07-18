import React from "react";
import styles from "./BlogsAndMedia.module.css";

const BlogCard = ({ image, title, platform, description }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.platform}>{platform}</p>
        <button className={styles.button}>READ MORE</button>
      </div>
      <div className={styles.hoverContent}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
