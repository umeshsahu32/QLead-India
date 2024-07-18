import React, { Fragment } from "react";
import styles from "./SectionHeading.module.css";

const SectionHeading = ({ heading = "", para }) => {
  return (
    <Fragment>
      <div className={styles.heading}>
        <h3>{heading}</h3>
        {para ? <p>{para}</p> : ""}
      </div>
    </Fragment>
  );
};

export default SectionHeading;
