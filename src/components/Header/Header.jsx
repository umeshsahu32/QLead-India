import React, { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import QLead_India_logo from "../../assets/images/QLead-logo.png";
import styles from "./Header.module.css";
import { AiFillHome } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaBlogger,
} from "react-icons/fa";
import { FaA } from "react-icons/fa6";
import Button from "../Buttons/GetStartedButton";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const NavigationLinks = [
    {
      id: 1,
      path: "/#",
      text: "Home",
      icon: <AiFillHome />,
    },
    {
      id: 2,
      path: "/about-us",
      text: "About Us",
      icon: <AiFillHome />,
    },
    {
      id: 3,
      path: "/services",
      text: "Services",
      icon: <FaHandshake />,
    },
    {
      id: 4,
      path: "/packages",
      text: "Packages",
      icon: <MdEmail />,
    },
    {
      id: 5,
      path: "/faqs",
      text: "FAQs",
      icon: <MdEmail />,
    },
    {
      id: 6,
      path: "/blogs-and-media",
      text: "Media & Blogs",
      icon: <MdEmail />,
    },
    {
      id: 7,
      path: "/case-study",
      text: "Case Study",
      icon: <MdEmail />,
    },
    {
      id: 8,
      path: "/contact-us",
      text: "Contact Us",
      icon: <MdEmail />,
    },
  ];

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

  // @ JSX START
  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles.navbar}>
          {/* @ NAV BAR FOR DEVICE WIDTH MORE THAN 768PX (DESKTOP, LAPTOP AND TAB )*/}
          <div className={styles.navBranding}>
            <Link to="#">
              <img src={QLead_India_logo} alt="Icon" className={styles.icon} />
            </Link>
          </div>
          <div className={styles.navMenu}>
            {NavigationLinks.map((item) => {
              return (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.navLink
                  }
                  key={item.id}
                  exact
                >
                  {item.text}
                </NavLink>
              );
            })}
          </div>
          <div className={styles.social_icons}>
            {SocialLink.map((item) => {
              return (
                <Link to={item.path} key={item.id}>
                  {item.icon}
                </Link>
              );
            })}
          </div>
          <div
            className={`${styles.hamburger} ${drawerOpen ? styles.active : ""}`}
            onClick={toggleDrawer}
          >
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
          {/* NAV BAR FOR DEVICE WIDTH LESS THAN 768PX (MOBILE )*/}
          <div
            className={`${styles.drawer} ${styles.hide_drawer} ${
              drawerOpen ? styles.open : ""
            }`}
          >
            <div className={styles.drawerContent}>
              {NavigationLinks.map((item) => {
                return (
                  <Link
                    to={item.path}
                    className={styles.drawerItem}
                    key={item.id}
                  >
                    {item.icon}&nbsp;&nbsp;&nbsp;{item.text}
                  </Link>
                );
              })}
            </div>
            <div className={styles.social_icons}>
              {SocialLink.map((item) => {
                return (
                  <Link to={item.path} key={item.id}>
                    {item.icon}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
