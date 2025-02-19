import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import styles from "./mainLayout.module.css"
import { useTheme } from "@/context/ThemeContext";

const MainLayout = () => {
    const { theme } = useTheme(); 
  
  return (
    <div className={styles.layoutcontainer} style={{backgroundColor : theme?.background}}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
