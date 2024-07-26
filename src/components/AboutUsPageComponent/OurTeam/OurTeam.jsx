import React from "react";
import styles from "./OurTeam.module.css";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import team1 from "../../../assets/images/team/team-1.jpeg";
import team2 from "../../../assets/images/team/team-2.jpg";
import team3 from "../../../assets/images/team/team-3.jpg";
import team4 from "../../../assets/images/team/team-4.jpg";
import team5 from "../../../assets/images/team/team-5.jpeg";
import team6 from "../../../assets/images/team/team-6.jpeg";
import SectionHeading from "../../SectionHeading/SectionHeading";

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
      <div className={styles.socials}>
        {socials.linkedin && (
          <a href={socials.linkedin}>
            <FaLinkedin />
          </a>
        )}
      </div>
    </div>
  </div>
);

const OurTeam = () => {
  const team = [
    {
      id: 1,
      name: "Vijay Pandey",
      role: "AI - Chief Mentor & Angel Investor",
      image: team1,
      description:
        "Vijay Pandey, an IIT Kanpur alumnus with more than three decades of leadership experience, serves as the Chief Mentor & Angel Investor at AOB India. His prestigious career includes roles as former President of Purvankara Group and CEO of Essel Group. Vijay's deep expertise and visionary leadership are instrumental in mentoring the team and strategically propelling AOB India towards groundbreaking futures.",
      socials: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 2,
      name: "Dr. Praveen Kumar",
      role: "Founder & Chief Sales Architect",
      image: team2,
      description:
        "Dr. Praveen Kumar brings over 20 years of profound expertise in global sales roles at notable companies such as DuPont, GSK, and P&G. An engineering graduate from Bannariamman Institute of Technology, with an MBA from PSG Institute of Management and a Ph.D. in Artificial Intelligence from the University of Kosin, Dr. Kumar is a venerated leader in transforming sales strategies through innovative approaches.",
      socials: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 3,
      name: "David Appaswamy",
      role: "Digital Transformation Consultant",
      image: team3,
      description:
        "David Appaswamy, an alumnus of IIM Ahmedabad, has extensive experience in General Management, Business Strategy, Brand & Marketing Management, and Sales. His work includes influential policy development with the International Chamber of Commerce and the Internet Governance Forum. A seasoned speaker, David has shared his insights at global platforms such as WSIS and IGF.",
      socials: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 4,
      name: "Christine Skopec",
      role: "Financial Modeling Consultant",
      image: team4,
      description:
        "Christine Skopec is a skilled digital writer, editor, marketer, and content strategist known for her dedication to clean, organized copy and meeting tight deadlines. Her expertise in crafting compelling financial narratives and strategic content plays a pivotal role in enhancing our company's market presence and client engagement strategies.",
      socials: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 5,
      name: "Chandini Singh",
      role: "AVP - Operations",
      image: team5,
      description:
        "Chandini Singh, an MBA graduate from the Indian School of Business, currently serves as the assistant Vice President of Operations at AOB India. With an illustrious career featuring leadership roles at Reliance, Karvy, and Aegis, Chandini brings unparalleled expertise in customer journey mapping. Her strategic insights and innovative approaches are integral to enhancing operational efficiencies and customer experiences at AOB India.",
      socials: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 6,
      name: "Ritu Pusti",
      role: "AI - Digital Marketing Architect",
      image: team6,
      description:
        "Ritu Pusti, an esteemed alumnus of IIM Kozhikode, currently spearheads AI-driven digital marketing strategies as our Digital Marketing Architect. Her illustrious career includes roles as the former CMO of WeHouse and Head of Customer Support at Amazon. Ritu's extensive experience and profound knowledge in digital marketing campaigns are propelled by advanced AI technologies, ensuring innovative solutions that drive success.",
      socials: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <div className={styles.container}>
      <SectionHeading heading="Our Leadership" />
      <div className={styles.teamGrid}>
        {team.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
