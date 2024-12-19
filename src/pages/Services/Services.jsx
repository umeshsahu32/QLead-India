import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../../components/ServicePageComponent/HeroSection/HeroSection";
import LeadProcess from "../../components/ServicePageComponent/LeadProcess/LeadProcess";
import LeadScoring from "../../components/ServicePageComponent/LeadScoring/LeadScoring";
import KeyFeatures from "../../components/ServicePageComponent/KeyFeatures/KeyFeatures";
import useMetaTags from "../../hooks/useMetaTags";

const Services = () => {
  useMetaTags({
    title: "QLead AI: Qualified Lead, Meeting & Audience Generation Services",
    description:
      "QLead AI specializes in qualified lead generation, meeting generation, and audience generation, helping your business connect with the right prospects for growth.",
    keywords: "Qualified Lead",
  });
  return (
    <Fragment>
      {/* <Helmet>
        <title>
          Qlead AI: Qualified Lead, Meeting & Audience Generation Services
        </title>
        <meta name="keyword" content="Qualified Lead" />
        <meta
          name="description"
          content="Qlead AI specializes in qualified lead generation, meeting generation, and audience generation, helping your business connect with the right prospects for growth."
        />
      </Helmet> */}
      <HeroSection />
      <LeadProcess />
      <LeadScoring />
      <KeyFeatures />
    </Fragment>
  );
};

export default Services;
