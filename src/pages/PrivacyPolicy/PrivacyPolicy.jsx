import React, { Fragment } from "react";
import styles from "./PrivacyPolicy.module.css";
import { Link } from "react-router-dom";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import useMetaTags from "../../hooks/useMetaTags";

const PrivacyPolicy = () => {
  useMetaTags({
    title: "Privacy Policy | QLead",
    description:
      "Learn about our commitment to protecting your privacy. Our Privacy Policy outlines how we collect, use, and safeguard your personal information.",
    keywords: "privacy policy, data protection",
  });
  return (
    <Fragment>
      <section className={styles.sectionContainer}>
        <div className={styles.terms_heading}>
          <SectionHeading
            heading="Privacy Policy"
            para='QLead, a brand of AOB Sales Enterprise ("we," "our," "us"), respects your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website www.qlead.ai and use our services.'
          />
        </div>

        <div className={styles.terms_section}>
          <h5>1. Information We Collect</h5>
          <h6>1.1 Personal Information</h6>
          <p>
            We may collect personal information that you voluntarily provide to
            us when you register on our website, fill out forms, or communicate
            with us. This information may include your name, email address,
            phone number, company name, and other relevant details.
          </p>
          <h6>1.2 Automatically Collected Information</h6>
          <p>
            When you access our website, we may automatically collect certain
            information about your device, browsing actions, and usage patterns.
            This may include your IP address, browser type, operating system,
            access times, and the pages you have viewed directly before and
            after accessing the website.
          </p>
          <h6>1.3 Cookies and Similar Technologies</h6>
          <p>
            We may use cookies, web beacons, and other tracking technologies to
            collect information about your interactions with our website and to
            enhance your experience. You can choose to disable cookies through
            your browser settings, but this may affect your ability to use
            certain features of our website.
          </p>
        </div>

        <div className={styles.terms_section}>
          <h5>2. How We Use Your Information</h5>
          <h6>2.1 To Provide and Manage Services</h6>
          <p>
            We use your personal information to provide, manage, and improve our
            lead generation services. This includes processing your requests,
            managing your account, and delivering qualified leads to you.
          </p>
          <h6>2.2 To Communicate with You</h6>
          <p>
            We may use your contact information to send you updates, marketing
            communications, and other information related to our services. You
            can opt-out of receiving marketing communications at any time.
          </p>
          <h6>2.3 To Improve Our Services</h6>
          <p>
            We may use the information we collect to analyze usage trends,
            monitor the performance of our website, and improve the
            effectiveness of our services.
          </p>
          <h6>2.4 To Ensure Compliance</h6>
          <p>
            We use your information to ensure compliance with our legal
            obligations, such as maintaining the confidentiality of your data
            and adhering to relevant laws and regulations.
          </p>
        </div>

        <div className={styles.terms_section}>
          <h5>3. Data Security</h5>
          <h6>3.1 Protection Measures</h6>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information from unauthorized access,
            alteration, disclosure, or destruction. Our data servers are located
            in India and are secured in accordance with the guidelines of the
            Government of India.
          </p>
          <h6>3.2 Restricted Access</h6>
          <p>
            Access to your personal information is restricted to authorized
            personnel who require it to perform their job functions. We take all
            reasonable steps to ensure that your data is treated securely and in
            accordance with this Privacy Policy.
          </p>
        </div>

        <div className={styles.terms_section}>
          <h5>4. Data Sharing and Disclosure</h5>
          <h6>4.1 Third-Party Service Providers</h6>
          <p>
            We may share your information with third-party service providers who
            assist us in providing our services, such as email marketing
            platforms, tele-sales executives, and digital marketing experts.
            These third parties are contractually obligated to keep your
            information confidential and use it only for the purposes for which
            it was disclosed.
          </p>
          <h6>4.2 Legal Requirements</h6>
          <p>
            We may disclose your information if required to do so by law or in
            response to valid requests by public authorities (e.g., a court or
            government agency).
          </p>
          <h6>4.3 Business Transfers</h6>
          <p>
            We may disclose your information if required to do so by law or in
            In the event of a merger, acquisition, or sale of all or a portion
            of our assets, your personal information may be transferred as part
            of that transaction.
          </p>
        </div>
        <div className={styles.terms_section}>
          <h5>5. Data Retention</h5>
          <p>
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy or as required
            by law. Once your data is no longer needed, we will securely delete
            or anonymize it.
          </p>
        </div>

        <div className={styles.terms_section}>
          <h5> 6. Your Rights</h5>
          <h6>6.1 Access and Correction</h6>
          <p>
            You have the right to access and correct any personal information we
            hold about you. If you wish to update or correct your data, please
            contact us.
          </p>
          <h6>6.2 Opt-Out</h6>
          <p>
            You have the right to opt-out of receiving marketing communications
            from us at any time. To do so, please follow the unsubscribe
            instructions in the emails you receive or contact us directly.
          </p>
        </div>

        <div className={styles.terms_section}>
          <h5>7. No Sale of Data</h5>
          <p>
            QLead does not sell your personal information to any third parties.
            We use your data solely to provide our services and improve your
            experience.
          </p>
        </div>

        <div className={styles.terms_section}>
          <h5>8. Changes to This Privacy Policy</h5>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for other operational, legal, or
            regulatory reasons. We will notify you of any significant changes by
            posting the new Privacy Policy on our website and updating the
            effective date.
          </p>
        </div>

        <div className={styles.terms_section}>
          <h5>9. Contact Us</h5>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at{" "}
            <a href="mailto:digital@qlead.ai">digital@qlead.ai</a>
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default PrivacyPolicy;
