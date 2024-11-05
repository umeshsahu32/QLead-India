import React, { Fragment } from "react";
import styles from "./OfferCard.module.css";
import { Link } from "react-router-dom";

const OfferCard = ({ img, title, desc, link }) => {
  return (
    <Fragment>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={img} alt={title} className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{desc}</p>
          <Link to={link} className={styles.learnMore}>
            Learn more →
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default OfferCard;
