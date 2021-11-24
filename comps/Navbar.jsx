/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import { useState } from "react";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  const [burger, setBurger] = useState(true);
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.lhs}>
          <img src="/images/logo.svg" alt="" />
          <div className={styles.hamburger}>
            {burger === true ? (
              <img
                onClick={() => setBurger(false)}
                src="/images/icon-hamburger.svg"
                alt=""
              />
            ) : (
              <img
                onClick={() => setBurger(true)}
                src="/images/icon-close-menu.svg"
                alt=""
              />
            )}
          </div>
        </div>

        <nav
          className={`${styles.rhs} ${
            burger === false ? styles.rhs_active : styles.rhs
          }`}
        >
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Discover</a>
            </li>
            <li>
              <a href="#">Get Started</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
