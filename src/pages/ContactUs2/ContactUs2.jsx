import React, { Fragment, useState } from "react";
import styles from "./ContactUs2.module.css";
import { AiOutlineDownload } from "react-icons/ai";
import image1 from "../../assets/contact/browser.webp";
import samplePdf from "../../assets/contact/QLead_Corporate_Oct 2024.pdf";
import { FaLongArrowAltRight } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNotification } from "../../components/NotificationToaster/NotificationContext";
import { Helmet } from "react-helmet";

const ContactUs2 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [phone, setPhone] = useState("");
  const [error, setError] = useState();
  const { addNotification } = useNotification();
  const FormValidation = (formData, setError) => {
    let newErrors = {};

    const isValidEmail = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(formData.email);
    };

    function isValidPhoneNumber() {
      const numberRegex = /^\d{12}$/;
      return numberRegex.test(formData.phoneNumber);
    }

    if (!formData?.firstName) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData?.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!isValidPhoneNumber(formData?.phoneNumber)) {
      newErrors.phoneNumber = "Phone number is invalid";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitBtnHandler = async (e) => {
    e.preventDefault();
    formData.phoneNumber = phone;
    const isValid = FormValidation(formData, setError);
    if (isValid) {
      const something = new FormData();

      Object.keys(formData).forEach((key) => {
        something.append(key, formData[key]);
      });

      something.append("access_key", "e7ebfe3b-4e06-4498-83d8-dd7fe07bbe4e");

      const object = Object.fromEntries(something);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      console.log("res", res);

      if (res.success) {
        localStorage.setItem("formSubmit", true);
        addNotification(
          "Form is Submitted. QLead team will contact you soon.",
          "success",
          3000
        );
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
        setPhone("");
      } else {
        addNotification("Something went wrong.", "error", 3000);
      }
    }
  };

  const isFormSubmitted = localStorage.getItem("formSubmit");

  const handleDownload = (e) => {
    if (!isFormSubmitted) {
      e.preventDefault();
      addNotification("Please Fill The Form First.", "warning", 3000);
    }
  };

  // @  JSX START
  return (
    <Fragment>
      <Helmet>
        <title>
          Contact QLead - Boost Your Business with Intent-Qualified Leads
        </title>
        <meta name="keyword" content="Contact QLead " />
        <meta
          name="description"
          content="Contact QLead to learn how our intent-qualified leads can drive business growth. Get in touch today!"
        />
      </Helmet>
      <div className={styles.section14}>
        <div className={styles.leftColumn}>
          <h1>
            Discover Digital
            <br />
            Transformation
          </h1>
          <p>
            Please feel free to share your thoughts and we can discuss it over a
            cup of tea.
          </p>
          <a
            href={samplePdf}
            download
            className={styles.downloadButton}
            onClick={handleDownload}
          >
            <img src={image1} alt="Brochure" className={styles.brochureImage} />
            <div className={styles.downloadText}>
              <div className={styles.download_text}>Download Our Brochure</div>
              <div className={styles.fileInfo}>
                PDF 2.0 MB
                <span className={styles.downloadIcon}>
                  <AiOutlineDownload />
                </span>
              </div>
            </div>
          </a>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.get_quote}>Get A Quote</div>
          <div className={styles.form}>
            <div className={styles.name_container}>
              <div className={styles.input_container}>
                <label htmlFor="firstName">First Name*</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  name="firstName"
                  value={formData.firstName}
                  id="firstName"
                  onChange={handleInputChange}
                  className={`${error?.firstName ? styles.error_border : ""}`}
                />
                {error?.firstName && (
                  <p className={styles.error_text}>{error.firstName}</p>
                )}
              </div>
              <div className={styles.input_container}>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className={styles.name_container}>
              <div className={styles.input_container}>
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  placeholder="Enter First Name"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`${error?.email ? styles.error_border : ""}`}
                />
                {error?.email && (
                  <p className={styles.error_text}>{error.email} </p>
                )}
              </div>
              <div className={styles.input_container}>
                <label htmlFor="phone">Phone Number*</label>
                <PhoneInput
                  country={"in"}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  inputClass={styles.phoneInput}
                  buttonClass={styles.dropdownButton}
                  dropdownClass={styles.dropdown}
                  containerClass={`${styles.inputContainer} ${
                    error?.email ? styles.error_border : ""
                  }`}
                  id="phone"
                />

                {error?.phoneNumber && (
                  <p className={styles.error_text}>{error.phoneNumber} </p>
                )}
              </div>
            </div>
            <div className={styles.textarea_container}>
              <div className={styles.input_container}>
                <label htmlFor="message" className={styles.textarea_label}>
                  <span>Tell Us More</span>
                  <span>{`${formData.message.length}/600`}</span>
                </label>
                <textarea
                  rows={8}
                  placeholder="Tell us more"
                  id="message"
                  name="message"
                  onChange={handleInputChange}
                  value={formData.message}
                  maxLength={600}
                ></textarea>
              </div>
            </div>
          </div>
          <p className={styles.disclaimer}>
            I authorise AOB Sales Entreprise & its representatives to contact me
            with updates and notifications via Email/SMS/WhatsApp/Call. This
            will override DND/NDNC.
          </p>
          {/* <button
          onClick={(e) => submitBtnHandler(e)}
          className={styles.submitButton}
        >
          <span>Submit</span>
          <span>
            <FaLongArrowAltRight />
          </span>
        </button> */}
          <button
            onClick={(e) => submitBtnHandler(e)}
            className={styles.submitButton}
          >
            Submit
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactUs2;
