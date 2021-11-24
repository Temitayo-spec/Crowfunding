/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import React from "react";
import styles from "../styles/default.module.css";
import Navbar from "../comps/Navbar";
import SectionOne from "../comps/SectionOne";
import About from "../comps/About";
import Modal from "../comps/Modal"
import ModalTwo from "../comps/ModalTwo";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Modal />
      <ModalTwo />
      <Navbar />
      <div className={styles.reverse}>
        <About />
        <SectionOne />
      </div>
    </div>
  );
};

export default Home;
