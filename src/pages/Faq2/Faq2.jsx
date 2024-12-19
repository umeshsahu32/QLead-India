import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Faq2.module.css";
import { faqData } from "./FaqData";
import CategoryButtons from "./CategoryButtons";
import FaqList from "./FaqList";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import useMetaTags from "../../hooks/useMetaTags";

const Faq2 = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeFaqData, setActiveFaqData] = useState([]);

  const filtersFaqs = () => {
    const res = faqData.filter((item) => item.section_id === activeTab);
    setActiveFaqData(res);
  };

  useEffect(() => {
    filtersFaqs();
  }, [activeTab]);

  const buttonClickHandler = (id) => {
    setActiveTab(id);
  };

  useMetaTags({
    title:
      "QLead FAQs | Harmonic Analysis, Pricing, Industries Served, AI Tools & Process",
    description:
      "Find answers to your most frequently asked questions about lead generation. Learn about our pricing, the industries we serve, our lead generation process, and how we utilize AI tools to deliver high-quality leads.",
    keywords: "QLead FAQs",
  });

  return (
    <Fragment>
      <div className={styles.heading_container}>
        <SectionHeading heading="Frequently Asked Questions" />
        <p>
          These are the most commonly asked questions about AOB India QLead.
        </p>
        <p>
          Can't find what you're looking for?{" "}
          <Link to="/contact-us">Contact Our Team</Link>{" "}
        </p>
        <CategoryButtons
          categories={faqData}
          onClick={(id) => buttonClickHandler(id)}
          active={activeTab}
        />
        <FaqList questions={activeFaqData} activeTab={activeTab} />
      </div>
    </Fragment>
  );
};

export default Faq2;
