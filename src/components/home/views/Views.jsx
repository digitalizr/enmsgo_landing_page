import React, { useState } from "react";
import styles from "./views.module.css";
import Button from "../../common/button/Button";
import CarouselComp from "../../CarouselComp/CarouselComp";
import { useTheme } from "@/context/ThemeContext";

const Views = ({
  viewHeading1,
  viewHeading2,
  aiAnalysisImg,
  dashboardImg,
  alertsImg,
  reportGenImg,
}) => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const{theme} = useTheme()

  const images = {
    Dashboard: dashboardImg,
    "Ai Analysis": aiAnalysisImg,
    Alerts: alertsImg,
    "Report Generation": reportGenImg,
  };

  return (
    <div className={styles.viewCon}>
      <h1 className={styles.viewHeading} style={{color : theme.heading}}>{viewHeading1}</h1>
      <h3 className={styles.viewSubHeading} style={{color : theme.text}}>{viewHeading2}</h3>
      <CarouselComp
        data={images}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className={styles.imageContainer}>
        <img src={images[activeTab]} alt={activeTab} className={styles.image} />
      </div>
      <div className={styles.btnWrapper}>
        <Button
          title="Explore Features"
          btnStyles={{
            backgroundColor: theme.buttonBackground,
            color: theme.text,
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
