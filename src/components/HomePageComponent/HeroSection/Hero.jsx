import React from "react";
import styles from "./Hero.module.css";
import video from "../../../assets/video/hero-section-video.mp4";
import { Link } from "react-router-dom";

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
        <div className={styles.heading}>
          <h1>Transform Your Sales</h1>
          <h1>with Qualified Leads</h1>
          <h1>from Q-Lead</h1>
        </div>

        <h2 className={styles.heroSubHeading}>
          Get leads that convert, with precision and ease
        </h2>
        <div className={styles.link_btn}>
          <Link className={styles.get_started_btn} to="contact-us">
            Try Q-Lead
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
