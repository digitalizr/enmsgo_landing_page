import React, { useEffect, useState } from "react";
import styles from "../styles/main.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import CardComp from "@/components/cardComp/CardComp";
import { useTheme } from "@/context/ThemeContext";
import FooterComp from "@/components/footer/FooterComp";

const EnergyManagement = () => {
  const [loading, setLoading] = useState(false);
  const [energyMgtList, setEnergyMgtList] = useState([]);
  const {theme} = useTheme()

  useEffect(() => {
    getEnergyMgt();
  }, []);

  const getEnergyMgt = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "energy-management"));
      const tempData = [];
      querySnapshot.forEach((doc) => {
        tempData.push({ id: doc.id, ...doc.data() });
      });
      setEnergyMgtList(tempData);
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
        <h2>Energy Management.</h2>
        <div className={styles.containerWrapper}>
          {energyMgtList.length > 0 &&
            energyMgtList.map((energymgt) => {
              return   <CardComp data={energymgt} key={energymgt?.id} collection={"energy-management"} />
            })}
        </div>
      </div>
      <FooterComp />
    </div>
  );
};


export default EnergyManagement
