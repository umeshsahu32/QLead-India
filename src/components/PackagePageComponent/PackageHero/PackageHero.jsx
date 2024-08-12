import React, { Fragment } from "react";
import styles from "./PackageHero.module.css";
import SuccessStoryVideo from "../../../assets/video/success-story-video.mp4";

const PackageHero = () => {
  return (
    <Fragment>
      <div className={styles.section}>
        <video
          className={styles.videoBackground}
          autoPlay
          loop
          muted
          playsInline
          src={SuccessStoryVideo}
          type="video/mp4"
        />
      </div>
    </Fragment>
  );
};

export default PackageHero;
