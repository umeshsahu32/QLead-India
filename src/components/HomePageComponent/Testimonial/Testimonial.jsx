import React from "react";
import { Fragment } from "react";
import SectionHeading from "../../SectionHeading/SectionHeading";
import styles from "./Testimonial.module.css";
import LinkButton from "../../Buttons/LinkButton";

const Testimonial = () => {
  const arr = [
    "https://www.youtube.com/embed/nbXgHAzUWB0?si=Oxqk0bArWFQrMIRb",
    "https://www.youtube.com/embed/YykjpeuMNEk?si=HltyV7k7IVZl1OWE",
    "https://www.youtube.com/embed/JGwWNGJdvx8?si=6qOUYYgYh8ZvHate",
  ];

  return (
    <Fragment>
      <SectionHeading heading="Customer Testimonials" />
      <div className={styles.container}>
        {arr.map((item, index) => {
          return (
            <iframe
              className={styles.youtube_video}
              src={item}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          );
        })}
      </div>
      <LinkButton path="#" text="View All" />
    </Fragment>
  );
};

export default Testimonial;
