import React, { Fragment } from "react";
import styles from "./WhatWeStand.module.css";
import SectionHeading from "../../SectionHeading/SectionHeading";
import { FaRocket, FaUserCheck, FaAward } from "react-icons/fa";

const WhatWeStand = () => {
  const data = [
    {
      id: 1,
      title: "Qualified Lead Generation",
      description:
        "Qualified Lead Generation service is designed to provide businesses with high-quality, conversion-ready leads.",
      icon: <FaRocket />,
    },
    {
      id: 1,
      title: "Qualified Meeting Generation",
      description:
        "Qualified Meeting Generation service is designed to ensure that your sales team meets with the right prospects who have a genuine interest in your products or services.",
      icon: <FaAward />,
    },
    {
      id: 1,
      title: "Qualified Audience Generation",
      description:
        "Looking for targeted profiles for your upcoming webinar, on-ground or virtual event? Count on us with our insights into various communities and audience profiles",
      icon: <FaUserCheck />,
    },
  ];

  return (
    <Fragment>
      <SectionHeading heading="What We Deliver" />
      <section className={styles.standForSection}>
        {data.map((item) => {
          return (
            <div className={styles.card} key={item.id}>
              <span className={styles.icon}>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </section>
    </Fragment>
  );
};

export default WhatWeStand;
