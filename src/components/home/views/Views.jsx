import React, { useState } from "react";
import styles from "./views.module.css";
import dashboardImage from "/dashboard.png";
import aiAnalysisImage from "/analysis.avif";
import alertsImage from "/dataVisual.avif";
import reportImage from "/reportGen.avif";
import Button from "../../common/button/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Views = ({
  viewHeading1,
  viewHeading2,
  aiAnalysisImg,
  dashboardImg,
  alertsImg,
  reportGenImg,
}) => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const images = {
    Dashboard: dashboardImage,
    "Ai Analysis": aiAnalysisImage,
    Alerts: alertsImage,
    "Report Generation": reportImage,
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className={styles.viewCon}>
      <h1 className={styles.viewHeading}>
        {/* Where Energy Management meets AI */}
        {viewHeading1}
      </h1>
      <h3 className={styles.viewSubHeading}>
        {/* Have Control, Have the Predictability and Have Clear View */}
        {viewHeading2}
      </h3>
      <Slider {...settings}>
        {Object.keys(images).map((tab) => (
          <div key={tab} className={styles.buttonWrapper}>
            <button
              className={
                activeTab === tab ? styles.activeButton : styles.inactiveButton
              }
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </div>
        ))}
      </Slider>
      <div className={styles.imageContainer}>
        <img src={images[activeTab]} alt={activeTab} className={styles.image} />
      </div>
      <div className={styles.btnWrapper}>
        <Button
          title="Explore Features"
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
