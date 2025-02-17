import React, { useEffect, useState } from "react";
import styles from "./articles.module.css";
import BlogBox from "../../common/containerBox/BlogBox";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import { db } from "../../../config/firebaseConfig";
import Button from "../../common/button/Button";
import { useNavigate } from "react-router-dom";

const Articles = () => {
  const [loading, setLoading] = useState(false);
  const [blogList, setBlogList] = useState([]);

  const navigate = useNavigate();

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
            return <BlogBox data={blog} key={blog?.id} />;
          })
        )}
      </div>
      {blogList.length === 3 && (
        <div>
          <Button
            title="View More"
            btnStyles={{
              backgroundColor: "#65558F",
              color: "white",
              padding: "10px 25px",
              margin: "10px 0",
              borderRadius: "25px",
            }}
            handleClick={() => navigate(`/blogs`)}
          />
        </div>
      )}
    </div>
  );
};

export default Articles;
