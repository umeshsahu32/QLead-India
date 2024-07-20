import React, { Fragment, useState } from "react";
import styles from "./Faqs.module.css";
import { faqType, FaqData } from "./FaqData.js";
import FaqComponent from "./FaqComponent.jsx";
import SectionHeading from "../../components/SectionHeading/SectionHeading.jsx";

const Faqs = () => {
  const [categoryId, setCategoryId] = useState(0);

  const faqCategoryBtnClickHandler = (e, id) => {
    setCategoryId(id);
  };

  return (
    <Fragment>
      <div className={styles.faq_component}>
        <SectionHeading
          heading="Frequently Asked Questions"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit"
        />
      </div>
      <div className={styles.show_faq}>
        <div className={styles.faq_category}>
          {faqType.map((item, index) => {
            return (
              <Button
                text={item.text}
                onClick={(e) => faqCategoryBtnClickHandler(e, item.id)}
                isActive={categoryId === index}
              />
            );
          })}
        </div>
        <div>
          <FaqComponent questions={FaqData[categoryId]} />
        </div>
      </div>
    </Fragment>
  );
};

export default Faqs;
