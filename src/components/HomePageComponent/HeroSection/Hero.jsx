import React from "react";
import styles from "./Hero.module.css";
import video from "../../../assets/video/Ridhira-resort.mp4";
import BtnLink from "../../Buttons/BtnLink";

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
        {/* <h1 className={styles.heroHeading}>
          Transform Your Sales <br /> with Qualified Leads <br /> from Q-Lead
        </h1> */}
        <div className={styles.heading}>
          <h1>Transform Your Sales</h1>
          <h1>with Qualified Leads</h1>
          <h1>from Q-Lead</h1>
        </div>

        <h2 className={styles.heroSubHeading}>
          Boost your business with our expert Q- Lead consulting services. We
          offer market research, competitive analysis, and more.
        </h2>
        <div className={styles.link_btn}>
          <BtnLink text="Get Started" path="services" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
