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
import benefitImage1 from "../../../assets/images/benefit-image-1.svg";
import benefitImage2 from "../../../assets/images/benefit-image-2.svg";
import benefitImage3 from "../../../assets/images/benefit-image-3.svg";
import benefitImage4 from "../../../assets/images/benefit-image-4.svg";
import benefitImage5 from "../../../assets/images/benefit-image-5.svg";
import benefitImage6 from "../../../assets/images/benefit-image-6.svg";
import SectionHeading from "../../SectionHeading/SectionHeading";

const benefitsData = [
  {
    title: "Higher Conversion Rates",
    description: "Leverage AI to generate highly qualified leads.",
    icon: <FaRocket />,
    image: benefitImage1,
  },
  {
    title: "Pre-Qualified Prospects",
    description: "Eliminate the need for initial screening.",
    icon: <FaUserCheck />,
    image: benefitImage2,
  },
  {
    title: "Speed to Market",
    description: "Accelerate lead generation and sales cycles",
    icon: <FaTachometerAlt />,
    image: benefitImage3,
  },
  {
    title: "Expertise",
    description:
      "Over 10 years of experience in sales outsourcing and lead generation",
    icon: <FaCogs />,
    image: benefitImage4,
  },
  {
    title: "Technology",
    description:
      "Cutting-edge AI and machine learning models tailored to your business needs.",
    icon: <FaBrain />,
    image: benefitImage5,
  },
  {
    title: "Results",
    description:
      "Proven track record of helping businesses achieve their sales goals through high-quality leads",
    icon: <FaChartLine />,
    image: benefitImage6,
  },
];

const BenefitSection = () => {
  const [activeBenefit, setActiveBenefit] = useState(benefitsData[0]);

  return (
    <Fragment>
      <SectionHeading
        heading="Benefits"
        para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eos
          alias sit recusandae libero provident itaque deserunt unde debitis
          illum, doloremque vero, eligendi, rem"
      />
      <section className={styles.benefitsSection}>
        <div className={styles.benefitsCards}>
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className={`${styles.card} ${
                activeBenefit.title === benefit.title ? styles.active : ""
              }`}
              onClick={() => setActiveBenefit(benefit)}
            >
              <div className={`${styles.icon} `}>{benefit.icon}</div>
              <h3>{benefit.title}</h3>
            </div>
          ))}
        </div>
        <div className={styles.benefitsContent}>
          <div className={styles.contentText}>
            <h3>{activeBenefit.title}</h3>
            <p>{activeBenefit.description}</p>
          </div>
          <div className={styles.contentImage}>
            <img src={activeBenefit.image} alt={activeBenefit.title} />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default BenefitSection;
