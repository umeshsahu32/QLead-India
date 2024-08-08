import React, { Fragment } from "react";
import styles from "./InfoCards.module.css";
import SectionHeading from "../../SectionHeading/SectionHeading";

const InfoCards = () => {
  const arr = [
    {
      id: 1,
      heading: "Advance Targeting",
      para: "We use sophisticated algorithms and data analytics to identify leads who are genuinely interested in your products or services.",
    },
    {
      id: 2,
      heading: "Lead Qualification",
      para: "Every lead is contacted and qualified by our trained tele callers. This ensures that the leads you receive have been vetted for interest, budget, and readiness to purchase.",
    },
    {
      id: 3,
      heading: "Quality Assurance",
      para: "Our harmonic analysis technology further evaluates each interaction, providing you with leads that are both high-quality and conversion-ready.",
    },
  ];

  return (
    <Fragment>
      <SectionHeading heading="QLead's Approach" />
      <div className={styles.page_heading}>
        <p>
          At QLead, we specialize in providing bottom-of-the-funnel leads that
          are not only highly targeted but also pre-qualified. Our process
          involves advanced AI tools and human intervention to ensure that every
          lead meets your specific criteria and is ready for conversion.
        </p>
      </div>
      <div className={styles.quality_container}>
        {arr.map((item) => {
          return (
            <div key={item.id} className={styles.quality_box}>
              <h4>{item.heading}</h4>
              <p>{item.para}</p>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default InfoCards;
