import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

import styles from "./AudienceGeneration.module.css";
import audienceGenerationImage from "../../../assets/images/Services/service-3.png";
import SectionHeading from "../../SectionHeading/SectionHeading";
import KeyFeatureCard from "../KeyFeatureCard/KeyFeatureCard";
import OfferCard from "../OfferCard/OfferCard";
import ServiceHeader from "../ServiceHeader/ServiceHeader";

import AudienceProfiling from "../../../assets/images/Services/audience/audience-profiling.jpg";
import HighEngagement from "../../../assets/images/Services/audience/High-Engagement.jpg";
import DataDrivenAudience from "../../../assets/images/Services/audience/Data-Driven-Audience.jpg";
import Demographic from "../../../assets/images/Services/audience/Demographic-Detail.jpg";
import VoiceRecording from "../../../assets/images/Services/audience/Voice-Recording.jpg";
import VoiceTranscript from "../../../assets/images/Services/audience/Voice-Transcript.jpg";
import Harmonic from "../../../assets/images/Services/audience/Harmonic-Analysis.jpg";

import LeadProcess from "../LeadProcess/LeadProcess";
import LeadScoring from "../LeadScoring/LeadScoring";
import KeyFeatures from "../KeyFeatures/KeyFeatures";

const AudienceGeneration = () => {
  const keyFeatureData = [
    {
      id: 1,
      img: AudienceProfiling,
      title: "Audience Profiling",
      description:
        "Our AI models segment audiences based on behavior, interests, and purchasing readiness.",
    },
    {
      id: 2,
      img: HighEngagement,
      title: "High-Engagement Outcomes",
      description:
        "Tailored messages and exclusive audience insights maximize participation and response rates.",
    },
    {
      id: 3,
      img: DataDrivenAudience,
      title: "Data-Driven Audience Insights",
      description:
        "Post-event or campaign insights help refine future targeting for sustained engagement.",
    },
  ];

  const offerData = [
    {
      id: 1,
      img: Demographic,
      title: "Demographic Detail",
      description:
        "Comprehensive demographic data for precise audience targeting.",
      link: "/contact-us",
    },
    {
      id: 2,
      img: VoiceRecording,
      title: "Voice Recording",
      description:
        "Authentic, recorded conversations confirm each prospect’s interest.",
      link: "/contact-us",
    },
    {
      id: 3,
      img: VoiceTranscript,
      title: "Voice Transcript",
      description:
        "Full conversation transcripts aid in understanding prospect motivations  .",
      link: "/contact-us",
    },
    {
      id: 4,
      img: Harmonic,
      title: "Harmonic Analysis",
      description:
        "Advanced analysis evaluates sentiment and readiness for engagement, enhancing your event’s success..",
      link: "/contact-us",
    },
  ];

  return (
    <Fragment>
      <Helmet>
        <title>Qlead AI: Drive Growth with Qualified Audience Generation</title>
        <meta name="keyword" content="Qualified Audience Generation" />
        <meta
          name="description"
          content="Unlock the power of qualified audience generation with Qlead AI. We help businesses in India connect with the right prospects, driving targeted growth and engagement."
        />
      </Helmet>
      <ServiceHeader
        primary="Reach the Right Audience"
        secondary="Tailored, Verified, and Ready to Engage"
        img={audienceGenerationImage}
        alt="Qualified Meeting  Generation"
        description="With Qualified Audience Generation, QLead helps you identify and engage groups of prospects who fit your precise customer demographics. Whether for webinars, events, or special promotions, our service gathers audiences with strong engagement potential. Using AI-driven data mining and psychographic profiling, we ensure that each audience segment is primed for relevance, yielding higher conversion rates and better engagement metrics."
      />

      <LeadProcess />
      <LeadScoring />
      <KeyFeatures />

      <section className={styles.key_feature_section}>
        <SectionHeading heading="Key Highlights" />
        <div className={styles.key_feature_cards}>
          {keyFeatureData.map((item) => {
            return (
              <KeyFeatureCard
                key={item.id}
                src={item.img}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </section>

      <section className={styles.offer_section}>
        <SectionHeading para="Each audience prospect includes" />
        <div className={styles.offer_section_cards}>
          {offerData.map((item) => {
            return (
              <OfferCard
                key={item.id}
                img={item.img}
                title={item.title}
                desc={item.description}
                link={item.link}
              />
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default AudienceGeneration;
