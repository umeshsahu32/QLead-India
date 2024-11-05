import React, { Fragment } from "react";
import styles from "./LeadGeneration.module.css";
import leadGenerationImage from "../../../assets/images/Services/service-1.png";
import SectionHeading from "../../SectionHeading/SectionHeading";
import KeyFeatureCard from "../KeyFeatureCard/KeyFeatureCard";
import OfferCard from "../OfferCard/OfferCard";
import ServiceHeader from "../ServiceHeader/ServiceHeader";

const LeadGeneration = () => {
  const keyFeatureData = [
    {
      id: 1,
      img: "https://img.freepik.com/free-vector/ai-technology-microchip-background-vector-digital-transformation-concept_53876-117808.jpg",
      title: "AI-Driven Targeting",
      description:
        "Our AI tools refine and focus lead acquisition based on real-time behavior and historical data.",
    },
    {
      id: 2,
      img: "https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4=",
      title: "Lead Qualification Process",
      description:
        "Each lead undergoes rigorous qualification steps to ensure alignment with your sales objectives.",
    },
    {
      id: 3,
      img: "https://myexeed.com/wp-content/uploads/2023/10/iStock-1462024468-scaled.jpg",
      title: "Customizable to Your Market Needs",
      description:
        "Leads are tailored to fit your ideal customer profile, making each connection impactful.",
    },
  ];

  const offerData = [
    {
      id: 1,
      img: "https://v-count.com/wp-content/uploads/2022/10/demographic-analysis-2.jpg",
      title: "Demographic Detail",
      description:
        "Each lead is matched to your ideal customer profile, providing critical information like age, location, and profession.",
      link: "/contact-us",
    },
    {
      id: 2,
      img: "https://droplr.com/wp-content/uploads/2020/09/sound-waves-motion-sound-wave-abstract-background-vector-id1176100626-1024x400.jpg",
      title: "Voice Recording",
      description:
        "Engage with leads confidently, backed by verified, recorded interactions for transparency.",
      link: "/contact-us",
    },
    {
      id: 3,
      img: "https://media.licdn.com/dms/image/D4D12AQFYcd1UAtf9WA/article-cover_image-shrink_720_1280/0/1722961158362?e=2147483647&v=beta&t=hnBJakO053oHKQFO_sCMYEilXbKNsWEow1vccgBE5q4",
      title: "Voice Transcript",
      description:
        "Review detailed transcripts of each call for a complete understanding of the prospect’s needs and questions.",
      link: "/contact-us",
    },
    {
      id: 4,
      img: "https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FFinancial_ca6672ebee.png&w=444&q=90",
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
