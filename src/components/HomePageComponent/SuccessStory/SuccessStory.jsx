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

const PlayIcon = ({ onClick }) => (
  <svg viewBox="0 0 24 24" width="32" height="32" onClick={onClick}>
    <path d="M8 5v14l11-7z" fill="#303030" />
  </svg>
);

const cardData = [
  {
    logo: image1,
    percentage: "47%",
    description: "Traffic improvement",
    caseStudy: "See Case Study",
    gradient: "linear-gradient(to bottom, #59d337 0%, #111827 60%)",
    videoId: "sAF7Km_znjA",
    title: "Rodeside Coder",
  },
  {
    logo: image2,
    percentage: "19%",
    description: "Increase in Leads",
    caseStudy: "See Case Study",
    gradient: "linear-gradient(to bottom, #E3A5C7 0%, #111827 60%)",
    videoId: "LJESy3k8kYc",
    title: "Meet Parikh",
  },
  {
    logo: image3,
    percentage: "16%",
    description: "YoY Total Non-Branded Impressions",
    caseStudy: "See Case Study",
    gradient: "linear-gradient(to bottom, #2E236C 0%, #111827 60%)",
    videoId: "4iyDmijvFAg",
    title: "Ridhi Dutta",
  },
  {
    logo: image4,
    percentage: "47%",
    description: "Traffic improvement",
    caseStudy: "See Case Study",
    gradient: "linear-gradient(to bottom, #9B86BD 0%, #111827 60%)",
    videoId: "it0aiDs9hwY",
    title: "Anshika Gupta",
  },
  {
    logo: image5,
    percentage: "19%",
    description: "Increase in Leads",
    caseStudy: "See Case Study",
    gradient: "linear-gradient(to bottom, #088395 0%, #111827 60%)",
    videoId: "Oiiv8grs8ic",
    title: "Nishant Chaher",
  },
  {
    logo: image6,
    percentage: "106%",
    description: "YoY Total Non-Branded Impressions",
    caseStudy: "See Case Study",
    gradient: "linear-gradient(to bottom, #3C5B6F 0%, #111827 60%)",
    videoId: "ZvbzSrg0afE",
    title: "Akshya Saini",
  },
  ,
];

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
        {cardData.map((item, index) => (
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
              <div className={styles.content}>
                <div className={styles.stats}>
                  <span className={styles.percentage}>{item.percentage}</span>
                  <span className={styles.description}>{item.description}</span>
                </div>
                <a href="#" className={styles.link}>
                  {item.caseStudy}
                </a>
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
