import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import QLead_India_logo from "../../assets/images/QLead_India_logo.webp";
import styles from "./Header.module.css";
import { AiFillHome } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const mobileNavigation = [
    {
      path: "#",
      text: "Home",
      icon: <AiFillHome />,
    },
    {
      path: "#",
      text: "Case Study",
      icon: <AiFillHome />,
    },
    {
      path: "#",
      text: "Services",
      icon: <FaHandshake />,
    },
    {
      path: "#",
      text: "Contact Us ",
      icon: <MdEmail />,
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
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
            <div className={styles.dropdown}>
              <Link to="#" className={styles.navLink}>
                About Us
              </Link>
            </div>
            <Link to="#" className={styles.navLink}>
              Contact Us
            </Link>
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
              {mobileNavigation.map((item) => {
                return (
                  <Link
                    to={item.path}
                    className={styles.drawerItem}
                    key={Math.random()}
                  >
                    {item.icon}&nbsp;&nbsp;&nbsp;{item.text}
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
