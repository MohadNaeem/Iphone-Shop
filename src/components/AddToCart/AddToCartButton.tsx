import React from "react";
import styles from "./AddToCartButton.module.css";

interface AddToCartButtonProps {
  product: {
    price: number;
  };
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  return (
    <div className={styles.stickyBar}>
      <ViewAll />
      <Pagination currentPage={1} totalPages={3} />
      <CartSection price={product.price} />
    </div>
  );
};

const ViewAll: React.FC = () => (
  <div className={styles.viewAll}>
    <span className={styles.viewAllIcon}>⬛</span>
    <span className={styles.viewAllText}>VIEW ALL</span>
  </div>
);

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => (
  <div className={styles.pagination}>
    <span className={styles.pageNumber}>
      {currentPage.toString().padStart(2, "0")}
    </span>
    <span className={styles.pageDivider}></span>
    <span className={styles.pageNumber}>
      {totalPages.toString().padStart(2, "0")}
    </span>
  </div>
);

interface CartSectionProps {
  price: number;
}

const CartSection: React.FC<CartSectionProps> = ({ price }) => (
  <div className={styles.cartSection}>
    <button className={styles.addToCartButton}>
      <span className={styles.cartIcon}>🛒</span>
      <span className={styles.addToCartText}>ADD TO CART</span>
    </button>
    <span className={styles.price}>${price}</span>
  </div>
);

export default AddToCartButton;
