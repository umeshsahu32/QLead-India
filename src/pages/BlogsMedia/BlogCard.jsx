import React from "react";
import styles from "./BlogsAndMedia.module.css";
import { Link } from "react-router-dom";

const BlogCard = ({ image, title, platform, description, link }) => {
  console.log("http", image);
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.platform}>{platform}</p>
      </div>
      <div className={styles.hoverContent}>
        <p>{description}</p>
        <Link to={link} className={styles.button}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
