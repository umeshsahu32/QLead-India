import React, { Fragment } from "react";
import styles from "./AudienceGeneration.module.css";
import audienceGenerationImage from "../../../assets/images/Services/service-3.png";
import SectionHeading from "../../SectionHeading/SectionHeading";
import KeyFeatureCard from "../KeyFeatureCard/KeyFeatureCard";
import OfferCard from "../OfferCard/OfferCard";
import ServiceHeader from "../ServiceHeader/ServiceHeader";

const AudienceGeneration = () => {
  const keyFeatureData = [
    {
      id: 1,
      img: "https://img.freepik.com/free-vector/ai-technology-microchip-background-vector-digital-transformation-concept_53876-117808.jpg",
      title: "Audience Profiling",
      description:
        "Our AI models segment audiences based on behavior, interests, and purchasing readiness.",
    },
    {
      id: 2,
      img: "https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4=",
      title: "High-Engagement Outcomes",
      description:
        "Tailored messages and exclusive audience insights maximize participation and response rates.",
    },
    {
      id: 3,
      img: "https://myexeed.com/wp-content/uploads/2023/10/iStock-1462024468-scaled.jpg",
      title: "Data-Driven Audience Insights",
      description:
        "Post-event or campaign insights help refine future targeting for sustained engagement.",
    },
  ];

  const offerData = [
    {
      id: 1,
      img: "https://v-count.com/wp-content/uploads/2022/10/demographic-analysis-2.jpg",
      title: "Demographic Detail",
      description:
        "Comprehensive demographic data for precise audience targeting.",
      link: "/contact-us",
    },
    {
      id: 2,
      img: "https://droplr.com/wp-content/uploads/2020/09/sound-waves-motion-sound-wave-abstract-background-vector-id1176100626-1024x400.jpg",
      title: "Voice Recording",
      description:
        "Authentic, recorded conversations confirm each prospect’s interest.",
      link: "/contact-us",
    },
    {
      id: 3,
      img: "https://media.licdn.com/dms/image/D4D12AQFYcd1UAtf9WA/article-cover_image-shrink_720_1280/0/1722961158362?e=2147483647&v=beta&t=hnBJakO053oHKQFO_sCMYEilXbKNsWEow1vccgBE5q4",
      title: "Voice Transcript",
      description:
        "Full conversation transcripts aid in understanding prospect motivations  .",
      link: "/contact-us",
    },
    {
      id: 4,
      img: "https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FFinancial_ca6672ebee.png&w=444&q=90",
      title: "Harmonic Analysis",
      description:
        "Advanced analysis evaluates sentiment and readiness for engagement, enhancing your event’s success..",
      link: "/contact-us",
    },
  ];

  return (
    <Fragment>
      <ServiceHeader
        primary="Reach the Right Audience"
        secondary="Tailored, Verified, and Ready to Engage"
        img={audienceGenerationImage}
        alt="Qualified Meeting  Generation"
        description="With Qualified Audience Generation, QLead helps you identify and engage groups of prospects who fit your precise customer demographics. Whether for webinars, events, or special promotions, our service gathers audiences with strong engagement potential. Using AI-driven data mining and psychographic profiling, we ensure that each audience segment is primed for relevance, yielding higher conversion rates and better engagement metrics."
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
