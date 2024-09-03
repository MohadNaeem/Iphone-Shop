import React from "react";
import styles from "./ThumbNail.module.css";

interface ThumbnailProps {
  imageUrl: string;
  altText: string;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ imageUrl, altText }) => {
  return <img src={imageUrl} alt={altText} className={styles.thumbnail} />;
};

export default Thumbnail;
