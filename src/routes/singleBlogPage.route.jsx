import { useLocation, useNavigate } from "react-router-dom";
import { doc, getDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { useEffect, useState } from "react";
import styles from "../styles/singleBlogPost.module.css";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";

const SingleBlogPost = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const blogId = searchParams.get("id");
  const [blog, setBlog] = useState(null);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingBlog, setLoadingBlog] = useState(false);

  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = async () => {
    setLoadingBlog(true);
    try {
      if (!blogId) return;
      const docRef = doc(db, "blogs", blogId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBlog(docSnap.data());
        setTitle(docSnap.data().title);
        setSubTitle(docSnap.data().subTitle);
        setDesc(docSnap.data().desc);
        setLoadingBlog(false);
      } else {
        console.log("No such document!");
        toast.error("No such document found...");
        setLoadingBlog(false);
      }
    } catch (error) {
      toast.error("No such document found... : ", error);
      setLoadingBlog(false);
    } finally {
      setLoadingBlog(false);
    }
  };

  if (loadingBlog) {
    return (
      <div style={{width : '100%',height:'85vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Spinner />
      </div>
    );
  }

  return (
    blog && (
      <div className={styles.mainContainer}>
        <div className={styles.mainTop}>
          <div>
            <h1>{blog.title}</h1>
            <h2>{blog.subTitle}</h2>
          </div>
          <div>
            <img src={blog.img} alt={blog.title} />
          </div>
        </div>
        <div className={styles.mainBtm}>
          <p dangerouslySetInnerHTML={{ __html: blog.desc }}></p>
        </div>
      </div>
    )
  );
};

export default SingleBlogPost;
