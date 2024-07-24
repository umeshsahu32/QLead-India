import React, { Fragment, useState } from "react";
import styles from "./IndustriesSection.module.css";
import SectionHeading from "../../SectionHeading/SectionHeading";

const categories = [
  {
    name: "Ed-Tech",
    subcategories: [
      "Byjus",
      "WhiteHat Jr",
      "Marksharks",
      "Xpressminds",
      "Physicswala",
      "Udemy",
      "Teachable",
    ],
  },
  {
    name: "Finance",
    subcategories: [
      "HDFC",
      "Bajaj Finserve",
      "Xpressloan",
      "Home Credit",
      "Lazypay",
      "Slice",
      "Bankbazar",
    ],
  },
  {
    name: "Insurance",
    subcategories: [
      "Liv Long",
      "Turtlemint",
      "Care Health",
      "Sriram Insurance",
    ],
  },
  {
    name: "Digital Sales / E-Commerce",
    subcategories: ["MakeMy Trip", "Amazon", "Flipkart", "Tata CLIQ"],
  },
  {
    name: "Franchise Sales",
    subcategories: [
      "Keventers",
      "Amrutchaha",
      "Anytime Fitness",
      "Aglius Diagnostics",
      "Timekids",
    ],
  },
  {
    name: "App Onboarding",
    subcategories: [
      "Paytm Mall",
      "BusyBee",
      "BellyMelly",
      "Oyespace",
      "Oyo",
      "Amazon",
    ],
  },
  {
    name: "Software Services ",
    subcategories: [
      "Pramura",
      "SmartDesigner",
      "ZingHR",
      "Oracle",
      "PeakHR",
      "Facillio Inc",
      "Exotel",
    ],
  },

  {
    name: "Real Estate",
    subcategories: [
      "Ridhira Living",
      "DLF",
      "Purvankara",
      "ALYF",
      "Proptiger",
      "bBits",
      "Prestige",
      "Mantri",
      "HOABL",
      "Rhythmtel",
    ],
  },
  {
    name: "Channel Sales",
    subcategories: [
      "Dabur",
      "Pioneer Seeds",
      "DuPont",
      "Cona Electrical",
      "CenturyPly",
    ],
  },
  {
    name: "Timeshare / Travel",
    subcategories: [
      "Club Mahindra",
      "ConfirmTkt",
      "Queen's Hotel",
      "Taj Inner Circle",
      "Accor Plus",
    ],
  },
  {
    name: "Education",
    subcategories: [
      "Klay",
      "Kidzee",
      "Lovely Professional University",
      "Amity",
      "Archistar Academy",
      "CMR Engineering College",
    ],
  },
  {
    name: "Jewelry",
    subcategories: ["Tanishq", "Bluestone", "Goldsikka", "Sri Krishna Pearls"],
  },
  {
    name: "Others",
    subcategories: [
      "Mercedez & Hyundai Dealership",
      "Apollo Cradle",
      "ZeepZoop",
      "Zillingo",
      "EPFP",
      "Elite Biotech",
      "HealthFirst",
      "Kake Da Dhaba",
      "Panasonic",
      "Zeep Zoop",
      "GSK",
    ],
  },
  {
    name: "Category 14",
    subcategories: ["Sub 14.1", "Sub 14.2", "Sub 14.3", "Sub 14.4", "Sub 14.5"],
  },
  {
    name: "Category 15",
    subcategories: ["Sub 15.1", "Sub 15.2", "Sub 15.3", "Sub 15.4", "Sub 15.5"],
  },

  {
    name: "Category 16",
    subcategories: ["Sub 16.1", "Sub 16.2", "Sub 16.3", "Sub 16.4", "Sub 16.5"],
  },
];

const IndustriesSection = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <Fragment>
      <SectionHeading heading="If you have a business, we have Qualified Leads" />
      <div className={styles.container}>
        {categories.map((category, index) => (
          <div
            key={index}
            className={styles.category}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <button className={styles.categoryButton}>{category.name}</button>
            <div
              className={`${styles.subcategories} ${
                hoverIndex === index ? styles.show : ""
              } ${index < 8 ? styles.top : styles.bottom}`}
            >
              {category.subcategories.map((sub, subIndex) => (
                <div
                  key={subIndex}
                  className={styles.subcategory}
                  style={{ animationDelay: `${subIndex * 0.1}s` }}
                >
                  {sub}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default IndustriesSection;
