import React, { Fragment } from "react";
import styles from "./ServiceHeader.module.css";

const ServiceHeader = ({ primary, secondary, img, description, alt }) => {
  return (
    <Fragment>
      <section className={styles.section}>
        <div className={styles.heading}>
          <h1>{primary}</h1>
          <h1>{secondary}</h1>
        </div>
        <div className={styles.banner_container}>
          <img src={img} alt={alt} className={styles.image} />
          <div className={styles.text_container}>
            <p>{description}</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ServiceHeader;
