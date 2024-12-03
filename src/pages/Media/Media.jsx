import React, { Fragment } from "react";
import styles from "./Media.module.css";
import { MediaData } from "./Media";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import MediaCard from "./MediaCard";

const Media = () => {
  return (
    <Fragment>
      <SectionHeading heading="Media" />
      <div className={styles.sectionContainer}>
        <div>
          <MediaCard posts={MediaData} />
        </div>
      </div>
    </Fragment>
  );
};

export default Media;
