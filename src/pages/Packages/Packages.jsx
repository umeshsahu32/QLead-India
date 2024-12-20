import React, { Fragment } from "react";
import styles from "./Packages.module.css";
import { Helmet } from "react-helmet";
import PriceCard from "../../components/PackagePageComponent/PriceCard/PriceCard";
import CostBanner from "../../components/PackagePageComponent/CostBanner/CostBanner";
import InfoCards from "../../components/PackagePageComponent/InfoCards/InfoCards";
import FlexibilityBanner from "../../components/PackagePageComponent/FlexibilityBanner/FlexibilityBanner";
import LeadProcess from "../../components/PackagePageComponent/LeadProcess/LeadProcess";
import PackageHero from "../../components/PackagePageComponent/PackageHero/PackageHero";
import useMetaTags from "../../hooks/useMetaTags";

const Packages = () => {
  useMetaTags({
    title: "QLead Packages | High-Quality Leads for Business Growth",
    description:
      "Discover QLead's packages for high-quality, intent-qualified leads. Find the perfect plan to boost your sales and drive business growth seamlessly!",
    keywords: "Our packages",
  });
  return (
    <Fragment>
      {/* <Helmet>
        <title>QLead Packages | High-Quality Leads for Business Growth</title>
        <meta name="keyword" content="Our packages" />
        <meta
          name="description"
          content="Discover QLead's packages for high-quality, intent-qualified leads. Find the perfect plan to boost your sales and drive business growth seamlessly!"
        />
      </Helmet> */}
      <PackageHero />
      <CostBanner />
      <InfoCards />
      <LeadProcess />
      <PriceCard />
      <FlexibilityBanner />
    </Fragment>
  );
};

export default Packages;
