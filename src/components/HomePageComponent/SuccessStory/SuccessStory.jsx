import React, { Fragment, useState } from "react";
import styles from "./SuccessStory.module.css";
import VideoModal from "./VideoModal";
import image1 from "../../../assets/images/SuccessStory/image-1.webp";
import image2 from "../../../assets/images/SuccessStory/image-2.webp";
import image3 from "../../../assets/images/SuccessStory/image-3.webp";
import image4 from "../../../assets/images/SuccessStory/image-4.webp";
import image5 from "../../../assets/images/SuccessStory/image-5.webp";
import image6 from "../../../assets/images/SuccessStory/image-6.webp";
import SectionHeading from "../../SectionHeading/SectionHeading";
import LinkButton from "../../Buttons/LinkButton";
import { successStoryHomeData } from "./successStoryHomeData";

// const PlayIcon = ({ onClick }) => (
//   <svg viewBox="0 0 24 24" width="32" height="32" onClick={onClick}>
//     <path d="M8 5v14l11-7z" fill="#303030" />
//   </svg>
// );

const PlayIcon = ({ onClick }) => {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.playIconWrapper}>
          <div className={styles.playIcon} onClick={onClick}>
            <div className={styles.triangle}></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const SuccessStory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [videoId, setVideoId] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const videoIconBtnClickHandler = (e, title, video) => {
    e.preventDefault();
    setTitle(title);
    setVideoId(video);
    openModal();
  };

  return (
    <Fragment>
      <SectionHeading heading="Success Stories" />
      <div className={styles.cardSection}>
        {successStoryHomeData.map((item, index) => (
          <Fragment>
            <div
              className={`${styles.card}`}
              key={index}
              style={{ background: item.gradient }}
            >
              <div className={styles.logoContainer}>
                <img
                  src={item.logo}
                  alt="Company Logo"
                  className={styles.logo}
                />
                <div className={styles.playIconWrapper}>
                  <PlayIcon
                    onClick={(e) =>
                      videoIconBtnClickHandler(e, item.title, item.videoId)
                    }
                    title={item.title}
                    videoId={item.videoId}
                  />
                </div>
              </div>
              {/* <div className={styles.content}>
                <div className={styles.stats}>
                  <span className={styles.percentage}>{item.percentage}</span>
                  <span className={styles.description}>{item.description}</span>
                </div>
              </div> */}
              <div className={styles.content}>
                <span className={styles.percentage}>{item.percentage}</span>
                <span className={styles.description}>{item.description}</span>
              </div>
            </div>
            <VideoModal
              isOpen={isModalOpen}
              onClose={closeModal}
              videoId={videoId}
              title={title}
            />
          </Fragment>
        ))}
      </div>
      <LinkButton path="success-stories" text="View All" />
    </Fragment>
  );
};

export default SuccessStory;
