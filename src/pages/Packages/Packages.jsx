import React, { Fragment } from "react";
import styles from "./Packages.module.css";
import PriceCard from "../../components/PackagePageComponent/PriceCard/PriceCard";
import CostBanner from "../../components/PackagePageComponent/CostBanner/CostBanner";
import InfoCards from "../../components/PackagePageComponent/InfoCards/InfoCards";
import FlexibilityBanner from "../../components/PackagePageComponent/FlexibilityBanner/FlexibilityBanner";
import LeadProcess from "../../components/PackagePageComponent/LeadProcess/LeadProcess";
import PackageHero from "../../components/PackagePageComponent/PackageHero/PackageHero";

const Packages = () => {
  return (
    <Fragment>
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
