import React, { useEffect, useState } from "react";
import styles from "./usecases.module.css";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import { db } from "../../../config/firebaseConfig";
import Button from "../../common/button/Button";
import { useNavigate } from "react-router-dom";
import UseCaseBox from "../../common/containerBox/UseCaseBox";
import { useTheme } from "@/context/ThemeContext";
import CardComp from "@/components/cardComp/CardComp";

const UseCases = () => {
  const [loading, setLoading] = useState(false);
  const [useCases, setUseCases] = useState([]);
  const { theme } = useTheme();
  useEffect(() => {
    getBlogs();
  }, []);
  const navigate = useNavigate();

  const getBlogs = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "usecase"), limit(3));
      const querySnapshot = await getDocs(q);
      const tempData = [];
      querySnapshot.forEach((doc) => {
        tempData.push({ id: doc.id, ...doc.data() });
      });
      setUseCases(tempData);
    } catch (error) {
      console.log("Something went wrong:", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.articleCon}>
      <h2 style={{ color: theme?.heading }}>Use Cases &gt; </h2>
      <div className={styles.containerWrapper}>
        {loading ? (
          <Spinner />
        ) : (
          useCases?.length > 0 &&
          useCases.map((usecase) => {
            return <CardComp data={usecase} key={usecase}  collection={"usecase"} />;
          })
        )}
      </div>
      {useCases?.length == 3 && (
        <div>
          <Button
            title="View More"
            btnStyles={{
              backgroundColor: theme?.buttonBackground,
              color: theme?.text,
              padding: "10px 25px",
              margin: "10px 0",
              borderRadius: "25px",
            }}
            handleClick={() => navigate(`/use-cases`)}
          />
        </div>
      )}
    </div>
  );
};

export default UseCases;
