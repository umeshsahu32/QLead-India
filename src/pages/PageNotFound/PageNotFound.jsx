import React, { Fragment } from "react";
import pageNotFoundImage from "../../assets/images/404_page_not_found.png";
import styles from "./PageNotFound.module.css";
import { Link } from "react-router-dom";
import useMetaTags from "../../hooks/useMetaTags";

const PageNotFound = () => {
  useMetaTags({
    title: "QLead | Page Not Found",
    description: "Page Not Found",
    keywords: "Page Not Found",
  });

  return (
    <Fragment>
      <div className={styles.container}>
        <img
          src={pageNotFoundImage}
          alt="Page Not Found"
          className={styles.image}
        />
        <Link to="/">Go Back</Link>
      </div>
    </Fragment>
  );
};

export default PageNotFound;
