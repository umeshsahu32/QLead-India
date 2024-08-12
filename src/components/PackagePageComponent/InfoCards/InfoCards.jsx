import React, { Fragment } from "react";
import styles from "./InfoCards.module.css";
import SectionHeading from "../../SectionHeading/SectionHeading";
import { InfoData } from "./InfoData";

const InfoCards = () => {
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
        {InfoData.map((item) => {
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
