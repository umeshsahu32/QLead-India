import React from "react";
import styles from "./BlogText.module.css";

const BlogText = ({ blogDetails }) => {
  return (
    <div>
      {blogDetails?.content?.map((block, index) => {
        switch (block.type) {
          case "heading-2":
            return (
              <h2 className={styles.heading2} key={index}>
                {block.text}
              </h2>
            );
          case "paragraph":
            return (
              <p className={styles.paragraph} key={index}>
                {block.text}
              </p>
            );
          case "image":
            return (
              <img
                src={block.img}
                alt={block.title}
                className={styles.imageBlock}
                key={index}
              />
            );
          case "bullet":
            return (
              <ul key={index} className={styles.bulletList}>
                {block?.items.map((item, idx) => (
                  <li key={idx} className={styles.bulletItem}>
                    {item}
                  </li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default BlogText;
