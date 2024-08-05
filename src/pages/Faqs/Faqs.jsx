import React, { Fragment, useState, useEffect } from "react";
import styles from "./Faqs.module.css";
import { useLocation } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";

const Faqs = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { pathname } = useLocation();

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  //   @ JSX START
  return (
    <Fragment>
      {/* <div className={styles.faqContainer}>
        {data.map((question, index) => (
          <div key={index} className={styles.faqItem}>
            <div
              className={`${styles.faqQuestion} ${
                activeIndex === index ? styles.active_border : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              {question.question}
              <span className={styles.icon}>
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>

            <div
              className={`${styles.faqAnswer} ${
                activeIndex === index ? styles.active : ""
              }`}
            >
              {question.answer}
            </div>
          </div>
        ))}
      </div> */}
      <div className={styles.faqContainer}>
        {data.map((question, index) => (
          <div key={index} className={styles.faqItem}>
            <div
              className={styles.faqQuestion}
              onClick={() => toggleAccordion(index)}
            >
              {question.question}
              <span
                className={`${styles.icon} ${
                  activeIndex === index ? styles.rotated : styles.notRotated
                }`}
              >
                <IoIosArrowUp size={14} />
              </span>
            </div>

            <div
              className={`${styles.faqAnswer} ${
                activeIndex === index ? styles.active : ""
              }`}
            >
              {question.answer}
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Faqs;
