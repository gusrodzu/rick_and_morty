import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import PathRoutes from "../helpers/Routes.helper";

const NavBar = (props) => {
  const { onSearch } = props;

  return (
    <div className={styles.navBar} >
      <div className={styles.wrapperlink}>
        <Link className={styles.link} to={PathRoutes.HOME}>
          {" "}
          Home
        </Link>
        <Link className={styles.link} to={PathRoutes.ABOUT}>
          {" "}
          About
        </Link>
        <Link className={styles.link} to={PathRoutes.DETAIL}>
          {" "}
          Detail
        </Link>
        <Link className={styles.link} to={PathRoutes.FAVORITES}>
          {" "}
          Favorite
        </Link> 
        <SearchBar onSearch={onSearch}/>
      </div>
    </div>
  );
};

export default NavBar;
