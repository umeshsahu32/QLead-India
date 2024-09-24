import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import StoryCategoryCarousel from "./StoryCategoryCarousel";
import styles from "./SuccessStories.module.css";
import { successData } from "./SuccessStoryData";
import StoryCard from "./StoryCard";
import SuccessPageHero from "./SuccessPageHero.jsx";

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

  return (
    <Fragment>
      <SuccessPageHero />
      <div className={styles.sectionContainer}>
        {/* <StoryCategoryCarousel
          categories={categories}
          onClick={(id) => pillClickHandler(id)}
          active={activeTab}
        /> */}
        <div>
          <StoryCard cardData={successData} />
        </div>
      </div>
    </Fragment>
  );
};

export default SuccessStories;
