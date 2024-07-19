import React, { Fragment, useState } from "react";
import styles from "./Achievements.module.css";
import { FaLightbulb, FaFlag } from "react-icons/fa";
import SectionHeading from "../../SectionHeading/SectionHeading";

const achievementData = [
  {
    id: 0,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    title: "Our Areas of Expertise",
    icon: <FaLightbulb />,
    list: [
      {
        subtitle: "Comprehensive Sales Outsourcing:",
        desc: "We provide end-to-end sales outsourcing solutions, including lead generation, telemarketing, and customer relationship management.",
      },
      {
        subtitle: "Experienced Sales Teams:",
        desc: "Our skilled sales professionals are trained to understand your business needs and deliver results that exceed expectations.",
      },
      {
        subtitle: "Advanced Technology Integration:",
        desc: "We leverage the latest AI and data analytics tools to optimize sales processes and enhance lead quality.",
      },
    ],
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Our Key Milestones",
    icon: <FaFlag />,
    list: [
      {
        subtitle: "500+ Clients Served:",
        desc: "Partnering with diverse businesses ranging from startups to large enterprises.",
      },
      {
        subtitle: "1 Million+ Leads Generated:",
        desc: "Delivering high-quality leads that convert into loyal customers.",
      },
      {
        subtitle: "200+ Sales Experts:",
        desc: "A dedicated team of sales professionals committed to driving your business growth.",
      },
    ],
  },
];

const Achievements = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Fragment>
      <SectionHeading heading="Our Achievements" />
      <div className={styles.container}>
        <div className={styles.imageColumn}>
          <img
            src={achievementData[activeTab].image}
            alt="Achievement"
            className={styles.image}
          />
        </div>
        <div className={styles.contentColumn}>
          <div className={styles.tabs}>
            {achievementData.map((item, index) => {
              return (
                <button
                  className={`${styles.tab} ${
                    item.id === activeTab ? styles.active : ""
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  {item.icon} <span>{item.title}</span>
                </button>
              );
            })}
          </div>
          <div className={styles.content}>
            <h2>{achievementData[activeTab].title}</h2>
            <ul>
              {achievementData[activeTab].list.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  <b>{item.subtitle}</b>&nbsp;{item.desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Achievements;
