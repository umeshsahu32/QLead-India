import React from "react";
import { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import styles from "./AboutUs.module.css";
import Timeline from "../../components/AboutUsPageComponent/Timeline/Timeline";
import OurTeam from "../../components/AboutUsPageComponent/OurTeam/OurTeam";
import Achievements from "../../components/AboutUsPageComponent/Achievements/Achievements";
import Milestones from "../../components/AboutUsPageComponent/Milestones/Milestones";
import useMetaTags from "../../hooks/useMetaTags";

const AboutUs = () => {
  useMetaTags({
    title: "About Us | Qlead AI - Expert B2B Lead Generation & Qualified Leads",
    description:
      "Qlead AI provides expert B2B lead generation services, delivering qualified leads, marketing and sales qualified leads, and lead qualification services in India.",
    keywords: "B2B Lead Generation",
  });

  return (
    <Fragment>
      {/* <Helmet>
        <title>
          About Us | Qlead AI - Expert B2B Lead Generation & Qualified Leads
        </title>
        <meta name="keyword" content="B2B Lead Generation" />
        <meta
          name="description"
          content="Qlead AI provides expert B2B lead generation services, delivering qualified leads, marketing and sales qualified leads, and lead qualification services in India"
        />
      </Helmet> */}
      <Milestones />
      <Timeline />
      <OurTeam />
    </Fragment>
  );
};

export default AboutUs;
