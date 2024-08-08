import React from "react";
import { Fragment } from "react";
import styles from "./CostBanner.module.css";

const CostBanner = () => {
  return (
    <Fragment>
      <div className={styles.image_container}>
        <div className={styles.image_text}>
          <h1>Why the Higher Cost is Worth It</h1>
          <p>
            While our leads may be more expensive, they offer unparalleled value
            by eliminating the need for initial screening and reducing the time
            and resources required to close a sale. By focusing on quality over
            quantity, we ensure that you connect with prospects who are most
            likely to convert, ultimately driving higher ROI for your business.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default CostBanner;
