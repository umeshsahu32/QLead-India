import React, { Fragment, useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import styles from "./Industries.module.css";

import Industries2 from "../../components/HomePageComponent/Industries2/Industries2";
import { industriesData } from "./IndustriesData";

const Industries = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  useEffect(() => {
    if (isDrawerOpen) {
      setTimeout(() => setIsOverlayVisible(true), 50);
    } else {
      setIsOverlayVisible(false);
    }
  }, [isDrawerOpen]);

  const openDrawer = (industry) => {
    setSelectedIndustry(industry);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Fragment>
      <Industries2 />
      <section className={styles.section}>
        <ul className={styles.list}>
          {industriesData.map((industry, index) => (
            <li
              key={index}
              className={styles.listItem}
              onClick={() => openDrawer(industry)}
            >
              <span className={styles.industryName}>
                {industry.industry_name}
              </span>
              <span className={styles.arrow}>→</span>
            </li>
          ))}
        </ul>
        {/* {isDrawerOpen && (
          <>
            <div className={styles.overlay} onClick={closeDrawer}></div>
            <div
              className={`${styles.drawer} ${isDrawerOpen ? styles.open : ""}`}
            >
              <button className={styles.closeButton} onClick={closeDrawer}>
                ×
              </button>
              <div className={styles.drawerContent}>
                <img
                  src={selectedIndustry.image}
                  alt={selectedIndustry.name}
                  className={styles.industryImage}
                />
                <h2>{selectedIndustry.name}</h2>
                <p>{selectedIndustry.description}</p>
              </div>
            </div>
          </>
        )} */}

        <div
          className={`${styles.overlay} ${
            isOverlayVisible ? styles.visible : ""
          }`}
          onClick={closeDrawer}
        ></div>
        <div className={`${styles.drawer} ${isDrawerOpen ? styles.open : ""}`}>
          {selectedIndustry && (
            <>
              <button className={styles.closeButton} onClick={closeDrawer}>
                <MdClose />
              </button>
              <div className={styles.drawerContent}>
                <img
                  src={selectedIndustry.image}
                  alt={selectedIndustry.industry_name}
                  className={styles.industryImage}
                />
                <div className={styles.industryInfo}>
                  <h2>{selectedIndustry.industry_name}</h2>
                  <p>{selectedIndustry.description}</p>
                  <h2>Projects</h2>

                  <div className={styles.project_images}>
                    {selectedIndustry.brands.map((item, index) => {
                      return <img src={item} alt="image 1" key={index} />;
                    })}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default Industries;
