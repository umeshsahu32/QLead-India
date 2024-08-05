import React, { Fragment, useState } from "react";
import styles from "./AITools.module.css";
import { FaLongArrowAltRight, FaArrowRight } from "react-icons/fa";
import AIToolModal from "./AIToolsModal";
import { AIToolsData as data } from "./AIToolsData";
import SectionHeading from "../../SectionHeading/SectionHeading";

const AITools = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openDataIndex, setOpenDataIndex] = useState(0);

  const closeModal = () => setIsModalOpen(false);

  const openModalButtonHandler = (e, id) => {
    e.preventDefault();
    setOpenDataIndex(id);
    setIsModalOpen(true);
  };

  return (
    <Fragment>
      <SectionHeading heading="Our Home Grown AI Tools" />
      <section className={styles.section_container}>
        {data.map((item) => {
          return (
            <div className={styles.section_card} key={item.id}>
              <img src={item.image} alt="Image" />
              <div className={styles.card_info}>
                <h5>{item.primary_heading}</h5>
                <p>{item.desc}</p>
                {/* <button
                  className={styles.know_more_button}
                  onClick={(e) => openModalButtonHandler(e, item.id)}
                >
                  <span>Know More</span>
                  <span className={styles.icon}>
                    <FaLongArrowAltRight />
                  </span>
                </button> */}

                <button
                  className={styles.submitButton}
                  onClick={(e) => openModalButtonHandler(e, item.id)}
                >
                  <span>Know More</span>
                  {/* <FaLongArrowAltRight className={styles.icon} /> */}
                </button>
              </div>
            </div>
          );
        })}
      </section>
      <AIToolModal
        isOpen={isModalOpen}
        onClose={closeModal}
        data={data[openDataIndex]}
      />
    </Fragment>
  );
};

export default AITools;
