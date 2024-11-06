import React, { Fragment } from "react";
import styles from "./LeadGeneration.module.css";
import leadGenerationImage from "../../../assets/images/Services/service-1.png";
import SectionHeading from "../../SectionHeading/SectionHeading";
import KeyFeatureCard from "../KeyFeatureCard/KeyFeatureCard";
import OfferCard from "../OfferCard/OfferCard";

import ServiceHeader from "../ServiceHeader/ServiceHeader";
import AiDriven from "../../../assets/images/Services/lead/AI-Driven.jpg";
import LeadQualification from "../../../assets/images/Services/lead/Lead-Qualification.jpg";
import Customizable from "../../../assets/images/Services/lead/Customizable.jpg";
import Demographic from "../../../assets/images/Services/lead/Demographic-Detail.jpg";
import VoiceRecording from "../../../assets/images/Services/lead/Voice-Recording.jpg";
import VoiceTranscript from "../../../assets/images/Services/lead/Voice-Transcript.jpg";
import Harmonic from "../../../assets/images/Services/lead/Harmonic-Analysis.jpg";

const LeadGeneration = () => {
  const keyFeatureData = [
    {
      id: 1,
      img: AiDriven,
      title: "AI-Driven Targeting",
      description:
        "Our AI tools refine and focus lead acquisition based on real-time behavior and historical data.",
    },
    {
      id: 2,
      img: LeadQualification,
      title: "Lead Qualification Process",
      description:
        "Each lead undergoes rigorous qualification steps to ensure alignment with your sales objectives.",
    },
    {
      id: 3,
      img: Customizable,
      title: "Customizable to Your Market Needs",
      description:
        "Leads are tailored to fit your ideal customer profile, making each connection impactful.",
    },
  ];

  const offerData = [
    {
      id: 1,
      img: Demographic,
      title: "Demographic Detail",
      description:
        "Each lead is matched to your ideal customer profile, providing critical information like age, location, and profession.",
      link: "/contact-us",
    },
    {
      id: 2,
      img: VoiceRecording,
      title: "Voice Recording",
      description:
        "Engage with leads confidently, backed by verified, recorded interactions for transparency.",
      link: "/contact-us",
    },
    {
      id: 3,
      img: VoiceTranscript,
      title: "Voice Transcript",
      description:
        "Review detailed transcripts of each call for a complete understanding of the prospect’s needs and questions.",
      link: "/contact-us",
    },
    {
      id: 4,
      img: Harmonic,
      title: "Harmonic Analysis",
      description:
        "Our proprietary analysis assesses voice tone and sentiment, ensuring each lead has genuine intent and engagement potential.",
      link: "/contact-us",
    },
  ];

  return (
    <Fragment>
      <ServiceHeader
        primary="Get Leads That Convert"
        secondary="Targeted, Qualified, and Ready for Engagement"
        img={leadGenerationImage}
        alt="Qualified Lead Generation"
        description="QLead's Qualified Lead Generation services focus on delivering
              qualified leads that meet your specific criteria tailored to your
              Sales needs. Using advanced AI and proprietary tools, we analyze
              behavioral data, demographics, and purchasing signals to identify
              prospects with genuine interest. This means you’ll connect with
              potential customers who align perfectly with your product or
              service, reducing wasted time and increasing conversion rates."
      />
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
        <SectionHeading para="Every qualified lead delivered to you includes" />
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

export default LeadGeneration;
