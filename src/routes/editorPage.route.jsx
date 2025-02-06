import React, { useState } from "react";
import styles from "../styles/editor.module.css";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";

const Editor = ({ initialData, onSave }) => {
  // Initialize state with initialData (if available)
  const [formData, setFormData] = useState(
    initialData || {
      heroImg: "",
      heading1: "",
      heading2: "",
      desc: "",
      viewHeading1: "",
      viewHeading2: "",
      aiAnalysisImg: "",
      alertsImg: "",
      dashboardImg: "",
      reportGenImg: "",
    }
  );
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // onSave(formData);
    updateData()
  };

  const updateData = async () => {
    setLoading(true);
    try {
      const updatedFields = Object.fromEntries(
        Object.entries(formData).filter(([_, value]) => value.trim() !== "")
      );

      if (Object.keys(updatedFields).length > 0) {
        await setDoc(doc(db, "data", "qHLA59NCsSaZDlvDnYFT"), updatedFields, {
          merge: true,
        });
        console.log("Data updated successfully");
      } else {
        console.log("No fields provided for update");
      }
    } catch (error) {
      console.log("Something went wrong: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.editorContainer}>
      <h2 className={styles.heading}>Edit Content</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Text Inputs */}
        <input
          type="text"
          name="heading1"
          value={formData.heading1}
          onChange={handleChange}
          placeholder="Heading 1"
          className={styles.input}
        />
        <input
          type="text"
          name="heading2"
          value={formData.heading2}
          onChange={handleChange}
          placeholder="Heading 2"
          className={styles.input}
        />
        <textarea
          name="desc"
          value={formData.desc}
          onChange={handleChange}
          placeholder="Description"
          className={styles.textarea}
          rows="4"
        />

        {/* Image URL Inputs */}
        <input
          type="text"
          name="aiAnalysisImg"
          value={formData.aiAnalysisImg}
          onChange={handleChange}
          placeholder="AI Analysis Image URL"
          className={styles.input}
        />
        <input
          type="text"
          name="alertsImg"
          value={formData.alertsImg}
          onChange={handleChange}
          placeholder="Alerts Image URL"
          className={styles.input}
        />
        <input
          type="text"
          name="dashboardImg"
          value={formData.dashboardImg}
          onChange={handleChange}
          placeholder="Dashboard Image URL"
          className={styles.input}
        />
        <input
          type="text"
          name="reportGenImg"
          value={formData.reportGenImg}
          onChange={handleChange}
          placeholder="Report Generation Image URL"
          className={styles.input}
        />

        {/* View Headings */}
        <input
          type="text"
          name="viewHeading1"
          value={formData.viewHeading1}
          onChange={handleChange}
          placeholder="View Heading 1"
          className={styles.input}
        />
        <input
          type="text"
          name="viewHeading2"
          value={formData.viewHeading2}
          onChange={handleChange}
          placeholder="View Heading 2"
          className={styles.input}
        />

        {/* Submit Button */}
        <button type="submit" className={styles.button} disabled = {loading}>
          {
            loading ? <Spinner color="#FFFFFF" size={20} /> : "Save Changes"
          }  
        </button>
      </form>
    </div>
  );
};

export default Editor;
