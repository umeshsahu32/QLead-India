import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import StoryCategoryCarousel from "./StoryCategoryCarousel";
import styles from "./SuccessStories.module.css";
import StoryCard from "./StoryCard";
import { successStoriesData } from "./SuccessStoryData";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { useLocation } from "react-router-dom";

const SuccessStories = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeData, setActiveData] = useState([]);
  const { pathname } = useLocation();

  const fnGetActiveData = () => {
    const res = successStoriesData.filter(
      (item) => item.section_id === activeTab
    );
    setActiveData(res);
  };

  useEffect(() => {
    fnGetActiveData();
  }, [activeTab]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  const pillClickHandler = (id) => {
    setActiveTab(id);
  };

  return (
    <Fragment>
      <SectionHeading heading="Success Stories" />
      <div className={styles.sectionContainer}>
        <StoryCategoryCarousel
          categories={successStoriesData}
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
