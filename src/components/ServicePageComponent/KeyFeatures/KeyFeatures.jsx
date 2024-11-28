import React, { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./KeyFeatures.module.css";
import { KeyFeaturesData } from "./KeyFeaturesData";

const KeyFeatures = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  // @ JSX START
  return (
    <Fragment>
      <section className={styles.section} id="key-features">
        <div className={styles.head}>
          <h4>Key Features of QLead Predictive Lead Scoring</h4>
        </div>
        <div className={styles.feature_list_container}>
          {KeyFeaturesData.map((item) => {
            return (
              <div key={item.id} className={styles.feature_list}>
                <span>{item.heading}</span>
                <p>{item.paragraph}</p>
              </div>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default KeyFeatures;
