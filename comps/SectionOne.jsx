/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setModal } from "../store/modalSlice";
import style from "../styles/section.module.css";

const SectionOne = () => {
  const [bookmark, setBookmark] = useState("Bookmark");
  const [book, setBook] = useState(false);
  const dispatch = useDispatch();
  if (typeof window !== "undefined") {
    return (
      <div className={style.wrapper}>
        <div className={style.inner_c}>
          <section className={style.section_one}>
            <div className={style.mastercraft_logo}>
              <img src="/images/logo-mastercraft.svg" alt="" />
            </div>
            <h1>Mastercraft Bamboo Monitor Riser</h1>
            <p>
              A beautiful & handcrafted monitor stand to reduce neck and eye
              strain.
            </p>
            <div className={style.back_btn}>
              <button onClick={() => dispatch(setModal(true))} type="button">
                Back this project
              </button>
              <button
                onClick={() => {
                  setBook(!book);
                  if (book) {
                    setBookmark("Bookmark");
                  } else {
                    setBookmark("Bookmarked");
                  }
                }}
                type="button"
              >
                {book === false ? (
                  <span>
                    <img src="/images/icon-bookmark.svg" alt="" />
                  </span>
                ) : (
                  <span>
                    <svg
                      width="56"
                      height="56"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <circle
                          fill="hsl(176, 72%, 28%)"
                          cx="28"
                          cy="28"
                          r="28"
                        />
                        <path fill="#fff" d="M23 19v18l5-5.058L33 37V19z" />
                      </g>
                    </svg>
                  </span>
                )}
                <span className={`${style.text} ${book ? style.active_text : style.text}`}>{window.innerWidth > 500 ? bookmark : null}</span>
              </button>
            </div>
          </section>
          <section className={style.section_two}>
            <div className={style.stats}>
              <div className={style.info}>
                <h1>$89,914</h1>
                <p>of $100,000 backed</p>
              </div>
              <hr />
              <div className={style.info}>
                <h1>5,007</h1>
                <p>total backers</p>
              </div>
              <hr />
              <div className={style.info}>
                <h1>56</h1>
                <p>days left</p>
              </div>
            </div>

            <div className={style.progress_bar}>
              <div className={style.progress} />
            </div>
          </section>
        </div>
      </div>
    );
  }
  return null;
};

export default SectionOne;
