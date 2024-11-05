import React, { Fragment } from "react";
import styles from "./KeyFeatureCard.module.css";

const KeyFeatureCard = ({ src, title, description }) => {
  return (
    <Fragment>
      <div className={styles.leadCard}>
        <img src={src} alt={title} className={styles.image} />
        <div className={styles.leadCardText}>
          <h5>{title}</h5>
        </div>
        <p>{description}</p>
      </div>
    </Fragment>
  );
};

export default KeyFeatureCard;
