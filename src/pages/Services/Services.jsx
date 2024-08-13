import React, { Fragment } from "react";
import HeroSection from "../../components/ServicePageComponent/HeroSection/HeroSection";
import LeadProcess from "../../components/ServicePageComponent/LeadProcess/LeadProcess";
import LeadScoring from "../../components/ServicePageComponent/LeadScoring/LeadScoring";
import KeyFeatures from "../../components/ServicePageComponent/KeyFeatures/KeyFeatures";

const Services = () => {
  return (
    <Fragment>
      <HeroSection />
      <LeadProcess />
      <LeadScoring />
      <KeyFeatures />
    </Fragment>
  );
};

export default Services;
