import React, { Fragment } from "react";
import styles from "./KeyFeatures.module.css";
import { KeyFeaturesData } from "./KeyFeaturesData";

const KeyFeatures = () => {
  return (
    <Fragment>
      <section className={styles.section}>
        <div className={styles.head}>
          <h4>Key Features of ABC India's Predictive Lead Scoring</h4>
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
