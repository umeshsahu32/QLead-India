import React, { Fragment } from "react";
import styles from "./SuccessPageHero.module.css";
import SuccessStoryVideo from "../../assets/video/success-story-video.mp4";

const SuccessPageHero = () => {
  const stat = {
    number: "120+",
    label: "Success Stories",
  };
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
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>
              Big Dreams,
              <br /> Bigger Numbers
            </h2>
            <p className={styles.paragraph}>
              We are moving ahead with relentless energy to achieve amazing
              results that speak volumes. We don't intend to slow down either!
            </p>
          </div>
          <div className={styles.slide}>
            <div className={styles.statNumber}>{stat.number}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SuccessPageHero;
