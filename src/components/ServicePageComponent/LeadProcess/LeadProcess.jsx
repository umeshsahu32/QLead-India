import React, { Fragment, useEffect } from "react";
import styles from "./LeadProcess.module.css";
import { LeadProcessData } from "./LeadProcessData";
import { useLocation } from "react-router-dom";

const LeadProcess = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return (
    <Fragment>
      <div className={styles.sectionWrapper} id="lead-generation-process">
        <h3>Overview of the Lead Generation Process</h3>
        <div className={styles.breadcrumb}>
          {LeadProcessData.map((item) => {
            return (
              <div className={`${styles.section}`} key={item.id}>
                <span className={styles.text}>{item.heading}</span>
                <div className={styles.overlay}>{item.overlay}</div>
                <div className={styles.overlay_mob}>{item.overlay}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default LeadProcess;
