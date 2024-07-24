import React, { Fragment } from "react";
import styles from "./Blogs.module.css";
import { FaArrowRight } from "react-icons/fa";
import SectionHeading from "../../SectionHeading/SectionHeading";
import image1 from "../../../assets/images/Blogs/media-front-1.png";
import image2 from "../../../assets/images/Blogs/media-front-2.jpg";
import image3 from "../../../assets/images/Blogs/media-front-3.jpg";
import LinkButton from "../../Buttons/LinkButton";

const Blogs = () => {
  const posts = [
    {
      image: image1,
      date: "December 12, 2024",
      title: "AOB India",
      category: "Economics Times",
      link: "https://economictimes.indiatimes.com/aob-india-the-most-reliable-sales-outsourcing-partner-for-any-business/articleshow/76499205.cms?from=mdr",
      description:
        "The Most Reliable Sales Outsourcing Partner For Any Business",
    },
    {
      image: image2,
      date: "July 17, 2023",
      title: "AOB India",
      category: "Prime View",
      link: "https://primeview.co/aob-india-a-pathbreaking-initiative-efficiently-delivering-outsourcing-service-in-sales/",
      description:
        "A pathbreaking initiative, efficiently delivering outsourcing service in sales",
    },
    {
      image: image3,
      date: "March 05, 2024",
      title: "AOB India",
      category: "Your Story",
      link: "https://yourstory.com/2020/07/sales-outsourcing-reliable-startups",
      description:
        "Here’s how this sales outsourcing agency is becoming the most reliable partner for startups",
    },
  ];

  return (
    <Fragment>
      <SectionHeading heading="Blogs & Media" />
      <div className={styles.container}>
        {posts.map((item, index) => {
          return (
            <div className={styles.card} key={index}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardSubtitle}>{item.category}</p>
                <p className={styles.cardDescription}>{item.description}</p>
                <div className={styles.cardFooter}>
                  <p className={styles.cardDate}>{item.date}</p>
                  <a href={item.link} className={styles.cardLink}>
                    <span>READ MORE </span>
                    <span>
                      <FaArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <LinkButton path="blogs-and-media" text="View All" />
    </Fragment>
  );
};

export default Blogs;
