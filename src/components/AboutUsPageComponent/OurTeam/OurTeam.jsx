import React from "react";
import styles from "./OurTeam.module.css";
import SectionHeading from "../../SectionHeading/SectionHeading";
import { TeamData } from "./OurTeamData";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const TeamMember = ({ name, role, image, description, socials }) => (
  <div className={styles.card}>
    <div className={styles.imageContainer}>
      <img src={image} alt={name} className={styles.image} />
    </div>
    <div className={styles.infoContainer}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.role}>{role}</p>
      <div className={styles.separator}></div>
      <p className={styles.description}>{description}</p>
      {/* <div className={styles.socials}>
        {socials.linkedin && (
          <a href={socials.linkedin}>
            <FaLinkedin />
          </a>
        )}
      </div> */}
    </div>
  </div>
);

const OurTeam = () => {
  return (
    <div className={styles.container}>
      <SectionHeading heading="Our Leadership" />
      <div className={styles.teamGrid}>
        {TeamData.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
