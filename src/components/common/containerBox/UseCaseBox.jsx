import React from "react";
import styles from "./containerBox.module.css";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { handleShare } from "@/helpers/share";

const UseCaseBox = ({ data }) => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const handleReadMore = () => {
    navigate(`/singleblog?id=${data.id}&collection=usecase`);
  };

  

  return (
    <div className={styles.cBCon}>
      <img src={data?.img} alt="img" className={styles.cBImg} />
      <h3 style={{ color: theme?.heading }}> {data?.title} </h3>
      <h5 style={{ color: theme?.text }}> {data?.subTitle} </h5>
      <p
        style={{ color: theme?.desc }}
        dangerouslySetInnerHTML={{ __html: data?.desc.slice(0, 90) + " ..." }}
      ></p>
      <div className={styles.btnWrapper}>
      <Button
          title="Share"
          btnStyles={{
            padding: "10px 20px",
            backgroundColor: theme?.buttonBackground ,
            color: theme?.text,
            outline: "none",
            border: "none",
            borderRadius: "25px",
            margin: "0 10px",
          }}
          handleClick={() => handleShare(data)}
        />
        <Button
          title="Read"
          btnStyles={{
            padding: "10px 20px",
            backgroundColor: theme?.buttonBackground ,
            color:theme?.text,
            border: "none",
            outline: "none",
            borderRadius: "25px",
          }}
          handleClick={handleReadMore}
        />
      </div>
    </div>
  );
};

export default UseCaseBox;
