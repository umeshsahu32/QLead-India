import React, { useState, useEffect } from "react";
import styles from "./SideBar.module.css";
import axios from "axios";

const SideBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [active, setActive] = useState(false);
  const [result, setResult] = React.useState("");

  useEffect(() => {
    const controlSidebar = () => {
      if (window.scrollY > 400) {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
      }
    };

    window.addEventListener("scroll", controlSidebar);
    return () => {
      window.removeEventListener("scroll", controlSidebar);
    };
  }, []);

  const toggleSidebar = () => {
    setActive(!active);
    setResult();
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e7ebfe3b-4e06-4498-83d8-dd7fe07bbe4e");

    const object = Object.fromEntries(formData);
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
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   console.log("btnClicked", form);
  //   const formData = new FormData(form);
  //   setResult("Sending....");

  //   try {
  //     const response = await fetch(
  //       "https://formsubmit.co/ajax/aobsales.india@gmail.com",
  //       {
  //         method: "POST",
  //         body: formData,
  //       }
  //     );

  //     const data = await response.json();

  //     console.log("data==>", data);

  //     if (data.success) {
  //       setResult("Form submitted successfully.");
  //       form.reset();
  //     }
  //   } catch (error) {
  //     console.log("Error:", error);
  //     setResult("Something went wrong. Please Try Again");
  //   }
  // };

  return (
    <div
      id="sidebar"
      className={`${styles.sidebarContact} ${
        showSidebar ? "" : styles.hideSidebar
      } ${active ? styles.active : ""}`}
    >
      <div
        className={`${styles.toggle} ${active ? styles.active : ""}`}
        onClick={toggleSidebar}
      ></div>
      <h2>Contact Us</h2>
      <div className={styles.horizontalLineForm}></div>
      <div className={styles.scroll}>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            type="number"
            onKeyPress={(e) => {
              if (e.target.value.length >= 10) e.preventDefault();
            }}
            id="mobile"
            placeholder="Your Mobile"
            required
            name="phone"
          />
          <input
            type="email"
            id="mail"
            name="email"
            required
            placeholder="Your Email"
          />
          <textarea
            placeholder="Leave a message here"
            id="message"
            name="message"
            style={{ height: "80px" }}
            required
          ></textarea>
          <p className={styles.disclaimer}>
            I authorise AOB Sales Entreprise & its representatives to contact me
            with updates and notifications via Email/SMS/WhatsApp/Call. This
            will override DND/NDNC.
          </p>
          <p className={styles.responseMessage}>{result}</p>
          <div className={styles.btn}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SideBar;
