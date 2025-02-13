import React, { useEffect, useState } from "react";
import styles from "./usecases.module.css";
import ContainerBox from "../../common/containerBox/ContainerBox";
import { collection, getDocs,limit,query } from "firebase/firestore";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import { db } from "../../../config/firebaseConfig";

const UseCases = () => {
  const [loading, setLoading] = useState(false);
  const [blogList, setBlogList] = useState([]);
  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "blogs"), limit(3)); 
      const querySnapshot = await getDocs(q);
      const tempData = [];
      querySnapshot.forEach((doc) => {
        tempData.push({ id: doc.id, ...doc.data() });
      });
      setBlogList(tempData);
    } catch (error) {
      console.log("Something went wrong:", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.articleCon}>
      <h2>Articles &gt; </h2>
      <div className={styles.containerWrapper}>
        {loading ? (
          <Spinner />
        ) : (
          blogList.length > 0 &&
          blogList.map((blog) => {
            return <ContainerBox blog={blog} key={blog?.id} />;
          })
        )}
      </div>
    </div>
  );
};

export default UseCases;
