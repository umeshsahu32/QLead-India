import React from "react";
import styles from "./Hero.module.css";
import video from "../../../assets/video/Ridhira-resort.mp4";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <video
        className={styles.videoBackground}
        autoPlay
        loop
        muted
        playsInline
        src={video}
        type="video/mp4"
      />
      <div className={styles.heroContent}>
        <h1 className={styles.heroHeading}>
          Turn Your Investment Into a Lifestyle
        </h1>
        <h2 className={styles.heroSubHeading}>
          With Club Ridhira Co-ownership Resort Residences
        </h2>
      </div>
    </section>
  );
};

export default Hero;
