import React, { Fragment } from "react";
import styles from "./CaseStudy.module.css";
import paytm from "../../../assets/images/caseStudyImages/paytm.png";
import innovura from "../../../assets/images/caseStudyImages/innovura.png";
import siora from "../../../assets/images/caseStudyImages/siora.png";
import SectionHeading from "../../SectionHeading/SectionHeading";
import LinkButton from "../../Buttons/LinkButton";

const data = [
  {
    image: paytm,
    challenge:
      "An online retailer, Paytm Mall, needed to boost sales during the holiday season by reaching potential customers interested in their products.",
    solution:
      "We conducted targeted email and social media campaigns, delivering highly qualified leads to their sales team.",
    result:
      "The retailer saw a 50% increase in holiday sales and significantly expanded their customer base.",
    title: "Paytm Mall",
  },
  {
    image: innovura,
    challenge:
      "A telecom provider, Innovura Technologies, needed to connect with businesses looking for reliable communication solutions.",
    solution:
      "We identified IT managers and decision-makers in companies, conducting targeted campaigns to highlight the provider's offerings.",
    result:
      "The telecom provider experienced a 35% increase in business client sign-ups and expanded their market share.",
    title: "Innovura Technology Pvt. Ltd.",
  },
  {
    image: siora,
    challenge:
      "A medical device manufacturer, Siora Surgicals, needed to reach procurement managers in hospitals and clinics for their new product line.",
    solution:
      "We identified and engaged with decision-makers in the healthcare sector, delivering qualified leads ready to discuss procurement.",
    result:
      "The manufacturer saw a 35% increase in sales and expanded their market reach significantly.",
    title: "Siora Surgicals Private Limited",
  },
];

const CaseStudyCard = ({ image, title, result, solution, challenge }) => {
  return (
    <Fragment>
      <div className={styles.card}>
        <img src={image} alt="Profile" className={styles.cardImage} />
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.cardContent}>
          <div className={styles.cardDetails}>
            <p>
              <strong>Challenge: </strong>
              {challenge}
            </p>
            <p>
              <strong>Solution: </strong>
              {solution}
            </p>
            <p>
              <strong>Result: </strong>
              {result}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const CaseStudy = () => {
  return (
    <Fragment>
      <SectionHeading heading="Success Stories" />
      <div className={styles.container}>
        {data.map((item) => {
          return <CaseStudyCard {...item} />;
        })}
      </div>
      <LinkButton path="about-us" text="View All" />
    </Fragment>
  );
};

export default CaseStudy;
