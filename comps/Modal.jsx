/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectModal, setModal, setModalTwo } from "../store/modalSlice";
import styles from "../styles/modal.module.css";

const Modal = () => {
  const openModal = useSelector(selectModal);
  const dispatch = useDispatch();
  const [pledge, setPledge] = useState(false);
  const [pledgeTwo, setPledgeTwo] = useState(false);
  const [pledgeThree, setPledgeThree] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setModal(false));
    dispatch(setModalTwo(true));
  };
  if (openModal === true) {
    return (
      <div className={styles.container}>
        <div className={styles.bg} />
        <div className={styles.inner_ctn}>
          <main className={styles.main}>
            <header className={styles.header}>
              <h3>Back this project</h3>
              <svg
                onClick={() => dispatch(setModal(false))}
                width="15"
                height="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
                  fill="#000"
                  fillRule="evenodd"
                  opacity="0.5"
                />
              </svg>
            </header>
            <p>
              Want to support us in bringing Mastercraft Bamboo Monitor Riser
              out in the world?
            </p>

            <section className={styles.card_ctn}>
              <div
                className={`${styles.card} ${
                  pledge === true ? styles.active : styles.card
                }`}
              >
                <div className={styles.top}>
                  <div
                    onClick={() => {
                      setPledge(!pledge);
                      setPledgeTwo(false);
                      setPledgeThree(false);
                      dispatch(setModal(false));
                      dispatch(setModalTwo(true));
                    }}
                    className={styles.radio}
                  >
                    {pledge && <div className={styles.check} />}
                  </div>
                  <h2>
                    <span>Pledge with no reward</span>
                  </h2>
                </div>
                <p className={styles.card_info}>
                  You get an ergonomic stand made of natural bamboo. You&apos;ve
                  helped us launch our promotional campaign, and you’ll be added
                  to a special Backer member list.
                </p>
              </div>
              <div
                className={`${styles.card} ${
                  pledgeTwo === true ? styles.active : styles.card
                }`}
              >
                <div className={styles.top}>
                  <div
                    onClick={() => {
                      setPledge(false);
                      setPledgeThree(false);
                      setPledgeTwo(!pledgeTwo);
                    }}
                    className={styles.radio}
                  >
                    {pledgeTwo && <div className={styles.check} />}
                  </div>
                  <h2>
                    <span>Bamboo Stand</span>
                    <span className={styles.pledge}>Pledge $25 or more</span>
                  </h2>
                </div>
                <p className={styles.card_info}>
                  You get an ergonomic stand made of natural bamboo. You&apos;ve
                  helped us launch our promotional campaign, and you’ll be added
                  to a special Backer member list.
                </p>
                <div className={styles.flex}>
                  <h1>101</h1>
                  <p>left</p>
                </div>
                {pledgeTwo === true ? (
                  <>
                    <hr />
                    <div className={styles.input_pledge}>
                      <p>Enter your pledge</p>
                      <form
                        onSubmit={(e) => handleSubmit(e)}
                        className={styles.form}
                      >
                        <div className={styles.input}>
                          <input type="text" required />
                          <p>$</p>
                        </div>
                        <button type="submit">Continue</button>
                      </form>
                    </div>
                  </>
                ) : null}
              </div>
              <div
                className={`${styles.card} ${
                  pledgeThree === true ? styles.active : styles.card
                }`}
              >
                <div className={styles.top}>
                  <div
                    onClick={() => {
                      setPledge(false);
                      setPledgeTwo(false);
                      setPledgeThree(!pledgeThree);
                    }}
                    className={styles.radio}
                  >
                    {pledgeThree && <div className={styles.check} />}
                  </div>
                  <h2>
                    <span>Black Edition Stand</span>
                    <span className={styles.pledge}>Pledge $75 or more</span>
                  </h2>
                </div>
                <p className={styles.card_info}>
                  You get a Black Special Edition computer stand and a personal
                  thank you. You’ll be added to our Backer member list. Shipping
                  is included.
                </p>
                <div className={styles.flex}>
                  <h1>64</h1>
                  <p>left</p>
                </div>
                {pledgeThree === true ? (
                  <>
                    <hr />
                    <div className={styles.input_pledge}>
                      <p>Enter your pledge</p>
                      <form
                        onSubmit={(e) => handleSubmit(e)}
                        className={styles.form}
                      >
                        <div className={styles.input}>
                          <input type="text" required />
                          <p>$</p>
                        </div>
                        <button type="submit">Continue</button>
                      </form>
                    </div>
                  </>
                ) : null}
              </div>
              <div className={styles.card}>
                <div className={styles.top}>
                  <div className={styles.radio}>
                    <div className={styles.check} />
                  </div>
                  <h2>
                    <span>Mahogamy Special Edition</span>
                    <span className={styles.pledge}>Pledge $200 or more</span>
                  </h2>
                </div>
                <p className={styles.card_info}>
                  You get two Special Edition Mahogany stands, a Backer T-Shirt,
                  and a personal thank you. You’ll be added to our Backer member
                  list. Shipping is included.
                </p>
                <div className={styles.flex}>
                  <h1>0</h1>
                  <p>left</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    );
  }
  return null;
};

export default Modal;
