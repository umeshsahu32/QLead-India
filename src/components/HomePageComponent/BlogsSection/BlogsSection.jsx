import React, { Fragment } from "react";
import styles from "./BlogsSection.module.css";
import SectionHeading from "../../SectionHeading/SectionHeading";
import LinkButton from "../../Buttons/LinkButton";
import { BlogState } from "../../../context/Context";
import { Link } from "react-router-dom";

const BlogsSection = () => {
  const BlogsData = BlogState();

  console.log("BlogState", BlogsData);

  return (
    <Fragment>
      <SectionHeading heading="Blogs" />
      <div className={styles.container}>
        {BlogsData.map((item, index) => {
          return (
            <Link
              to={`/blog/${item.title.replace(/ /g, "-")}`}
              className={styles.cardLink}
              key={index}
            >
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
                    <p className={styles.cardDate}>{item.author}</p>
                    {/* <Link
                    to={`/blog/${item.title.replace(/ /g, "-")}`}
                    className={styles.cardLink}
                  >
                    READ MORE
                  </Link> */}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <LinkButton path="blogs" text="View All" />
    </Fragment>
  );
};

export default BlogsSection;
