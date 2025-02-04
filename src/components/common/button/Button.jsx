import React, { useState } from "react";
import styles from "./button.module.css";
const Button = ({ title, btnStyles }) => {
  const [showOptions, setShowOptions] = useState(false);
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "",
          url: "",
        })
        .catch((error) => console.error("Sharing failed", error));
    } else {
      setShowOptions(!showOptions);
    }
  };
  return (
    <button className={styles.btn} style={btnStyles} onClick={handleShare}>
      {title}
      {showOptions && (
        <div className={styles.shareOptions}>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href={`https://api.whatsapp.com/send?text=${text} ${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      )}
    </button>
  );
};

export default Button;
