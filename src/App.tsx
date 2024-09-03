import React from "react";
import AppBar from "./components/AppBar/AppBar";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import ProductOptions from "./components/ProductOptions/ProductOptions";
import AddToCartButton from "./components/AddToCart/AddToCartButton";
import { product } from "./components/Data/product";
import styles from "./App.module.css";

const App: React.FC = () => {
  return (
    <div>
      <AppBar />
      <div className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.productInfo}>
            <ProductInfo product={product} />
          </div>
          <div className={styles.productImage}>
            <img src={product.images[0]} alt={product.name} />
          </div>
          <div className={styles.productOptions}>
            <ProductOptions product={product} />
          </div>
        </div>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default App;
