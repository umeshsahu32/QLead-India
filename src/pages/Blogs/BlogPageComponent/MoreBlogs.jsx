import React from "react";
import styles from "./MoreBlogs.module.css";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const MoreBlogCard = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <img src={item.image} alt={item.title} className={styles.cardImage} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{item.title}</h3>
        <p className={styles.cardDescription}>{item.description}</p>
        <div className={styles.cardFooter}>
          <div>
            <p className={styles.authorName}>{item.author}</p>
            <p className={styles.cardDate}>{item.date}</p>
          </div>
          <Link
            to={`/blog/${item.title.replace(/ /g, "-")}`}
            className={styles.cardLink}
          >
            <MdArrowOutward />
          </Link>
        </div>
      </div>
    </div>
  );
};

const MoreBlogs = ({ BlogData }) => {
  return (
    <div className={styles.readMore}>
      <div className={styles.sectionHeading}>
        <h3>Read More</h3>
      </div>
      <div className={styles.container}>
        {BlogData.map((item, index) => {
          return <MoreBlogCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default MoreBlogs;
