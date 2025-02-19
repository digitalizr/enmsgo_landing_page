import React from "react";
import styles from "./Hero.module.css";
import { useTheme } from "@/context/ThemeContext";
const Hero = ({ heroImg, heading1, heading2, desc }) => {
  const {theme} = useTheme()
  return (
    <div className={styles.heroCon}>
      <div className={styles.heroConLeft}>
        <img src={heroImg} alt="grafik" />
      </div>
      <div className={styles.heroConRight}>
        <h1 style={{color : theme?.heading}}>{heading1}</h1>
        <h2 style={{color : theme?.text}}>{heading2}</h2>
        <span style={{color : theme?.desc}}>{desc}</span>
      </div>
    </div>
  );
};

export default Hero;
