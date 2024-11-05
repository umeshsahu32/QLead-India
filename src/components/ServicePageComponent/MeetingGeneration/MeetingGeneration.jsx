import React, { Fragment } from "react";
import styles from "./MeetingGeneration.module.css";
import meetingGenerationImage from "../../../assets/images/Services/service-2.png";
import SectionHeading from "../../SectionHeading/SectionHeading";
import KeyFeatureCard from "../KeyFeatureCard/KeyFeatureCard";
import OfferCard from "../OfferCard/OfferCard";
import ServiceHeader from "../ServiceHeader/ServiceHeader";

const AudienceGeneration = () => {
  const keyFeatureData = [
    {
      id: 1,
      img: "https://img.freepik.com/free-vector/ai-technology-microchip-background-vector-digital-transformation-concept_53876-117808.jpg",
      title: "Intent Verification",
      description:
        "Each meeting is arranged with prospects who show clear buying signals, aligning with your business offerings.",
    },
    {
      id: 2,
      img: "https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4=",
      title: "Streamlined Scheduling",
      description:
        "Our platform integrates seamlessly with your calendar, ensuring efficient setup and follow-up reminders.",
    },
    {
      id: 3,
      img: "https://myexeed.com/wp-content/uploads/2023/10/iStock-1462024468-scaled.jpg",
      title: "AI-Powered Insight Reports",
      description:
        "Gain deeper insights with pre-meeting profiles, including needs, preferences, and behavioral analysis.",
    },
  ];

  const offerData = [
    {
      id: 1,
      img: "https://v-count.com/wp-content/uploads/2022/10/demographic-analysis-2.jpg",
      title: "Demographic Detail",
      description: "Accurate demographic data for targeted engagement.",
      link: "/contact-us",
    },
    {
      id: 2,
      img: "https://droplr.com/wp-content/uploads/2020/09/sound-waves-motion-sound-wave-abstract-background-vector-id1176100626-1024x400.jpg",
      title: "Voice Recording",
      description:
        "Verified conversations with recorded interactions add transparency and insight.",
      link: "/contact-us",
    },
    {
      id: 3,
      img: "https://media.licdn.com/dms/image/D4D12AQFYcd1UAtf9WA/article-cover_image-shrink_720_1280/0/1722961158362?e=2147483647&v=beta&t=hnBJakO053oHKQFO_sCMYEilXbKNsWEow1vccgBE5q4",
      title: "Voice Transcript",
      description:
        "Access full call transcripts to prepare for meaningful discussions.",
      link: "/contact-us",
    },
    {
      id: 4,
      img: "https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FFinancial_ca6672ebee.png&w=444&q=90",
      title: "Harmonic Analysis",
      description:
        "Predictive tone analysis highlights engagement levels, improving meeting productivity and outcomes.",
      link: "/contact-us",
    },
  ];

  return (
    <Fragment>
      <ServiceHeader
        primary="Set Up Meetings That Matter "
        secondary="High-Intent, Verified Prospects"
        img={meetingGenerationImage}
        alt="Qualified Meeting  Generation"
        description="QLead’s Qualified Meeting Generation service bridges the gap between interest and engagement. We arrange meetings with prospects already vetted for relevancy and intent, ensuring your time is spent on prospects ready to discuss solutions. By integrating predictive scoring and sentiment analysis, we ensure that each meeting represents a genuine opportunity, optimized for engagement."
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
