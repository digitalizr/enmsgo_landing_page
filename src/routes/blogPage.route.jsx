import React, { useEffect, useState } from "react";
import styles from "../styles/blog.module.css";
import ContainerBox from "../components/common/containerBox/ContainerBox";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";

const BlogPage = () => {
  const [loading, setLoading] = useState(false);
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "blogs"));
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
        }}
      >
        <Spinner size={30} color="#FFFFFF" />
      </div>
    );
  }

  return (
    <div>
      <div className={styles.blogContainer}>
        <h2>Blogs.</h2>
        <div className={styles.containerWrapper}>
          {blogList.length > 0 &&
            blogList.map((blog) => {
              return <ContainerBox blog={blog} key={blog?.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
