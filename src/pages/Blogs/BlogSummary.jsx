import React from "react";
import { useParams } from "react-router-dom";
import styles from "./BlogSummary.module.css";
import { BlogState } from "../../context/Context";
import BlogHeader from "./BlogPageComponent/BlogHeader";
import BlogText from "./BlogPageComponent/BlogText";
import MostPopularBlog from "./BlogPageComponent/MostPopularBlog";
import MoreBlogs from "./BlogPageComponent/MoreBlogs";

const BlogSummary = () => {
  const params = useParams();
  const BlogData = BlogState();

  const currentBlog = BlogData.filter(
    (item) => item.title.replace(/ /g, "-") === params.title
  );

  return (
    <div className={styles.rootContainer}>
      <BlogHeader blogDetails={currentBlog[0]} />
      <div className={styles.blogList}>
        <BlogText blogDetails={currentBlog[0]} />
        <MostPopularBlog BlogData={BlogData} />
      </div>
      <MoreBlogs BlogData={BlogData} />
    </div>
  );
};

export default BlogSummary;
