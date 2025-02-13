import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

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
              <img src="/Globe.png" alt="" />
              <h6>EN</h6>
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
            <img src="/Globe.png" alt="" />
            <h6>EN</h6>
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
