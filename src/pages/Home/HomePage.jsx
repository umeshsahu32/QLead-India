import React, { Fragment } from "react";
import styles from "./HomePage.module.css";
import Hero from "../../components/HomePageComponent/HeroSection/Hero";
import IntroSection from "../../components/HomePageComponent/IntroSection/IntroSection";
import WhatWeStand from "../../components/HomePageComponent/WhatWeStand/WhatWeStand";
import BenefitSection from "../../components/HomePageComponent/BenefitSection/BenefitSection";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <IntroSection />
      <WhatWeStand />
      <BenefitSection />
    </Fragment>
  );
};

export default HomePage;
