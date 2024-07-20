import React, { useState, useEffect } from "react";
import styles from "./ParallaxSection.module.css";
import { Link } from "react-router-dom";
import LinkButton from "../../Buttons/LinkButton";

const ParallaxSection = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.imageOverlay}></div>
      <div className={styles.contentContainer}>
        <h1 className={styles.heading}>
          Get Started with AOB India's Qualified Lead Generation Service
        </h1>
        <p className={styles.paragraph}>
          Ready to transform your lead generation strategy and drive business
          growth? Contact us today to learn how our Qualified Lead Generation
          service can provide you with high-quality, conversion-ready leads that
          meet your specific criteria.
        </p>
        {/* <Link to="/contact-us" className={styles.ctaButton}>
          Join the AOB India Family
        </Link> */}
        <LinkButton path="contact-us" text="Join the AOB India Family" />
      </div>
    </div>
  );
};

export default ParallaxSection;
