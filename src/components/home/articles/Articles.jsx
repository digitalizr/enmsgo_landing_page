import React from "react";
import styles from "./articles.module.css";
import ContainerBox from "../../common/containerBox/ContainerBox";

const Articles = () => {
  return (
    <div className={styles.articleCon}>
      <h2>Articles &gt; </h2>
      <div className={styles.containerWrapper}>
        <ContainerBox
          img={"/article1.png"}
          title={"Sankey diagram"}
          subTitle={"Level 3 Monitoring"}
          desc={
            "To achieve level 3 monitoring, each individual consumption points needs to be monitored"
          }
        />
        <ContainerBox
          img={"/article2.png"}
          title={"Treemap"}
          subTitle={"Watch your Energy Consumer"}
          desc={
            "A great visualization toll to get clear understanding on which part of the assets structure consumes most energy and how they change"
          }
        />
        <ContainerBox
          img={"/article3.png"}
          title={"Bar Chart Race"}
          subTitle={"Which day is the day?"}
          desc={"Wacth which day causes the most energy consumptions"}
        />
      </div>
    </div>
  );
};

export default Articles;
