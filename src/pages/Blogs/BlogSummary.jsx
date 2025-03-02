import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./BlogSummary.module.css";
import { BlogState } from "../../context/Context";
import BlogHeader from "./BlogPageComponent/BlogHeader";
import BlogText from "./BlogPageComponent/BlogText";
import MostPopularBlog from "./BlogPageComponent/MostPopularBlog";
import MoreBlogs from "./BlogPageComponent/MoreBlogs";
import { Helmet } from "react-helmet";
import useMetaTags from "../../hooks/useMetaTags";

const BlogSummary = () => {
  const params = useParams();
  const BlogData = BlogState();

  const sortedBlogData = BlogData.sort((a, b) => {
    // Convert dates to Date objects for comparison
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    // Sort in descending order (most recent first)
    return dateB - dateA;
  });

  const currentBlog = BlogData.filter(
    (item) => item.title.replace(/ /g, "-") === params.title
  );

  useMetaTags({
    title: currentBlog[0]?.metaTitle,
    description: currentBlog[0]?.metaDescription,
    keywords: currentBlog[0]?.metaKeyword,
  });

  return (
    <Fragment>
      {/* <Helmet htmlAttributes={{ lang: "en" }} key={Math.random()}>
        <title>{currentBlog[0].metaTitle}</title>
        <meta
          name="description"
          content={currentBlog[0].metaDescription}
          key="description"
        />
        <meta
          name="keyword"
          content={currentBlog[0].metaKeyword}
          key="keywords"
        />
      </Helmet> */}
      <div className={styles.rootContainer}>
        <BlogHeader blogDetails={currentBlog[0]} />
        <div className={styles.blogList}>
          <BlogText blogDetails={currentBlog[0]} />
          <MostPopularBlog BlogData={sortedBlogData} />
        </div>
        <MoreBlogs BlogData={sortedBlogData} />
      </div>
    </Fragment>
  );
};

export default BlogSummary;
