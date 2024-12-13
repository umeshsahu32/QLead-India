import React, { Fragment } from "react";
import styles from "./Media.module.css";
import { FaArrowRight } from "react-icons/fa";

const MediaCard = ({ posts }) => {
  const sortedMediaData = posts.sort((a, b) => {
    // Convert dates to Date objects for comparison
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    // Sort in descending order (most recent first)
    return dateB - dateA;
  });

  return (
    <Fragment>
      <div className={styles.container}>
        {sortedMediaData.map((item, index) => {
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
                <p className={styles.cardDescription}>
                  {item.description.split("e5world").map((part, idx) => (
                    <React.Fragment key={idx}>
                      {part}
                      {idx < item.description.split("e5world").length - 1 && (
                        <span className={styles.noCapitalize}>e5world</span>
                      )}
                    </React.Fragment>
                  ))}
                </p>
                <div className={styles.cardFooter}>
                  <p className={styles.cardDate}>{item.date}</p>
                  {/* <a href={item.link} className={styles.cardLink}>
                    <span>READ MORE </span>
                    <span>
                      <FaArrowRight />
                    </span>
                  </a> */}
                  <a
                    href={item.link}
                    target="_black"
                    className={styles.cardLink}
                  >
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default MediaCard;
