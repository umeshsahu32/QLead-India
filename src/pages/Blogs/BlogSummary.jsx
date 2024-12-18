import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import styles from "./BlogSummary.module.css";
import { BlogState } from "../../context/Context";
import BlogHeader from "./BlogPageComponent/BlogHeader";
import BlogText from "./BlogPageComponent/BlogText";
import MostPopularBlog from "./BlogPageComponent/MostPopularBlog";
import MoreBlogs from "./BlogPageComponent/MoreBlogs";
import { Helmet } from "react-helmet";

const BlogSummary = () => {
  const params = useParams();
  const BlogData = BlogState();

  const currentBlog = BlogData.filter(
    (item) => item.title.replace(/ /g, "-") === params.title
  );

  return (
    <Fragment>
      <Helmet>
        <title>{`QLead AI Blogs - ${currentBlog[0].title}`}</title>
        <meta name="keyword" content="Qlead AI Blogs" />
        <meta name="description" content={currentBlog[0].description} />
      </Helmet>
      <div className={styles.rootContainer}>
        <BlogHeader blogDetails={currentBlog[0]} />
        <div className={styles.blogList}>
          <BlogText blogDetails={currentBlog[0]} />
          <MostPopularBlog BlogData={BlogData} />
        </div>
        <MoreBlogs BlogData={BlogData} />
      </div>
    </Fragment>
  );
};

export default BlogSummary;
