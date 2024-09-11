import React from "react";
import { Fragment } from "react";
import styles from "./CostBanner.module.css";
import SectionVideo from "../../../assets/video/why-cost-is-high.mp4";

const CostBanner = () => {
  return (
    <Fragment>
      <div className={styles.section}>
        <div className={styles.video_section}>
          <video
            className={styles.video_play}
            src={SectionVideo}
            autoPlay
            loop
            muted
          />
        </div>
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
