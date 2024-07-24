import React, { Fragment, useState } from "react";
import styles from "./BenefitSection.module.css";
import {
  FaRocket,
  FaUserCheck,
  FaTachometerAlt,
  FaCogs,
  FaBrain,
  FaChartLine,
} from "react-icons/fa";
import unique0 from "../../../assets/images/Unique/image-0.avif";
import unique1 from "../../../assets/images/Unique/image-1.avif";
import unique2 from "../../../assets/images/Unique/image-2.avif";
import unique3 from "../../../assets/images/Unique/image-3.avif";
import unique4 from "../../../assets/images/Unique/image-4.avif";
import unique5 from "../../../assets/images/Unique/image-5.avif";
import SectionHeading from "../../SectionHeading/SectionHeading";

const adTypes = [
  {
    id: 0,
    title: "Higher Conversion Rates",
    image: unique0,
    description: "Leverage AI to generate highly qualified leads.",
  },
  {
    id: 1,
    title: "Pre-Qualified Prospects",
    image: unique1,
    description: "Eliminate the need for initial screening.",
  },
  {
    id: 2,
    title: "Speed to Market",
    image: unique2,
    description: "Accelerate lead generation and sales cycles.",
  },
  {
    id: 3,
    title: "Expertise",
    image: unique3,
    description:
      "Over 10 years of experience in sales outsourcing and lead generation.",
  },
  {
    id: 4,
    title: "Technology",
    image: unique4,
    description:
      "Cutting-edge AI and machine learning models tailored to your business needs.",
  },
  {
    id: 5,
    title: "Results",
    image: unique5,
    description:
      "Proven track record of helping businesses achieve their sales goals through high-quality leads.",
  },
];

const BenefitSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabClickHandler = (index) => {
    setActiveTab(index);
  };

  return (
    <Fragment>
      <SectionHeading heading="What Makes Us Unique" />
      <section className={styles.section}>
        <div className={styles.tabContainer}>
          {adTypes.map((adType) => (
            <button
              key={adType.id}
              className={`${styles.tabButton} ${
                adType.id === activeTab ? styles.active : ""
              }`}
              onClick={() => tabClickHandler(adType.id)}
            >
              {adType.title}
            </button>
          ))}
        </div>
        {/* IMAGE CONTAINER */}
        <div
          className={`${styles.contentContainer} animate__animated  animate__bounceInUp`}
        >
          <div className={`${styles.imageContainer} `}>
            <img
              src={adTypes[activeTab].image}
              alt={adTypes[activeTab].title}
              className={`${styles.image}`}
            />
          </div>
          <div className={styles.textContainer}>
            <h2 className={`${styles.title} `}>{adTypes[activeTab].title}</h2>
            <p className={styles.description}>
              {adTypes[activeTab].description}
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default BenefitSection;
