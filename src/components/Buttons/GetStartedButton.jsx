import React, { Fragment } from "react";
import styles from "./GetStartedButton.module.css";

const GetStartedButton = ({
  text = "",
  onClick = () => {},
  isActive = false,
}) => {
  return (
    <Fragment>
      <button
        className={`${styles.btn_style} ${isActive ? styles.active : ""}`}
        onClick={onClick}
      >
        {text}
      </button>
    </Fragment>
  );
};

export default GetStartedButton;
