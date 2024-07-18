import React, { Fragment } from "react";
import styles from "./GetStartedButton.module.css";

const GetStartedButton = ({ text = "", onClick = () => {} }) => {
  return (
    <Fragment>
      <button className={styles.btn_style} onClick={onClick}>
        {text}
      </button>
    </Fragment>
  );
};

export default GetStartedButton;
