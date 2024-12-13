import React, { Fragment } from "react";
import styles from "./Media.module.css";
import { MediaData } from "./Media";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import MediaCard from "./MediaCard";
import { Helmet } from "react-helmet";

const Media = () => {
  return (
    <Fragment>
      <Helmet>
        <title>
          Qlead AI Media - Get Inspired with Insights and Strategies for Lead
          Generation
        </title>
        <meta name="keyword" content="Qlead AI Media" />
        <meta
          name="description"
          content="Discover valuable insights and resources on lead generation, digital marketing, and strategies to drive business growth at Qlead AI Media."
        />
      </Helmet>
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
