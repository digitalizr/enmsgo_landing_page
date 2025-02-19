import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../home/views/views.module.css";
import { useTheme } from "@/context/ThemeContext";

const CarouselComp = ({ data, activeTab, setActiveTab }) => {
  const { theme } = useTheme();
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
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data &&
        Object.keys(data).map((tab) => (
          <div key={tab} className={styles.buttonWrapper}>
            <button
              className={
                activeTab === tab ? styles.activeButton : styles.inactiveButton
              }
              style={{
                color: activeTab === tab ? theme?.text : theme?.desc,
                background: activeTab === tab ? theme?.buttonBackground : null,
                border: activeTab === tab ? null : `1px solid ${theme?.border}`,
              }}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </div>
        ))}
    </Slider>
  );
};

export default CarouselComp;
