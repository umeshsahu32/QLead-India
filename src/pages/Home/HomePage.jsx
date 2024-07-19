import React, { Fragment } from "react";
import styles from "./HomePage.module.css";
import Hero from "../../components/HomePageComponent/HeroSection/Hero";
import IntroSection from "../../components/HomePageComponent/IntroSection/IntroSection";
import WhatWeStand from "../../components/HomePageComponent/WhatWeStand/WhatWeStand";
import BenefitSection from "../../components/HomePageComponent/BenefitSection/BenefitSection";
import Testimonial from "../../components/HomePageComponent/Testimonial/Testimonial";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <IntroSection />
      <WhatWeStand />
      <BenefitSection />
      <Testimonial />
    </Fragment>
  );
};

export default HomePage;
