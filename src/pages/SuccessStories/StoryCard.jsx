import React, { Fragment } from "react";
import styles from "./StoryCard.module.css";

const StoryCard = ({ cardData }) => {
  return (
    <Fragment>
      <div className={styles.cardSection}>
        {cardData.map((item, index) => (
          <Fragment>
            <div
              className={`${styles.card}`}
              key={index}
              style={{ background: item.gradient }}
            >
              <div className={styles.logoContainer}>
                <img
                  src={item.image}
                  alt="Company Logo"
                  className={styles.logo}
                />
              </div>
              <div className={styles.content}>
                <span className={styles.percentage}>{item.percentage}</span>
                <span className={styles.description}>{item.description}</span>
              </div>
              {/* Hover card start */}
              <div className={styles.cardContent}>
                <div className={styles.cardDetails}>
                  {/* <div className={styles.info_content}> */}
                  <div
                    className={`${styles.info_content} ${styles.info_content_1}`}
                  >
                    <p>Challenge:</p>
                    <span> {item.challenge}</span>
                  </div>
                  {/* <div className={styles.info_content}> */}
                  <div
                    className={`${styles.info_content} ${styles.info_content_2}`}
                  >
                    <p>Solution:</p>
                    <span>{item.solution}</span>
                  </div>
                  {/* <div className={styles.info_content}> */}
                  <div
                    className={`${styles.info_content} ${styles.info_content_3}`}
                  >
                    <p>Result:</p>
                    <span>{item.result}</span>
                  </div>
                </div>
              </div>
              {/* Hover card end */}
            </div>
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};

export default StoryCard;
