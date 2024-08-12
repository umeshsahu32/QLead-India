import React, { Fragment } from "react";
import styles from "./Timeline.module.css";
import SectionHeading from "../../SectionHeading/SectionHeading";
import { TimelineData } from "./TimelineData";

const Timeline = () => {
  return (
    <Fragment>
      <SectionHeading heading="Our Journey" />
      <div className={styles.timeline}>
        <div className={styles.timelineContainer}>
          {TimelineData.map((event, index) => (
            <div
              key={index}
              className={`${styles.timelineItem} ${
                index % 2 === 0 ? styles.left : styles.right
              }`}
            >
              <div className={styles.content}>
                <h3>{event.title}</h3>
                <p className={styles.subtitle}>{event.subtitle}</p>
                <p className={styles.description}>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Timeline;
