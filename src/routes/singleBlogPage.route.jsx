import { useLocation } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { useEffect, useState } from "react";
import styles from "../styles/singleBlogPost.module.css";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";

const SingleBlogPost = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const dataId = searchParams.get("id");
  const collectionName = searchParams.get("collection");
  const [data, setData] = useState(null);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoadingData(true);
    try {
      if (!dataId) return;
      const docRef = doc(db, collectionName, dataId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setData(docSnap.data());
        setLoadingData(false);
      } else {
        console.log("No such document!");
        setLoadingData(false);
      }
    } catch (error) {
      console.log("No such document found... : ", error);      
      setLoadingData(false);
    } finally {
      setLoadingData(false);
    }
  };

  if (loadingData) {
    return (
      <div style={{width : '100%',height:'85vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Spinner />
      </div>
    );
  }

  return (
    data && (
      <div className={styles.mainContainer}>
        <div className={styles.mainTop}>
          <div>
            <h1>{data.title}</h1>
            <h2>{data.subTitle}</h2>
          </div>
          <div>
            <img src={data.img} alt={data.title} />
          </div>
        </div>
        <div className={styles.mainBtm}>
          <p dangerouslySetInnerHTML={{ __html: data.desc }}></p>
        </div>
      </div>
    )
  );
};

export default SingleBlogPost;
