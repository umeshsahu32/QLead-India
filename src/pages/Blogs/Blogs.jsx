import React from "react";
import styles from "./Blogs.module.css";
import { BlogState } from "../../context/Context";
import { Link } from "react-router-dom";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const BlogCard = ({ item }) => {
  return (
    <div className={styles.blogItem}>
      <div className={styles.blogContent}>
        <img src={item.image} alt={item.title} className={styles.blogImage} />
        <div className={styles.blogDetails}>
          <span className={styles.category}>{item.category}</span>
          <h3 className={styles.blogTitle}>{item.title}</h3>
          <p className={styles.blogDescription}>{item.description}</p>
        </div>
      </div>
      <div className={styles.learnMore}>
        <Link
          to={`/blog/${item.title.replace(/ /g, "-")}`}
          className={styles.learnMoreButton}
        >
          <span>→ Learn More</span>
        </Link>
      </div>
    </div>
  );
};

const Blogs = () => {
  const BlogsData = BlogState();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <SectionHeading
          heading="Recent Blogs"
          para="Explore the insights and trends shaping our industry"
        />
      </div>
      <div className={styles.blogList}>
        {BlogsData.map((cardInfo) => {
          return <BlogCard item={cardInfo} key={cardInfo.id} />;
        })}
      </div>
    </div>
  );
};

export default Blogs;
