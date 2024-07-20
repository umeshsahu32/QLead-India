import React, { useState, useEffect } from "react";
import styles from "./SideBar.module.css";

const SideBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [active, setActive] = useState(false);

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
  };

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
        <form action="https://api.web3forms.com/submit" method="POST">
          <input
            type="hidden"
            name="access_key"
            value="e7ebfe3b-4e06-4498-83d8-dd7fe07bbe4e"
          />
          <input type="hidden" name="subject" value="Inquiry" />
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
          <div className={styles.btn}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SideBar;
