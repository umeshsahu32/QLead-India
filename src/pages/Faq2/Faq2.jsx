import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Faq2.module.css";
import { faqData } from "./FaqData";
import CategoryButtons from "./CategoryButtons";
import FaqList from "./FaqList";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

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

  return (
    <Fragment>
      <div className={styles.heading_container}>
        {/* <h3>Frequently Asked Question</h3> */}
        <SectionHeading heading="Frequently Asked Question" />
        <p>These Are the most commonly asked questions about Untitled UI.</p>
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
