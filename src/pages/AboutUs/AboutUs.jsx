import React from "react";
import { Fragment, useEffect } from "react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import styles from "./AboutUs.module.css";
import Timeline from "../../components/AboutUsPageComponent/Timeline/Timeline";
import OurTeam from "../../components/AboutUsPageComponent/OurTeam/OurTeam";
import Achievements from "../../components/AboutUsPageComponent/Achievements/Achievements";
import Milestones from "../../components/AboutUsPageComponent/Milestones/Milestones";

const AboutUs = () => {
  return (
    <Fragment>
      <Milestones />
      <Timeline />
      <OurTeam />
    </Fragment>
  );
};

export default AboutUs;
