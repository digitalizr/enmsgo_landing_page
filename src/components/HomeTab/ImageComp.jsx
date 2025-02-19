import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "./ImageComp.module.css"; // Import styles

const ImageComp = ({ image }) => {
  return (
    <div className={styles.imageWrapper}>
      <LazyLoadImage
        alt={image.alt}
        src={image.src}
        effect="blur" 
        className={styles.image}
      />
    </div>
  );
};

export default ImageComp;
