import React from "react";
import styles from "./MostPopularBlog.module.css";
import { Link } from "react-router-dom";

const MostPopularBlog = ({ BlogData }) => {
  return (
    <div className={styles.mostPopularContent}>
      <h3>Most Popular</h3>
      <ul>
        {BlogData.map((item, i) => {
          return (
            <li key={i}>
              <Link
                to={`/blog/${item.title.replace(/ /g, "-")}`}
                className={styles.blog_list}
              >
                <div>
                  <span>{i + 1}</span>
                </div>
                <div className={styles.blog_title}>
                  <p>{item.title}</p>
                  <p>{item.author}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MostPopularBlog;
