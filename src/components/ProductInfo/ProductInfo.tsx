// src/components/ProductInfo/ProductInfo.tsx
import React from "react";
import styles from "./ProductInfo.module.css";
import Thumbnail from "../ThumbNail/ThumbNail";

interface ProductInfoProps {
  product: {
    name: string;
    inStock: boolean;
    reviews: {
      score: number;
      total: number;
    };
    description: string;
    images: string[];
  };
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div className={styles.productDetails}>
      <p className={styles.stockStatus}>
        {product.inStock ? "In stock" : "Out of stock"}
      </p>
      <h1 className={styles.productTitle}>{product.name}</h1>
      <ProductReviews score={product.reviews.score} total={product.reviews.total} />
      <ProductDescription description={product.description} />
      <ProductThumbnails images={product.images} />
    </div>
  );
};

const ProductReviews: React.FC<{ score: number; total: number }> = ({
  score,
  total,
}) => (
  <div className={styles.reviews}>
    <span className={styles.reviewScore}>Reviews: {score}/{total}</span>
    <span className={styles.stars}>{"★".repeat(score) + "☆".repeat(total - score)}</span>
  </div>
);

const ProductDescription: React.FC<{ description: string }> = ({
  description,
}) => <p className={styles.description}>{description}</p>;

const ProductThumbnails: React.FC<{ images: string[] }> = ({ images }) => (
  <div className={styles.thumbnails}>
    {images.map((image, index) => (
      <Thumbnail key={index} imageUrl={image} altText={`Product View ${index + 1}`} />
    ))}
  </div>
);

export default ProductInfo;
