import React, { useEffect, useState } from "react";
import styles from "./PriceCard.module.css";
import handshakeIconBlue from "../../../assets/images/Unique/Blue-Hand.png"; // Make sure to have this image
import handshakeIconWhite from "../../../assets/images/Unique/White-Hand.png"; // Make sure to have this image
import SectionHeading from "../../SectionHeading/SectionHeading";
import { Link } from "react-router-dom";

const Card = ({ title, price, clients, isCenter }) => (
  <div className={`${styles.card} ${isCenter ? styles.centerCard : ""}`}>
    {isCenter && <div className={styles.featuredStrip}>Best Selling</div>}
    <h3>{title}</h3>
    <h2 className={`${isCenter ? styles.center_head : ""}`}>₹{price}</h2>
    <img
      src={isCenter ? handshakeIconWhite : handshakeIconBlue}
      alt="Handshake"
      className={styles.handshakeIcon}
    />
    {/* <p className={styles.clientsText}>{clients} Qualified Leads</p> */}
    <Link
      to="/contact-us"
      className={`${!isCenter ? styles.purchaseBtn : styles.purchaseBtnCenter}`}
    >
      Book Now
    </Link>
  </div>
);

const PriceCard = () => {
  const [showSideCards, setShowSideCards] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSideCards(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.section21}>
      <SectionHeading heading="Our Packages" />
      <div className={styles.cardContainer}>
        <div
          className={`${styles.sideCard} ${showSideCards ? styles.show : ""}`}
        >
          <Card title="Accelerator" price={25000} clients={25} />
        </div>
        <Card title="Expansion" price={50000} clients={50} isCenter={true} />
        <div
          className={`${styles.sideCard} ${showSideCards ? styles.show : ""}`}
        >
          <Card title="Enterprise" price={75000} clients={75} />
        </div>
      </div>
    </section>
  );
};

export default PriceCard;
