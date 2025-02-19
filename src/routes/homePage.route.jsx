import React, { useState, useEffect } from "react";
import Hero from "../components/home/hero/Hero";
import Views from "../components/home/views/Views";
import Articles from "../components/home/articles/Articles";
import UseCases from "../components/home/use-cases/UseCases";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import { useTheme } from "@/context/ThemeContext";
import FooterComp from "@/components/footer/FooterComp";
const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [dataList, setDataList] = useState([]);
  const { theme } = useTheme();

  const {
    heroImg,
    heading1,
    heading2,
    desc,
    viewHeading1,
    viewHeading2,
    aiAnalysisImg,
    alertsImg,
    dashboardImg,
    reportGenImg,
    id,
  } = dataList[0] || {};

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "data"));
      const tempData = [];
      querySnapshot.forEach((doc) => {
        tempData.push({ id: doc.id, ...doc.data() });
      });
      setDataList(tempData);
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
        <Spinner size={30} color={theme?.heading}  />
      </div>
    );
  }

  return (
    <div >
      <Hero
        heading1={heading1}
        heading2={heading2}
        desc={desc}
        heroImg={heroImg}
      />
      <Views
        viewHeading1={viewHeading1}
        viewHeading2={viewHeading2}
        aiAnalysisImg={aiAnalysisImg}
        dashboardImg={dashboardImg}
        alertsImg={alertsImg}
        reportGenImg={reportGenImg}
      />
      <Articles />
      <UseCases />
      <FooterComp />
    </div>
  );
};

export default HomePage;
