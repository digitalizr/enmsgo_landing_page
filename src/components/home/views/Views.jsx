import React, { useState } from "react";
import styles from "./views.module.css";
import dashboardImg from "/dashboard.png";
import aiAnalysisImg from "/analysis.avif";
import alertsImg from "/dataVisual.avif";
import reportImg from "/reportGen.avif";
import Button from "../../common/button/Button";

const Views = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const images = {
    Dashboard: dashboardImg,
    "Ai Analysis": aiAnalysisImg,
    Alerts: alertsImg,
    "Report Generation": reportImg,
  };

  return (
    <div className={styles.viewCon}>
      <h1 className={styles.viewHeading}>Where Energy Management meets AI</h1>
      <h3 className={styles.viewSubHeading}>
        Have Control, Have the Predictability and Have Clear View
      </h3>

      <div className={styles.buttonContainer}>
        {Object.keys(images).map((tab) => (
          <button
            key={tab}
            className={
              activeTab === tab ? styles.activeButton : styles.inactiveButton
            }
            onClick={() => setActiveTab(tab)}
          >
            <img src="/star.png" alt="" srcset="" />
            {tab}
          </button>
        ))}
      </div>

      <div className={styles.imageContainer}>
        <img src={images[activeTab]} alt={activeTab} className={styles.image} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          title={"Explore Features"}
          btnStyles={{
            backgroundColor: "#65558F",
            color: "white",
            padding: "10px 25px",
            margin: "10px 0",
            borderRadius: "25px",
          }}
        />
      </div>
    </div>
  );
};

export default Views;
