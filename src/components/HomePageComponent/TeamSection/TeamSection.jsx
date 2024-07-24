import React, { Fragment } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import styles from "./TeamSection.module.css";
import SectionHeading from "../../SectionHeading/SectionHeading";
import team1 from "../../../assets/images/team/team-1.jpeg";
import team2 from "../../../assets/images/team/team-2.jpg";
import team3 from "../../../assets/images/team/team-3.jpg";
import team4 from "../../../assets/images/team/team-4.jpg";
import LinkButton from "../../Buttons/LinkButton";

const teamMembers = [
  {
    name: "Vijay Pandey",
    role: "AI - Chief Mentor & Angel Investor",
    image: team1,
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Dr. Praveen Kumar",
    role: "Founder & Chief Sales Architect",
    image: team2,
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "David Appaswamy",
    role: "Digital Transformation Consultant",
    image: team3,
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Christine Skopec",
    role: "Financial Modeling Consultant",
    image: team4,
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

const TeamsCard = ({ name, role, image, socials }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardName}>{name}</h3>
        <p className={styles.cardRole}>{role}</p>
        <div className={styles.socialIcons}>
          {/* <a href={socials?.facebook} className={styles.icon}>
            <FaFacebookF />
          </a>
          <a href={socials?.instagram} className={styles.icon}>
            <FaInstagram />
          </a> */}
          <a href={socials?.linkedin} className={styles.icon}>
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <Fragment>
      <SectionHeading heading="Our Leadership" />
      <div className={styles.team_container}>
        {teamMembers.map((member, index) => (
          <TeamsCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
            socials={member.socials}
          />
        ))}
      </div>
      <LinkButton path="about-us" text="View All" />
    </Fragment>
  );
};

export default TeamSection;
