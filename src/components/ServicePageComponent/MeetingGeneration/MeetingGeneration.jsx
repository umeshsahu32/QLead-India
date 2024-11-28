import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import styles from "./MeetingGeneration.module.css";
import meetingGenerationImage from "../../../assets/images/Services/service-2.png";
import SectionHeading from "../../SectionHeading/SectionHeading";
import KeyFeatureCard from "../KeyFeatureCard/KeyFeatureCard";
import OfferCard from "../OfferCard/OfferCard";
import ServiceHeader from "../ServiceHeader/ServiceHeader";

import IntentVerification from "../../../assets/images/Services/meeting/Intent-Verification.jpg";
import Scheduling from "../../../assets/images/Services/meeting/Streamlined-Scheduling.jpg";
import AiPowered from "../../../assets/images/Services/meeting/AI-Powered.jpg";
import Demographic from "../../../assets/images/Services/meeting/Demographic-Detail.jpg";
import VoiceRecording from "../../../assets/images/Services/meeting/Voice-Recording.jpg";
import VoiceTranscript from "../../../assets/images/Services/meeting/Voice-Transcript.jpg";
import Harmonic from "../../../assets/images/Services/meeting/Harmonic-Analysis.jpg";

import LeadProcess from "../LeadProcess/LeadProcess";
import LeadScoring from "../LeadScoring/LeadScoring";
import KeyFeatures from "../KeyFeatures/KeyFeatures";

const AudienceGeneration = () => {
  const keyFeatureData = [
    {
      id: 1,
      img: IntentVerification,
      title: "Intent Verification",
      description:
        "Each meeting is arranged with prospects who show clear buying signals, aligning with your business.",
    },
    {
      id: 2,
      img: Scheduling,
      title: "Streamlined Scheduling",
      description:
        "Our platform integrates seamlessly with your calendar, ensuring efficient setup and follow-up reminders.",
    },
    {
      id: 3,
      img: AiPowered,
      title: "AI-Powered Insight Reports",
      description:
        "Gain deeper insights with pre-meeting profiles, including needs, preferences, and behavioral analysis.",
    },
  ];

  const offerData = [
    {
      id: 1,
      img: Demographic,
      title: "Demographic Detail",
      description: "Accurate demographic data for targeted engagement.",
      link: "/contact-us",
    },
    {
      id: 2,
      img: VoiceRecording,
      title: "Voice Recording",
      description:
        "Verified conversations with recorded interactions add transparency and insight.",
      link: "/contact-us",
    },
    {
      id: 3,
      img: VoiceTranscript,
      title: "Voice Transcript",
      description:
        "Access full call transcripts to prepare for meaningful discussions.",
      link: "/contact-us",
    },
    {
      id: 4,
      img: Harmonic,
      title: "Harmonic Analysis",
      description:
        "Predictive tone analysis highlights engagement levels, improving meeting productivity and outcomes.",
      link: "/contact-us",
    },
  ];

  return (
    <Fragment>
      <Helmet>
        <title>
          Qualified Meeting Generation Services by Qlead AI – Boost Sales Today
        </title>
        <meta name="keyword" content="Qualified Meeting Generation" />
        <meta
          name="description"
          content="Transform your sales process with Qlead AI’s Qualified Meeting Generation service. We connect you with high-potential prospects, ensuring every meeting counts!"
        />
      </Helmet>
      <ServiceHeader
        primary="Set Up Meetings That Matter "
        secondary="High-Intent, Verified Prospects"
        img={meetingGenerationImage}
        alt="Qualified Meeting  Generation"
        description="QLead’s Qualified Meeting Generation service bridges the gap between interest and engagement. We arrange meetings with prospects already vetted for relevancy and intent, ensuring your time is spent on prospects ready to discuss solutions. By integrating predictive scoring and sentiment analysis, we ensure that each meeting represents a genuine opportunity, optimized for engagement."
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
        <SectionHeading para="Each meeting-ready lead includes" />
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
