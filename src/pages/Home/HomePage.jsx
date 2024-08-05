import React, { Fragment } from "react";
import styles from "./HomePage.module.css";
import Hero from "../../components/HomePageComponent/HeroSection/Hero";
import IntroSection from "../../components/HomePageComponent/IntroSection/IntroSection";
import WhatWeStand from "../../components/HomePageComponent/WhatWeStand/WhatWeStand";
import BenefitSection from "../../components/HomePageComponent/BenefitSection/BenefitSection";
import Testimonial from "../../components/HomePageComponent/Testimonial/Testimonial";
import FeatureSection from "../../components/HomePageComponent/FeatureSection/FeatureSection";
import CaseStudy from "../../components/HomePageComponent/CaseStudy/CaseStudy";
import BlogsAndMediaSection from "../../components/HomePageComponent/BlogsAndMediaSection/BlogsAndMediaSection";
import TeamSection from "../../components/HomePageComponent/TeamSection/TeamSection";
import ParallaxSection from "../../components/HomePageComponent/ParallaxSection/ParallaxSection";
import IndustriesSection from "../../components/HomePageComponent/IndustriesSection/IndustriesSection";
import SuccessStory from "../../components/HomePageComponent/SuccessStory/SuccessStory";
import Blogs from "../../components/HomePageComponent/Blogs/Blogs";
import CustomerTestimonial from "../../components/HomePageComponent/CustomerTestimonials/CustomerTestimonials";
import IntroSection2 from "../../components/HomePageComponent/IntroSection2/IntroSection2";
import UniqueFeature from "../../components/HomePageComponent/UniqueFeature/UniqueFeature";
import Industries2 from "../../components/HomePageComponent/Industries2/Industries2";
import AITools from "../../components/HomePageComponent/AITools/AITools";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <div className={styles.home}>
        {/* <IntroSection /> */}
        {/* <WhatWeStand /> */}
        <IntroSection2 />
        <UniqueFeature />
        <AITools />
        <Industries2 />
        {/* <BenefitSection /> */}
        {/* <IndustriesSection /> */}
        <SuccessStory />
        {/* <CaseStudy /> */}
        {/* <FeatureSection /> */}
        {/* <TeamSection /> */}
        {/* <ParallaxSection /> */}
        {/* <Testimonial /> */}
        <CustomerTestimonial />
        <Blogs />
        {/* <BlogsAndMediaSection /> */}
      </div>
    </Fragment>
  );
};

export default HomePage;
