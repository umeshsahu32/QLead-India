import React, { Fragment } from "react";
import styles from "./BlogsAndMedia.module.css";
import { FaArrowRight } from "react-icons/fa";

const BlogCard = ({ posts }) => {
  return (
    <Fragment>
      <div className={styles.container}>
        {posts.map((item, index) => {
          return (
            <div className={styles.card} key={index}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardSubtitle}>{item.category}</p>
                <p className={styles.cardDescription}>{item.description}</p>
                <div className={styles.cardFooter}>
                  <p className={styles.cardDate}>{item.date}</p>
                  {/* <a href={item.link} className={styles.cardLink}>
                    <span>READ MORE </span>
                    <span>
                      <FaArrowRight />
                    </span>
                  </a> */}
                  <a href={item.link} className={styles.cardLink}>
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default BlogCard;
