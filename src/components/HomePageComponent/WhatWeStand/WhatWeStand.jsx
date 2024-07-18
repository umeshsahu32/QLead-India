import React, { Fragment } from "react";
import styles from "./WhatWeStand.module.css";
import SectionHeading from "../../SectionHeading/SectionHeading";
import { FaRocket, FaUserCheck, FaAward } from "react-icons/fa";

const WhatWeStand = () => {
  const data = [
    {
      id: 1,
      title: "Quick",
      description: "Advanced technology for swift lead generation",
      icon: <FaRocket />,
    },
    {
      id: 1,
      title: "Quality",
      description: "Rigorous analysis ensures high relevance",
      icon: <FaAward />,
    },
    {
      id: 1,
      title: "Qualified",
      description: "Precision targeting for tailored prospects",
      icon: <FaUserCheck />,
    },
  ];

  return (
    <Fragment>
      <SectionHeading
        heading="What We Stand For"
        para="With Qlead, you’re not just getting leads, you’re getting a strategic advantage in a competitive marketplace. Embrace the 3Q Advantage and turn prospects into profits with precision and ease"
      />

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
