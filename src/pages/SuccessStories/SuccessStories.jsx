import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import StoryCategoryCarousel from "./StoryCategoryCarousel";
import styles from "./SuccessStories.module.css";
import { successData } from "./SuccessStoryData";
import StoryCard from "./StoryCard";
import SuccessPageHero from "./SuccessPageHero.jsx";
import { Helmet } from "react-helmet";
import useMetaTags from "../../hooks/useMetaTags.js";

const SuccessStories = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeData, setActiveData] = useState([]);

  const fnGetActiveData = () => {
    const res = successData.filter((item) => item.category_id === activeTab);
    setActiveData(res);
  };

  useEffect(() => {
    fnGetActiveData();
  }, [activeTab]);

  const pillClickHandler = (id) => {
    setActiveTab(id);
  };

  const categories = [
    {
      category_id: 1,
      category: "B2B",
    },
    {
      category_id: 2,
      category: "B2C",
    },
    {
      category_id: 3,
      category: "D2C",
    },
  ];

  useMetaTags({
    title: "QLead Success Stories: Driving Growth with Intent-Qualified Leads",
    description:
      "Explore QLead's success stories, highlighting how our intent-qualified leads drive growth and deliver exceptional results for our clients.",
    keywords: "Success Stories",
  });

  return (
    <Fragment>
      <Helmet>
        <title>
          Qlead Success Stories: Driving Growth with Intent-Qualified Leads
        </title>
        <meta name="keyword" content="Success Stories" />
        <meta
          name="description"
          content="Explore Qlead's success stories, highlighting how our intent-qualified leads drive growth and deliver exceptional results for our clients."
        />
      </Helmet>
      <SuccessPageHero />
      <div className={styles.sectionContainer}>
        {/* <StoryCategoryCarousel
          categories={categories}
          onClick={(id) => pillClickHandler(id)}
          active={activeTab}
        /> */}
        <div>
          {/* <StoryCard cardData={activeData} /> */}
          <StoryCard cardData={successData} />
        </div>
      </div>
    </Fragment>
  );
};

export default SuccessStories;
