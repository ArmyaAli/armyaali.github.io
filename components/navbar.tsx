import React from "react";
import styles from "../styles/Navbar.module.css";

export const Navbar = () => {
  return (
    <div>
      <nav className={"navbar navbar-dark bg-dark"}>
        <span className={styles.white + " " + ".navbar-brand"}>
          Ali's Website
        </span>
      </nav>
    </div>
  );
};
