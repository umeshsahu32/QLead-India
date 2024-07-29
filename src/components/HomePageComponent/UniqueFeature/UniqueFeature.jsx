import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./UniqueFeature.module.css";
import banner01 from "../../../assets/images/feature/banner01.jpg";
import banner02 from "../../../assets/images/feature/banner02.jpg";
import banner03 from "../../../assets/images/feature/banner03.jpg";

import { Autoplay } from "swiper/modules";

const data = [
  {
    id: 1,
    image: banner01,
    heading: "Higher Conversion Rates",
    paragraph: "Leverage AI to generate highly qualified leads",
  },
  {
    id: 2,
    image: banner02,
    heading: "Pre-Qualified Prospects",
    paragraph: "Eliminate the need for initial screening",
  },
  {
    id: 3,
    image: banner03,
    heading: "A Decade of Experience",
    paragraph:
      "Over 10 years of experience in sales outsourcing and lead generation.",
  },
];

const UniqueFeature = () => {
  return (
    <div className={styles.section13}>
      <Swiper
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className={styles.slide}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className={styles.overlay}>
                <h2>{item.heading}</h2>
                <p>{item.paragraph}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UniqueFeature;
