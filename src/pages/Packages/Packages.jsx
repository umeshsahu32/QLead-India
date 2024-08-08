import React, { Fragment } from "react";
import styles from "./Packages.module.css";
import PriceCard from "../../components/PackagePageComponent/PriceCard/PriceCard";
import CostBanner from "../../components/PackagePageComponent/CostBanner/CostBanner";
import InfoCards from "../../components/PackagePageComponent/InfoCards/InfoCards";
import FlexibilityBanner from "../../components/PackagePageComponent/FlexibilityBanner/FlexibilityBanner";
import LeadProcess from "../../components/PackagePageComponent/LeadProcess/LeadProcess";

const Packages = () => {
  return (
    <Fragment>
      <InfoCards />
      <CostBanner />
      <LeadProcess />
      <PriceCard />
      <FlexibilityBanner />
    </Fragment>
  );
};

export default Packages;
