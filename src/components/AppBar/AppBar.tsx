/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./AppBar.module.css";
import AppLogo from "../../assets/appbar/AppLogo.svg";

// MUI Icons
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const AppBar: React.FC = () => {
  return (
    <div className={styles.appBar}>
      <div className={styles.menuIcon}>
        <MenuIcon />
      </div>
      <div className={styles.logo}>
        <img src={AppLogo} alt="App Logo" />
      </div>
      <div className={styles.navLinks}>
        <a href="#">Phones</a>
        <a href="#">Tablets</a>
        <a href="#">Laptops</a>
        <a href="#">Watches</a>
        <a href="#">Drones</a>
      </div>
      <div className={styles.icons}>
        <SearchIcon />
        <FavoriteIcon />
        <div className={styles.cartBadge}>
          <ShoppingCartIcon />
          <span>1</span>
        </div>
        <AccountCircleIcon className={styles.profileIcon} />{" "}
        {/* Add class here */}
      </div>
    </div>
  );
};

export default AppBar;
