import React, { useState } from "react";
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { LiaToggleOnSolid } from "react-icons/lia";
import { LiaToggleOffSolid } from "react-icons/lia";
import { themeColors } from "@/context/ThemeContext";
import { ContactModel } from "../contactModel/contactModel";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [switchTheme, setSwitchTheme] = useState(false);
  const isLightTheme = theme.background === "#f8fafc";

  const handleTheme = () => {
    setSwitchTheme(!switchTheme);
    if (switchTheme) {
      setTheme(themeColors.darkTheme);
    } else {
      setTheme(themeColors.lightTheme);
    }
  };
  return (
    <div className={styles.navbarContainer}>
      {/* Logo */}
      <NavLink to="/" className={styles.logocontainer}>
        <img src="/logo-transparent.png" alt="logo" />
        <span>ENMSgo</span>
      </NavLink>
      {/* MOBILE MENU */}
      <div className={styles.mobilemenu}>
        {/* icon container */}

        {/* Hamburger Menu */}
        <div
          className={styles.iconContainer}
          onClick={() => setOpen((prev) => !prev)}
          style={{
            backgroundColor: isLightTheme ? "black" : "",
          }}
        >
          <div
            className={`${styles.bar} ${styles.originLeft} ${
              open ? styles.rotate45 : ""
            }`}
          ></div>
          <div
            className={`${styles.bar} ${open ? styles.opacityZero : ""}`}
          ></div>
          <div
            className={`${styles.bar} ${styles.originLeft} ${
              open ? styles.inverseRotate : ""
            }`}
          ></div>
        </div>

        {/* mobile menu */}
        <div
          className={`${styles.mobileLinkList} ${open ? styles.active : ""}`}
        >
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${styles.menuitem} ${isActive ? styles.activeLink : ""}`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/use-cases"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${styles.menuitem} ${isActive ? styles.activeLink : ""}`
            }
          >
            Use Cases
          </NavLink>
          <NavLink
            to="/energy-management"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${styles.menuitem} ${isActive ? styles.activeLink : ""}`
            }
          >
            Energy Management
          </NavLink>
          <div
            className={styles.mobEndContainer}
            style={
              open ? { flexDirection: "column" } : { flexDirection: "row" }
            }
          >
            <div
              style={
                open ? { flexDirection: "column" } : { flexDirection: "row" }
              }
            >
              <button onClick={() => setOpen(!open)}>
                <ContactModel />
              </button>
              <button onClick={handleTheme}>
                {switchTheme ? <LiaToggleOnSolid /> : <LiaToggleOffSolid />}
              </button>
            </div>
            <a
              href="https://app.enmsgo.com/login"
              className={styles.getStarted}
            >
              <img src={"/avatar.png"} alt="userimg" />
              <button>Get Started</button>
            </a>
          </div>
        </div>
      </div>
      {/* desktop menu */}
      <div className={styles.desktopmenu}>
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            `${styles.menuitem} ${isActive ? styles.activeLink : ""}`
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/use-cases"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            `${styles.menuitem} ${isActive ? styles.activeLink : ""}`
          }
        >
          Use Cases
        </NavLink>
        <NavLink
          to="/energy-management"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            `${styles.menuitem} ${isActive ? styles.activeLink : ""}`
          }
        >
          Energy Management
        </NavLink>
        <div className={styles.mobEndContainer}>
          <div>
            <button>
              <ContactModel />
            </button>
            <button onClick={handleTheme}>
              {switchTheme ? <LiaToggleOnSolid /> : <LiaToggleOffSolid />}
            </button>
          </div>
          <a href="https://app.enmsgo.com/login" className={styles.getStarted}>
            <img src={"/avatar.png"} alt="userimg" />
            <button>Get Started</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
