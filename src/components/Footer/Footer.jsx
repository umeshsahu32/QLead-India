import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaBlogger,
} from "react-icons/fa";
import { FaA } from "react-icons/fa6";

const Footer = () => {
  const SocialLink = [
    {
      id: 1,
      path: "#",
      icon: <FaFacebook />,
    },
    {
      id: 2,
      path: "#",
      icon: <FaInstagram />,
    },
    {
      id: 3,
      path: "#",
      icon: <FaYoutube />,
    },
    {
      id: 4,
      path: "#",
      icon: <FaLinkedin />,
    },
    {
      id: 5,
      path: "#",
      icon: <FaBlogger />,
    },
    {
      id: 6,
      path: "#",
      icon: <FaA />,
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerColumn}>
        <h4>Q-Lead</h4>
        <p>
          79/5,6,7, Capital Building, 7-1-79,
          <br />
          Swathi Avenue, Ameerpet,
          <br />
          Hyderabad, Telangana 500016
          <br />
          <br />
          <strong>Phone:</strong> +91-9004097385
          <br />
          <strong>Email:</strong> accounts@aobsales.com
          <br />
        </p>
        <div className={styles.socialLinks}>
          {SocialLink.map((item) => {
            return (
              <Link to={item.path} key={item.id} className={styles.socialIcon}>
                {item.icon}
              </Link>
            );
          })}
        </div>
      </div>

      <div className={styles.footerColumn}>
        <h4>Useful Links</h4>
        <Link to="/home" className={styles.footerLink}>
          Home
        </Link>
        <br />
        <Link to="/about" className={styles.footerLink}>
          About us
        </Link>{" "}
        <br />
        <Link to="/services" className={styles.footerLink}>
          Packages
        </Link>{" "}
        <br />
        <Link to="/terms" className={styles.footerLink}>
          Terms of service
        </Link>{" "}
        <br />
        <Link to="/privacy" className={styles.footerLink}>
          Privacy policy
        </Link>
      </div>

      <div className={styles.footerColumn}>
        <h4>Our Services</h4>
        <Link to="/web-design" className={styles.footerLink}>
          Service 1
        </Link>{" "}
        <br />
        <Link to="/web-development" className={styles.footerLink}>
          Service 2
        </Link>{" "}
        <br />
        <Link to="/product-management" className={styles.footerLink}>
          Service 3
        </Link>{" "}
        <br />
        <Link to="/marketing" className={styles.footerLink}>
          Service 4
        </Link>{" "}
        <br />
        <Link to="/graphic-design" className={styles.footerLink}>
          Service 5
        </Link>
      </div>

      <div className={styles.footerColumn}>
        <h4>Know More</h4>
        <Link to="/service1" className={styles.footerLink}>
          FAQs
        </Link>{" "}
        <br />
        <Link to="/service2" className={styles.footerLink}>
          Success Stories
        </Link>{" "}
        <br />
        <Link to="/service3" className={styles.footerLink}>
          Blogs & Media
        </Link>{" "}
        <br />
        <Link to="/service4" className={styles.footerLink}>
          Contact Us
        </Link>{" "}
        <br />
        <Link to="/service5" className={styles.footerLink}>
          AOB India
        </Link>
      </div>

      {/* <div className={styles.footerColumn}>
        <h4>Nobis illum</h4>
        <Link to="/item1" className={styles.footerLink}>
          Ipsam
        </Link>{" "}
        <br />
        <Link to="/item2" className={styles.footerLink}>
          Laudantium dolorum
        </Link>{" "}
        <br />
        <Link to="/item3" className={styles.footerLink}>
          Dinera
        </Link>{" "}
        <br />
        <Link to="/item4" className={styles.footerLink}>
          Trodelas
        </Link>{" "}
        <br />
        <Link to="/item5" className={styles.footerLink}>
          Flexo
        </Link>
      </div> */}
    </footer>
  );
};

export default Footer;
