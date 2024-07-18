import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./GetStartedButton.module.css";

const BtnLink = ({ path, text }) => {
  return (
    <Fragment>
      <Link className={styles.btnLink} to={path}>
        {text}
      </Link>
    </Fragment>
  );
};

export default BtnLink;
