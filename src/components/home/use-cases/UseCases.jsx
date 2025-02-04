import React from "react";
import styles from "./usecases.module.css";
import ContainerBox from "../../common/containerBox/ContainerBox";

const UseCases = () => {
  return (
    <div className={styles.articleCon}>
      <h2>Use Cases &gt; </h2>
      <div className={styles.containerWrapper}>
        <ContainerBox
          img={"/usecase1.png"}
          title={"Zoom to Bounding Box"}
          subTitle={"Birds Eye view on energy consumers"}
          desc={
            "To achieve level 3 monitoring, each individual consumption points needs to be monitored"
          }
          headingClr="#1D1B20"
          subHeaingClr="#49454F"
          descClr="#49454F"
        />
        <ContainerBox
          img={"/usecase2.png"}
          title={"Title"}
          subTitle={"SubTitle"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          }
          headingClr="#1D1B20"
          subHeaingClr="#49454F"
          descClr="#49454F"
        />
        <ContainerBox
          img={"/usecase3.png"}
          title={"Title"}
          subTitle={"SubTitle"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          }
          headingClr="#1D1B20"
          subHeaingClr="#49454F"
          descClr="#49454F"
        />
      </div>
    </div>
  );
};

export default UseCases;
