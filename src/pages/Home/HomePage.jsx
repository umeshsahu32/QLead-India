import React, { Fragment } from "react";
import styles from "./HomePage.module.css";
import Hero from "../../components/HomePageComponent/HeroSection/Hero";
import IntroSection2 from "../../components/HomePageComponent/IntroSection2/IntroSection2";
import UniqueFeature from "../../components/HomePageComponent/UniqueFeature/UniqueFeature";
import AITools from "../../components/HomePageComponent/AITools/AITools";
import Industries2 from "../../components/HomePageComponent/Industries2/Industries2";
import SuccessStory from "../../components/HomePageComponent/SuccessStory/SuccessStory";
import CustomerTestimonial from "../../components/HomePageComponent/CustomerTestimonials/CustomerTestimonials";
import MediaSection from "../../components/HomePageComponent/MediaSection/MediaSection";
import BlogsSection from "../../components/HomePageComponent/BlogsSection/BlogsSection";
// import IntroSection from "../../components/HomePageComponent/IntroSection/IntroSection";
// import WhatWeStand from "../../components/HomePageComponent/WhatWeStand/WhatWeStand";
// import BenefitSection from "../../components/HomePageComponent/BenefitSection/BenefitSection";
// import Testimonial from "../../components/HomePageComponent/Testimonial/Testimonial";
// import FeatureSection from "../../components/HomePageComponent/FeatureSection/FeatureSection";
// import CaseStudy from "../../components/HomePageComponent/CaseStudy/CaseStudy";
// import BlogsAndMediaSection from "../../components/HomePageComponent/BlogsAndMediaSection/BlogsAndMediaSection";
// import TeamSection from "../../components/HomePageComponent/TeamSection/TeamSection";
// import ParallaxSection from "../../components/HomePageComponent/ParallaxSection/ParallaxSection";
// import IndustriesSection from "../../components/HomePageComponent/IndustriesSection/IndustriesSection";
// import Blogs from "../../components/HomePageComponent/Blogs/Blogs";
import { Helmet } from "react-helmet";
import useMetaTags from "../../hooks/useMetaTags";

const HomePage = () => {
  useMetaTags({
    title:
      "QLead AI: Top Lead Generation Services for Qualified Leads in India",
    description:
      "Generate high-quality, qualified leads in India with QLead AI. Boost your sales with advanced lead generation services tailored to your business needs",
    keywords: "Qualified Leads",
  });

  return (
    <Fragment>
      <Hero />
      <div className={styles.home}>
        <IntroSection2 />
        <UniqueFeature />
        <AITools />
        <Industries2 path="/industries-served" />
        <SuccessStory />
        <CustomerTestimonial />
        <MediaSection />
        <BlogsSection />
        {/* <Blogs /> */}
        {/* <BlogsAndMediaSection /> */}
        {/* <IntroSection /> */}
        {/* <WhatWeStand /> */}
        {/* <BenefitSection /> */}
        {/* <IndustriesSection /> */}
        {/* <CaseStudy /> */}
        {/* <FeatureSection /> */}
        {/* <TeamSection /> */}
        {/* <ParallaxSection /> */}
        {/* <Testimonial /> */}
      </div>
    </Fragment>
  );
};

export default HomePage;
