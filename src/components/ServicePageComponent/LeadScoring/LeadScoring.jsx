import React, { Fragment, useEffect } from "react";
import styles from "./LeadScoring.module.css";
import { LeadScoringData } from "./LeadScoringData";
import { useLocation } from "react-router-dom";

const LeadScoring = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  // @ JSX START
  return (
    <Fragment>
      <div className={styles.section_container} id="lead-scoring-enhancing">
        <div className={styles.heading_container}>
          <h3>
            Predictive Lead Scoring <br /> Enhancing Your Sales Efficiency
          </h3>
          <h4>Leverage AI to Identify High-Quality Leads</h4>
          <p>
            Predictive lead scoring is the use of data, AI, and machine learning
            to evaluate and prioritize leads based on their likelihood to
            convert.
            <br />
            It helps businesses focus their sales efforts on leads that are most
            likely to become customers, thereby improving conversion rates and
            sales efficiency.
          </p>
        </div>
        <div className={styles.process_container}>
          {LeadScoringData.map((item) => {
            return (
              <Fragment>
                <div className={styles.process_box}>
                  <h3>{item.heading}</h3>
                  <p>{item.paragraph}</p>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default LeadScoring;
