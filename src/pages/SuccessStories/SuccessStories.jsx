import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import StoryCategoryCarousel from "./StoryCategoryCarousel";
import styles from "./SuccessStories.module.css";
import { successData } from "./SuccessStoryData";
import StoryCard from "./StoryCard";
import { useLocation } from "react-router-dom";
import SuccessPageHero from "./SuccessPageHero.jsx";

const SuccessStories = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeData, setActiveData] = useState([]);
  const { pathname } = useLocation();

  const fnGetActiveData = () => {
    const res = successData.filter((item) => item.category_id === activeTab);
    setActiveData(res);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

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
        <StoryCategoryCarousel
          categories={categories}
          onClick={(id) => pillClickHandler(id)}
          active={activeTab}
        />
        <div>
          <StoryCard cardData={activeData} />
        </div>
      </div>
    </Fragment>
  );
};

export default SuccessStories;
