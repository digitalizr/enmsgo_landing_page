import React from "react";
import styles from "./containerBox.module.css";
import Button from "../button/Button";

const ContainerBox = ({
  img,
  title,
  subTitle,
  desc,
  headingClr = "#FFFFFF",
  subHeaingClr = "#FFFFFF",
  descClr = "#FFFFFF",
}) => {
  return (
    <div className={styles.cBCon}>
      <img src={img} alt="img" className={styles.cBImg} />
      <h3 style={{ color: headingClr }}> {title} </h3>
      <h3 style={{ color: subHeaingClr }}> {subTitle} </h3>
      <p style={{ color: descClr }}>{desc}</p>
      <div className={styles.btnWrapper}>
        <Button
          title={"Share"}
          btnStyles={{
            padding: "10px 20px",
            backgroundColor: "transparent",
            color: "#65558F",
            border: "1px solid #79747E",
            outline: "none",
            borderRadius: "25px",
            margin: "0 10px",
          }}
        />
        <Button
          title={"Read"}
          btnStyles={{
            padding: "10px 20px",
            backgroundColor: "#65558F",
            color: "#FFFFFF",
            border: "none",
            outline: "none",
            borderRadius: "25px",
          }}
        />
      </div>
    </div>
  );
};

export default ContainerBox;
