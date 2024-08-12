import React, { Fragment } from "react";
import styles from "./LeadProcess.module.css";
import { LeadProcessData } from "./LeadProcessData";

const LeadProcess = () => {
  return (
    <Fragment>
      <div className={styles.sectionWrapper}>
        <h3>Overview of the lead generation process</h3>
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
