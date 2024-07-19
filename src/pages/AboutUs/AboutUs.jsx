import React from "react";
import { Fragment } from "react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import styles from "./AboutUs.module.css";
import Timeline from "../../components/AboutUsPageComponent/Timeline/Timeline";
import OurTeam from "../../components/AboutUsPageComponent/OurTeam/OurTeam";
import Achievements from "../../components/AboutUsPageComponent/Achievements/Achievements";

const AboutUs = () => {
  return (
    <Fragment>
      <SectionHeading
        heading="Our Journey"
        para="AOB India's 10-Year Journey: A Decade of Excellence in Sales Outsourcing"
      />
      <div className={styles.secondary_head}>
        <h3>
          AOB India: Celebrating 10 Years of Transforming Sales Strategies
        </h3>
        <p>
          Over the past decade, AOB India has carved a niche in the sales
          outsourcing industry, consistently delivering exceptional results and
          building strong relationships with clients across various sectors. Our
          journey is a testament to our commitment to excellence, innovation,
          and customer success.
        </p>
      </div>
      <Timeline />
      <Achievements />
      <OurTeam />
    </Fragment>
  );
};

export default AboutUs;
