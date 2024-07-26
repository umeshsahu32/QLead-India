import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./LinkButton.module.css";

const LinkButton = ({ path, text }) => {
  return (
    <Fragment>
      <div className={styles.btn_align}>
        <Link to={path} className={styles.linkButton}>
          {text}
        </Link>
      </div>
    </Fragment>
  );
};

export default LinkButton;
