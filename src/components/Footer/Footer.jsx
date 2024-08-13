import React, { Fragment } from "react";
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
      path: "https://www.linkedin.com/in/dr-praveen-kumar",
      icon: <FaLinkedin />,
    },
    {
      id: 5,
      path: "https://theaobway.blogspot.com",
      icon: <FaBlogger />,
    },
    {
      id: 6,
      path: "https://kosin.academia.edu/PraveenKumar",
      icon: <FaA />,
    },
  ];

  return (
    <Fragment>
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
                <Link
                  to={item.path}
                  key={item.id}
                  className={styles.socialIcon}
                >
                  {item.icon}
                </Link>
              );
            })}
          </div>
        </div>

        <div className={styles.footerColumn}>
          <h4>Useful Links</h4>
          <Link to="/" className={styles.footerLink}>
            Home
          </Link>
          <br />
          <Link to="/about-us" className={styles.footerLink}>
            About us
          </Link>{" "}
          <br />
          <Link to="/our-packages" className={styles.footerLink}>
            Packages
          </Link>{" "}
          <br />
          <Link to="/terms-and-conditions" className={styles.footerLink}>
            Terms of service
          </Link>{" "}
          <br />
          <Link to="/privacy-policy" className={styles.footerLink}>
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
          <Link to="/faqs" className={styles.footerLink}>
            FAQs
          </Link>{" "}
          <br />
          <Link to="/success-stories" className={styles.footerLink}>
            Success Stories
          </Link>{" "}
          <br />
          <Link to="/blogs-and-media" className={styles.footerLink}>
            Blogs & Media
          </Link>{" "}
          <br />
          <Link to="/contact-us" className={styles.footerLink}>
            Contact Us
          </Link>{" "}
          <br />
          <Link to="https://aobsales.com/" className={styles.footerLink}>
            AOB India
          </Link>
        </div>
      </footer>
      <section className={styles.copyright_section}>
        <span>Copyright &copy; 2024 Reserved</span>
      </section>
    </Fragment>
  );
};

export default Footer;
