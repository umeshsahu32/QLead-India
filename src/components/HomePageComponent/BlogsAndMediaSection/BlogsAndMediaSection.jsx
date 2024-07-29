import React, { Fragment } from "react";
import image1 from "../../../assets/images/Blogs/media-front-1.png";
import image2 from "../../../assets/images/Blogs/media-front-2.jpg";
import image3 from "../../../assets/images/Blogs/media-front-3.jpeg";
import styles from "./BlogsAndMediaSection.module.css";
import SectionHeading from "../../SectionHeading/SectionHeading";
import LinkButton from "../../Buttons/LinkButton";

const BlogData = [
  {
    id: 1,
    title:
      "AOB India – The Most Reliable Sales Outsourcing Partner For Any Business",
    description:
      "AOB India is a unique sales outsourcing company, having presence across India, that cannot only recruit, train, deploy, manage and sell on your behalf, but also help you in collecting the payment.",
    image: image1,
    link: "https://economictimes.indiatimes.com/aob-india-the-most-reliable-sales-outsourcing-partner-for-any-business/articleshow/76499205.cms?from=mdr",
    platform: "Economics Times",
    date: "January 2024",
  },
  {
    id: 2,
    title:
      "AOB INDIA: A PATHBREAKING INITIATIVE, EFFICIENTLY DELIVERING OUTSOURCING SERVICE IN SALES",
    description:
      "India’s first Sales Outsourcing Agency, AOB India is a noble venture of Xanthippe Creations. It is committed to contribute in the growth story of India, generate employment opportunities,driving growth and empowering the business associates, employees,partners and the customers.",
    image: image2,
    link: "https://primeview.co/aob-india-a-pathbreaking-initiative-efficiently-delivering-outsourcing-service-in-sales/",
    platform: "Primeview",
    date: "February 2024",
  },
  {
    id: 3,
    title:
      "HERE’S HOW THIS SALES OUTSOURCING AGENCY IS BECOMING THE MOST RELIABLE PARTNER FOR STARTUPS",
    description:
      " Early-stage startups often have scarce resources, most of which are earmarked for R&D, prototyping or driving innovation, which means reaching out to consumers and working out a sales strategy is something that startups struggle with. It has always been a pain area for them.",
    image: image3,
    link: "https://yourstory.com/2020/07/sales-outsourcing-reliable-startups",
    platform: "Yourstory",
    date: "March 2024",
  },
];

const BlogCard = ({ image, date, title, platform, link }) => (
  <div className={styles.blogPost}>
    <div className={styles.imageWrapper}>
      <img src={image} alt={title} className={styles.image} />
      <span className={styles.date}>{date}</span>
    </div>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.meta}>
      <span className={styles.category}>{platform}</span>
    </div>
    <a href={link} className={styles.readMore}>
      Read More →
    </a>
  </div>
);

const BlogsAndMediaSection = () => {
  return (
    <Fragment>
      <SectionHeading heading="Blogs & Media" />
      <div className={styles.blogContainer}>
        {BlogData.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
      <LinkButton path="blogs-and-media" text="View All" />
    </Fragment>
  );
};

export default BlogsAndMediaSection;
