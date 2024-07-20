import React, { Fragment } from "react";
import styles from "./FeatureSection.module.css";
import { FaUserCheck, FaFilter } from "react-icons/fa";
import SectionHeading from "../../SectionHeading/SectionHeading";
import industryDesktop from "../../../assets/images/industries-served-desktop.png";
import industryMobile from "../../../assets/images/industries-served-mobile.png";

const Card = ({ icon, title, items, bold }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.iconWrapper}>{icon}</div>
        <div className={styles.title_wrapper}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <ul className={styles.cardList}>
            {items.map((item, index) => {
              let head = item?.split(":")[0];
              let para = item?.split(":")[1];
              return (
                <li key={index}>
                  {!bold ? (
                    item
                  ) : (
                    <Fragment>
                      <b>{head}</b>: {para}
                    </Fragment>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <Fragment>
      <SectionHeading heading="If you have a business, we have leads" />
      <div className={styles.container}>
        <div className={styles.cardsColumn}>
          <Card
            icon={<FaUserCheck />}
            title="Understanding Your Business Needs"
            items={[
              "At India, we recognize that every business is unique with its own set of challenges and opportunities.",
              "Our approach is tailored to understand your specific goals, target audience, and market dynamics.",
            ]}
            bold={false}
          />
          <Card
            icon={<FaFilter />}
            title="Why Qualified Leads Matter"
            items={[
              "Higher Conversion Rates: Qualified leads are pre-screened and have a interest in your products or services, resulting in higher conversion rates",
              "Cost Efficiency: Focus your marketing and sales efforts on leads that are more likely to convert, optimizing your budget and resources.",
              "Accelerated Sales Cycle: With qualified leads, the time from initial contact to sale is significantly reduced, speeding up your sales cycle.",
            ]}
            bold={true}
          />
        </div>
        <div className={styles.imageColumn}>
          <img
            src="https://images.unsplash.com/photo-1720048170970-3848514c3d60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Workspace"
            className={styles.image}
          />
        </div>
      </div>
      <div>
        <img src={industryDesktop} className={styles.desktop_image} />
        <img src={industryMobile} className={styles.mobile_image} />
      </div>
    </Fragment>
  );
};

export default FeatureSection;
