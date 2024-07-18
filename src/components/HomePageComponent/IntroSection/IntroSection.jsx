import React, { Fragment } from "react";
import leadImage1 from "../../../assets/images/high-quality-leads.webp";
import leadImage2 from "../../../assets/images/high-quality-meetings.webp";
import styles from "./IntroSection.module.css";

const IntroSection = () => {
  const data = [
    {
      id: 1,
      title: "Elevate Your Sales with High-Quality Leads",
      description:
        "In the fast-paced business world, finding and engaging with the right leads is essential for driving growth and achieving sales targets. AOB India's Qualified Lead Generation service is designed to provide businesses with high-quality, conversion-ready leads. Leveraging advanced data analytics and AI-driven technologies, we ensure that every lead we deliver meets your specific criteria and has a genuine interest in your products or services.",
      image: leadImage1,
    },
    {
      id: 2,
      title: "Transforming Your Sales Process with High-Quality Meetings",
      description:
        "In today's competitive business landscape, securing meetings with key decision-makers is crucial for driving sales and business growth. AOB India's Qualified Meeting Generation service is designed to ensure that your sales team connects with the right prospects who have a genuine interest in your products or services. By leveraging advanced data analytics and AI-driven technologies, we take the guesswork out of meeting generation, providing you with high-quality appointments that convert into successful business relationships.",
      image: leadImage2,
    },
  ];

  return (
    <Fragment>
      <section className={styles.introSection}>
        {data.map((item) => {
          return (
            <div className={styles.leadsSection}>
              <div className={styles.leadsImage}>
                <img src={item.image} alt="High-Quality Leads" />
              </div>
              <div className={styles.leadsContent}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </section>
    </Fragment>
  );
};

export default IntroSection;
