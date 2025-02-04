import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroCon}>
      <div className={styles.heroConLeft}>
        <img src="/grafik.png" alt="grafik" />
      </div>
      <div className={styles.heroConRight}>
        <h2>
          Reduce costs, increase resource efficiency and keep an eye on
          consumption.
        </h2>
        <h1>The AI powered energy management platform</h1>
        <span>
          ENMSgo is a futured proofed and secure software for managing energy
          data and other parameters. The numerous users include local
          authorities, energy suppliers, municipal utilities, industrial
          companies, facility service providers and many more. The
          tried-and-tested portal app is an easy-to-use complete solution and
          you can start successfully implementing your energy management project
          immediately without any installation effort.
        </span>
      </div>
    </div>
  );
};

export default Hero;
