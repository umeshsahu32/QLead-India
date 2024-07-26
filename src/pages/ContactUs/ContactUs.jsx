import React, { Fragment, useEffect } from "react";
import styles from "./ContactUs.module.css";
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
} from "react-icons/io5";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { useLocation } from "react-router-dom";

const ContactInfo = ({ icon, title, content, location }) => (
  <div className={styles.infoCard}>
    <div className={styles.iconWrapper}>{icon}</div>
    <h3>{title}</h3>
    <p>{content}</p>
    <p>{location}</p>
  </div>
);

const address = "79/5,6,7, Capital Building, 7-1-79, Swathi Avenue";

const location = "Ameerpet, Hyderabad, Telangana 500016";

const ContactUs = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <Fragment>
      <SectionHeading heading="Contact Us" />
      <div className={styles.contactContainer}>
        <div className={styles.infoSection}>
          <ContactInfo
            icon={<IoLocationOutline />}
            title="Address"
            content={address}
            location={location}
          />
          <div className={styles.sub_info_section}>
            <ContactInfo
              icon={<IoCallOutline />}
              title="Call Us"
              content="+91 90040-97385"
            />
            <ContactInfo
              icon={<IoMailOutline />}
              title="Email Us"
              content="accounts@aobsales.com"
            />
          </div>
        </div>
        <div className={styles.mapAndFormSection}>
          <div className={styles.mapWrapper}>
            <iframe
              class="position-relative w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.6288648642304!2d78.4496865!3d17.4350259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91002f210abd%3A0x63044ba9acd279ab!2sCorpOne%20BPO!5e0!3m2!1sen!2sin!4v1716489914112!5m2!1sen!2sin"
              frameborder="0"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
              loading="lazy"
            ></iframe>
          </div>
          <form className={styles.contactForm}>
            <div className={styles.formRow}>
              <input type="text" placeholder="Your Name" />
              <input type="number" placeholder="Your Phone" />
            </div>
            <input type="email" placeholder="Your Email" />

            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <button className={styles.submitButton} type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactUs;
