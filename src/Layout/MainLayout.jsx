import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import styles from "./mainLayout.module.css"

const MainLayout = () => {
  return (
    <div className={styles.layoutcontainer}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
