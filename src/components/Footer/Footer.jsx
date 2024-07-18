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
        <h4>HeroBiz</h4>
        <p>
          A108 Adam Street
          <br />
          New York, NY 535022
          <br />
          <br />
          <strong>Phone:</strong> +1 5589 55488 55
          <br />
          <strong>Email:</strong> info@example.com
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
          Services
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
          Web Design
        </Link>{" "}
        <br />
        <Link to="/web-development" className={styles.footerLink}>
          Web Development
        </Link>{" "}
        <br />
        <Link to="/product-management" className={styles.footerLink}>
          Product Management
        </Link>{" "}
        <br />
        <Link to="/marketing" className={styles.footerLink}>
          Marketing
        </Link>{" "}
        <br />
        <Link to="/graphic-design" className={styles.footerLink}>
          Graphic Design
        </Link>
      </div>

      <div className={styles.footerColumn}>
        <h4>Hic soluta</h4>
        <Link to="/service1" className={styles.footerLink}>
          Molestiae accusamus iure
        </Link>{" "}
        <br />
        <Link to="/service2" className={styles.footerLink}>
          Excepturi dignissimos
        </Link>{" "}
        <br />
        <Link to="/service3" className={styles.footerLink}>
          Suscipit distinctio
        </Link>{" "}
        <br />
        <Link to="/service4" className={styles.footerLink}>
          Dilecta
        </Link>{" "}
        <br />
        <Link to="/service5" className={styles.footerLink}>
          Sit quas consectetur
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
