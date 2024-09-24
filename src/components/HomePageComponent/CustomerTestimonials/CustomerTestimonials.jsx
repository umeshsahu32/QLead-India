import React, { Fragment, useState } from "react";
import styles from "./CustomerTestimonials.module.css";
import CustomerVideo from "./CustomerVideo";
import VideoIcon from "./VideoIcon";
import SectionHeading from "../../SectionHeading/SectionHeading";

const reviews = [
  {
    name: "Venkata Ramesh",
    username: "Real Estate Agent",
    description:
      "QLead helped me to find right buyer at right time in a quick span of time",
    img: "https://api.dicebear.com/9.x/initials/svg?seed=Patches",
    videoId: "ls4xRwekWgU",
  },
  {
    name: "Ramesh Reddy",
    username: "Property Consultant",
    description:
      "QLead has transform my approach to sales and its a game changer",
    img: "https://api.dicebear.com/9.x/initials/svg?seed=Patches",
    videoId: "s1p9Wd0F660",
  },
  {
    name: "Chetan Sharma",
    username: "Photographer",
    description: "I've never seen anything like this before. It's amazing.",
    img: "https://api.dicebear.com/9.x/initials/svg?seed=Patches",
    videoId: "zo1GNuwD5sA",
  },
  {
    name: "Satish Govind",
    username: "Real Estate Agent ",
    description: "Thanks to QLead predicting scoring my sales increase by 35%.",
    img: "https://api.dicebear.com/9.x/initials/svg?seed=Patches",
    videoId: "2xdykyqgpZI",
  },
  {
    name: "Sailaja Kumari",
    username: "Event Planner",
    description: "QLead Delivers qualified leads that works.",
    img: "https://api.dicebear.com/9.x/initials/svg?seed=Patches",
    videoId: "KI8O_d7TkBA",
  },
  {
    name: "Surya Pavan",
    username: "Realtor",
    description:
      "QLead AI technology helps make sure that i only deal with the people who are seriously looking for properties.",
    img: "https://api.dicebear.com/9.x/initials/svg?seed=Patches",
    videoId: "DgYU9a7MyGo",
  },
  {
    name: "Shefali Shaik",
    username: "Event Planner",
    description:
      "QLead predictive scoring help us on client who were actually looking for event planning.",
    img: "https://api.dicebear.com/9.x/initials/svg?seed=Patches",
    videoId: "ID7qzlu54No",
  },
];

const GetUserNameInitials = (full_name) => {
  let initials = full_name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return initials;
};

// const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

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
      onClick={(e) => onClick(e, name, videoId)}
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
      <SectionHeading heading="Quotes From Satisfied Customers" />
      <div className={styles.container}>
        <Marquee className={styles.customDuration}>
          {/* {firstRow.map((review) => (
            <ReviewCard
              key={Math.random()}
              {...review}
              onClick={videoIconBtnClickHandler}
            />
          ))} */}
          {reviews.map((review) => (
            <ReviewCard
              key={Math.random()}
              {...review}
              onClick={videoIconBtnClickHandler}
            />
          ))}
        </Marquee>
        {/* <Marquee reverse className={styles.customDuration}>
          {secondRow.map((review) => (
            <ReviewCard
              key={Math.random()}
              {...review}
              onClick={videoIconBtnClickHandler}
            />
          ))}
        </Marquee> */}
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
