import React, { Fragment } from "react";
import styles from "./IntroSection2.module.css";
import video1 from "../../../assets/video/video01.mp4";
import video2 from "../../../assets/video/video02.mp4";
import video3 from "../../../assets/video/video03.mp4";
import SectionHeading from "../../SectionHeading/SectionHeading";

const Section12 = () => {
  const data = [
    {
      id: 1,
      heading: "Qualified Lead Generation ",
      paragraph:
        "Qualified Lead Generation service is designed to provide businesses with high-quality, conversion-ready leads.",
      video: video1,
    },
    {
      id: 2,
      heading: "Qualified Meeting Generation",
      paragraph:
        "Qualified Meeting Generation service is designed to ensure that your sales team meets with the right prospects who have a genuine interest in your products or services.",
      video: video2,
    },
    {
      id: 3,
      heading: "Qualified Audience Generation",
      paragraph:
        "Looking for targeted profiles for your upcoming webinar, on-ground or virtual event? Count on us with our insights into various communities and audience profiles",
      video: video3,
    },
  ];

  return (
    <Fragment>
      <SectionHeading heading="What We Deliver" />
      <div className={styles.section12}>
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.row} ${index % 2 !== 0 ? styles.reverse : ""}`}
          >
            <div className={styles.content}>
              <h2>{item.heading}</h2>
              <p>{item.paragraph}</p>
            </div>
            <div className={styles.videoContainer}>
              <video
                className={styles.video}
                src={item.video}
                autoPlay
                loop
                muted
                playsInline
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Section12;
