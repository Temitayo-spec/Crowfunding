/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import styles from "../styles/info.module.css";

const About = () => {
  return (
    <div className={styles.wrapper}>
      {/* eslint-disable-next-line no-underscore-dangle */}
      <div className={styles._inner}>
        <header className={styles.header}>
          <h3>About this project</h3>
          <p>
            <span>
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
              platform that elevates your screen to a more comfortable viewing
              height. Placing your monitor at eye level has the potential to
              improve your posture and make you more comfortable while at work,
              helping you stay focused on the task at hand.
            </span>
            <span>
              <br />
              Featuring artisan craftsmanship, the simplicity of design creates
              extra desk space below your computer to allow notepads, pens, and
              USB sticks to be stored under the stand.
            </span>
          </p>
        </header>
        <div className={styles.card_container}>
          <div className={styles.card}>
            <h2>
              <span>Bamboo Stand</span>
              <span className={styles.pledge}>Pledge $25 or more</span>
            </h2>
            <p className={styles.card_info}>
              You get an ergonomic stand made of natural bamboo. You&apos;ve
              helped us launch our promotional campaign, and you’ll be added to
              a special Backer member list.
            </p>
            <div className={styles.select}>
              <div className={styles.flex}>
                <h1>101</h1>
                <p>left</p>
              </div>
              <button type="button">Select Reward</button>
            </div>
          </div>
          <div className={styles.card}>
            <h2>
              <span>Black Edition Stand</span>
              <span className={styles.pledge}>Pledge $75 or more</span>
            </h2>
            <p className={styles.card_info}>
              You get a Black Special Edition computer stand and a personal
              thank you. You’ll be added to our Backer member list. Shipping is
              included.
            </p>
            <div className={styles.select}>
              <div className={styles.flex}>
                <h1>64</h1>
                <p>left</p>
              </div>
              <button type="button">Select Reward</button>
            </div>
          </div>
          <div className={styles.card}>
            <h2>
              <span>Mahogamy Special Edition</span>
              <span className={styles.pledge}>Pledge $200 or more</span>
            </h2>
            <p className={styles.card_info}>
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you. You’ll be added to our Backer member list.
              Shipping is included.
            </p>
            <div className={styles.select}>
              <div className={styles.flex}>
                <h1>0</h1>
                <p>left</p>
              </div>
              <button type="button">Out of Stock</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
