import React, { Fragment } from "react";
import styles from "./FlexibilityBanner.module.css";

const FlexibilityBanner = () => {
  return (
    <Fragment>
      <div className={styles.gradientBackground}>
        <div className={styles.content}>
          <h1>Flexibility & Scalability </h1>
          <p className={styles.first_para}>
            Flexibility to start small and scale up as you see the results and
            refine your campaign strategies.
          </p>
          <p>
            The more you invest in the lead packages, the more leads you can
            generate, enhancing your opportunities for sales conversions and
            business growth.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default FlexibilityBanner;
