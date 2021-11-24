/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useDispatch, useSelector } from "react-redux";
import { selectModalTwo, setModalTwo } from "../store/modalSlice";
import styles from "../styles/modaltwo.module.css";

const ModalTwo = () => {
  const openModalTwo = useSelector(selectModalTwo);
  const dispatch = useDispatch();
  if (openModalTwo === true) {
    return (
      <div className={styles.container}>
        <div className={styles.bg} />
        <div className={styles.inner_ctn}>
          <main className={styles.main}>
            <img src="/images/icon-check.svg" alt="" />
            <h3>Thanks for your support!</h3>
            <p>
              Your pledge brings us one step closer to sharing Mastercraft
              Bamboo Monitor Riser worldwide. You will get an email once our
              campaign is completed.
            </p>
            <button onClick={() => dispatch(setModalTwo(false))} type="button">
              Got it!
            </button>
          </main>
        </div>
      </div>
    );
  }
  return null;
};

export default ModalTwo;
