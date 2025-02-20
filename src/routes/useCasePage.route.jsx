import React, { useEffect, useState } from "react";
import styles from "../styles/main.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import CardComp from "@/components/cardComp/CardComp";
import { useTheme } from "@/context/ThemeContext";
import FooterComp from "@/components/footer/FooterComp";

const UseCasePage = () => {
  const [loading, setLoading] = useState(false);
  const [useCaseList, setUseCaseList] = useState([]);
  const {theme} = useTheme()

  useEffect(() => {
    getUseCases();
  }, []);

  const getUseCases = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "usecase"));
      const tempData = [];
      querySnapshot.forEach((doc) => {
        tempData.push({ id: doc.id, ...doc.data() });
      });
      setUseCaseList(tempData);
    } catch (error) {
      console.log("Something went wrong:", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundColor: theme.background,
        }}
      >
        <Spinner size={30} color={theme?.heading} />
      </div>
    );
  }

  return (
    <div>
      <div className={styles.mainContainer}>
        <h2>Use Cases.</h2>
        <div className={styles.containerWrapper}>
          {useCaseList.length > 0 &&
            useCaseList.map((usecase) => {
              return  <CardComp data={usecase} key={usecase?.id} collection={"usecase"}  />
            })}
        </div>
      </div>
      <FooterComp />
    </div>
  );
};

export default UseCasePage;
