import React, { useEffect, useState } from "react";
import styles from "./PriceCard.module.css";
import handshakeIcon from "../../../assets/images/Unique/hand-image.png"; // Make sure to have this image
import SectionHeading from "../../SectionHeading/SectionHeading";

const Card = ({ title, price, clients, isCenter }) => (
  <div className={`${styles.card} ${isCenter ? styles.centerCard : ""}`}>
    {isCenter && <div className={styles.featuredStrip}>Best Selling</div>}
    <h3>{title}</h3>
    <h2>₹{price}</h2>
    <img src={handshakeIcon} alt="Handshake" className={styles.handshakeIcon} />
    <p className={styles.clientsText}>{clients} Clients</p>
    <button className={styles.purchaseBtn}>PURCHASE</button>
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
          <Card title="ACCELERATOR" price={25000} clients={200} />
        </div>
        <Card title="DIAMOND" price={50000} clients={260} isCenter={true} />
        <div
          className={`${styles.sideCard} ${showSideCards ? styles.show : ""}`}
        >
          <Card title="PLATINUM" price={75000} clients={350} />
        </div>
      </div>
    </section>
  );
};

export default PriceCard;
