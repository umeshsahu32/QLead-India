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
  FaInfoCircle,
  FaClipboardList,
  FaIndustry,
  FaTrophy,
} from "react-icons/fa";
import { FaA } from "react-icons/fa6";
import { GiLaurelCrown } from "react-icons/gi";
import { RiCustomerService2Line } from "react-icons/ri";
import { FiPackage } from "react-icons/fi";

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
      icon: <FaInfoCircle />,
    },
    {
      id: 3,
      path: "/our-services",
      text: "Services",
      icon: <FaHandshake />,
    },
    {
      id: 4,
      path: "/our-packages",
      text: "Packages",
      icon: <FiPackage />,
    },
    {
      id: 5,
      path: "/industries-served",
      text: "Industries",
      icon: <FaIndustry />,
    },
    {
      id: 7,
      path: "/success-stories",
      text: "Success Stories",
      icon: <GiLaurelCrown />,
    },
    {
      id: 8,
      path: "/contact-us",
      text: "Contact Us",
      icon: <RiCustomerService2Line />,
    },
  ];

  const SocialLink = [
    {
      id: 1,
      path: "https://www.facebook.com/profile.php?id=61562755720045&mibextid=ZbWKwL",
      icon: <FaFacebook />,
    },
    {
      id: 2,
      path: "https://www.instagram.com/qleads.ai?igsh=MTVzeHA3Njg2NmVvZQ==",
      icon: <FaInstagram />,
    },
    {
      id: 3,
      path: "https://youtube.com/@aobqlead?si=DPL6qSpmUNcsi7p2",
      icon: <FaYoutube />,
    },
    {
      id: 4,
      path: "https://www.linkedin.com/company/qlead-ai/",
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

  // @ JSX START
  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles.navbar}>
          {/* @ NAV BAR FOR DEVICE WIDTH MORE THAN 768PX (DESKTOP, LAPTOP AND TAB )*/}
          <div className={styles.navBranding}>
            <Link to="/">
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
                    onClick={toggleDrawer}
                  >
                    {item.icon}&nbsp;&nbsp;&nbsp;{item.text}
                  </Link>
                );
              })}
            </div>
            <div className={styles.social_icons_mobile}>
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
