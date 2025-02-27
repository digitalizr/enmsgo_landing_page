import React, { useState } from "react";
import styles from "./footer.module.css";
import { useTheme } from "@/context/ThemeContext";
import { Link } from "react-router-dom";
import { ContactModel } from "../contactModel/contactModel";

const FooterComp = () => {
  const { theme } = useTheme();
  const [btnHover, setBtnHover] = useState(false);
  const handleHover = () => {
    setBtnHover(!btnHover);
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.footerCon}>
        <Link to={"/"}>
          <img src="/logo-transparent.png" alt="logo" />
        </Link>
        <button
          className={styles.footerBtn}
          style={{
            background: btnHover ? "#3B82F6" : theme?.button,
            color: btnHover ? theme?.heading : theme?.text,
            border: btnHover ? `1px solid ${theme.border}` : "",
          }}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          {/* Contact */}
          <ContactModel />
        </button>
      </div>
      <div
        className={styles.footerBtm}
        style={{ borderTop: `1px solid ${theme?.border}`, color: theme.text }}
      >
        &copy; 2025 ENSMGO
      </div>
    </footer>
  );
};

export default FooterComp;
