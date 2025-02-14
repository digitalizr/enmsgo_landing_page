import React from "react";
import styles from "./Hero.module.css";

const Hero = ({ heroImg, heading1, heading2, desc }) => {
  return (
    <div className={styles.heroCon}>
      <div className={styles.heroConLeft}>
        <img src={heroImg} alt="grafik" />
      </div>
      <div className={styles.heroConRight}>
        <h2>{heading1}</h2>
        <h1>{heading2}</h1>
        <span>{desc}</span>
      </div>
    </div>
  );
};

export default Hero;
