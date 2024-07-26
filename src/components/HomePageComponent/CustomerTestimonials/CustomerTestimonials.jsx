import React, { Fragment, useState } from "react";
import styles from "./CustomerTestimonials.module.css";
import CustomerVideo from "./CustomerVideo";
import VideoIcon from "./VideoIcon";
import SectionHeading from "../../SectionHeading/SectionHeading";

const reviews = [
  {
    name: "Jack Sharma",
    username: "@jack",
    description:
      "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://api.dicebear.com/9.x/initials/svg?seed=Patches",
    videoId: "1VqVWx3rYfM",
  },
  {
    name: "Chaavi Gupta",
    username: "@jack",
    description:
      "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://api.dicebear.com/9.x/initials/svg?seed=Patches",
    videoId: "1VqVWx3rYfM",
  },
  {
    name: "Vikas Gupta",
    username: "@jack",
    description:
      "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://api.dicebear.com/9.x/initials/svg?seed=Patches",
    videoId: "1VqVWx3rYfM",
  },
  {
    name: "Shivam Yadav",
    username: "@jack",
    description:
      "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://api.dicebear.com/9.x/initials/svg?seed=Patches",
    videoId: "1VqVWx3rYfM",
  },
  {
    name: "Umesh Sahu",
    username: "@jack",
    description:
      "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://api.dicebear.com/9.x/initials/svg?seed=Patches",
    videoId: "1VqVWx3rYfM",
  },
  {
    name: "Jatin Shukla",
    username: "@jack",
    description:
      "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://api.dicebear.com/9.x/initials/svg?seed=Patches",
    videoId: "1VqVWx3rYfM",
  },
  {
    name: "Tushar Shetiya",
    username: "@jack",
    description:
      "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://api.dicebear.com/9.x/initials/svg?seed=Patches",
    videoId: "1VqVWx3rYfM",
  },
  {
    name: "Shuhana Khan",
    username: "@jack",
    description:
      "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://api.dicebear.com/9.x/initials/svg?seed=Patches",
    videoId: "1VqVWx3rYfM",
  },
  {
    name: "Deepak Sahu",
    username: "@jack",
    description:
      "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://api.dicebear.com/9.x/initials/svg?seed=Patches",
    videoId: "1VqVWx3rYfM",
  },
  {
    name: "Pradeep Jain",
    username: "@jack",
    description:
      "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://api.dicebear.com/9.x/initials/svg?seed=Patches",
    videoId: "1VqVWx3rYfM",
  },
  {
    name: "Sapna Shah",
    username: "@jack",
    description:
      "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://api.dicebear.com/9.x/initials/svg?seed=Patches",
    videoId: "1VqVWx3rYfM",
  },
  {
    name: "Vivek Soni",
    username: "@jack",
    description:
      "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://api.dicebear.com/9.x/initials/svg?seed=Patches",
    videoId: "1VqVWx3rYfM",
  },
  // ... (include all the reviews from the original code)
];

const GetUserNameInitials = (full_name) => {
  let initials = full_name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return initials;
};

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, description, onClick, videoId }) => {
  return (
    <figure
      className={styles.reviewCard}
      onMouseEnter={(e) => {
        e.currentTarget
          .closest(`.${styles.marquee}`)
          .classList.add(styles.paused);
      }}
      onMouseLeave={(e) => {
        e.currentTarget
          .closest(`.${styles.marquee}`)
          .classList.remove(styles.paused);
      }}
    >
      <div className={styles.cardHeader}>
        <div>
          <div className={styles.avatar}>{GetUserNameInitials(name)}</div>
        </div>
        <div className={styles.user_name}>
          <div className={styles.userInfo}>
            <figcaption className={styles.name}>{name}</figcaption>
            <p className={styles.username}>{username}</p>
          </div>
          <VideoIcon onClick={(e) => onClick(e, name, videoId)} />
        </div>
      </div>
      <blockquote className={styles.description}>{description}</blockquote>
    </figure>
  );
};

const Marquee = ({ children, reverse, className }) => {
  const [isPaused, setIsPaused] = useState(false);
  return (
    <div
      className={`${styles.marquee} ${
        reverse ? styles.reverse : ""
      } ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.marqueeContent}>{children}</div>
      <div className={styles.marqueeContent} aria-hidden="true">
        {children}
      </div>
    </div>
  );
};

const CustomerTestimonial = () => {
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
      <SectionHeading heading="Quotes from satisfied customers" />
      <div className={styles.container}>
        <Marquee className={styles.customDuration}>
          {firstRow.map((review) => (
            <ReviewCard
              key={Math.random()}
              {...review}
              onClick={videoIconBtnClickHandler}
            />
          ))}
        </Marquee>
        <Marquee reverse className={styles.customDuration}>
          {secondRow.map((review) => (
            <ReviewCard
              key={Math.random()}
              {...review}
              onClick={videoIconBtnClickHandler}
            />
          ))}
        </Marquee>
        {/* <div className={styles.gradientLeft}></div>
        <div className={styles.gradientRight}></div> */}
      </div>
      <CustomerVideo
        isOpen={isModalOpen}
        onClose={closeModal}
        videoId={videoId}
        title={title}
      />
    </Fragment>
  );
};

export default CustomerTestimonial;
