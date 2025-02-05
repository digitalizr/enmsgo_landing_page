import React, { useState } from "react";
import styles from "../styles/login.module.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div className={styles.authcontainer}>
      <form onSubmit={() => {}}>
        <div className={styles.inputcontainer}>
          <label htmlFor="username">UserName : </label>
          <input type="text" name="username" placeholder="John123" />
        </div>
        <div className={styles.inputcontainer}>
          <label htmlFor="password">Password : </label>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              style={{ position: "relative" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {password ? (
              showPassword ? (
                <i
                  className={styles.passicon}
                  onClick={() => setshowPassword(!showPassword)}
                >
                  <FiEyeOff />
                </i>
              ) : (
                <i
                  className={styles.passicon}
                  onClick={() => setshowPassword(!showPassword)}
                >
                  <FiEye />
                </i>
              )
            ) : null}
          </div>
        </div>
        <button type="submit" className={styles.submitbtn}>
          Login
        </button>
        <p className={styles.authredirect}>
          Don't have an account?{" "}
          <Link
            to={"/register"}
            style={{ color: "#1E40AF", textDecoration: "underline" }}
          >
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
