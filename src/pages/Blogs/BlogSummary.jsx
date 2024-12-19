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

  const currentBlog = BlogData.filter(
    (item) => item.title.replace(/ /g, "-") === params.title
  );

  console.log("currentBlog", currentBlog);

  useMetaTags({
    title: currentBlog[0].metaTitle,
    description: currentBlog[0].metaDescription,
    keywords: currentBlog[0].metaKeyword,
  });

  // useEffect(() => {
  //   console.log("Meta tags data:", {
  //     title: currentBlog[0].metaTitle,
  //     description: currentBlog[0].metaDescription,
  //     keywords: currentBlog[0].metaKeyword,
  //   });
  // }, [currentBlog]);

  // useEffect(() => {
  //   document.title = currentBlog[0].metaTitle;

  //   // Update meta description
  //   let descriptionMeta = document.querySelector('meta[name="description"]');
  //   if (descriptionMeta) {
  //     descriptionMeta.setAttribute("content", currentBlog[0].metaDescription);
  //   }

  //   // Update meta keywords
  //   let keywordsMeta = document.querySelector('meta[name="keyword"]');
  //   if (keywordsMeta) {
  //     keywordsMeta.setAttribute("content", currentBlog[0].metaKeyword);
  //   }
  // }, [currentBlog]);

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
          <MostPopularBlog BlogData={BlogData} />
        </div>
        <MoreBlogs BlogData={BlogData} />
      </div>
    </Fragment>
  );
};

export default BlogSummary;
