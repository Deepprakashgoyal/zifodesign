import PropTypes from "prop-types";
import styles from "./MacBooks.module.css";

const MacBooks = ({ className = "" }) => {
  return (
    <section className={[styles.macBooks, className].join(" ")}>
      <div className={styles.innovationAndImage}>
        <div className={styles.innovation}>
          <div className={styles.innovation1}>
            <div className={styles.innovationStars}>
              <img
                className={styles.innovationStarsChild}
                loading="lazy"
                alt=""
                src="/star-432.svg"
              />
            </div>
            <h3
              className={styles.innovativeCustomizedDesign}
            >{`Innovative Customized Design from Scratch  `}</h3>
            <img
              className={styles.innovationChild}
              loading="lazy"
              alt=""
              src="/star-432.svg"
            />
          </div>
        </div>
        <div className={styles.imageAndShowcase}>
          <div className={styles.parallax}>
            <img
              className={styles.parallex21Icon}
              loading="lazy"
              alt=""
              src="/parallex2-1@2x.png"
            />
            <img
              className={styles.k11Icon}
              loading="lazy"
              alt=""
              src="/k1-1@2x.png"
            />
          </div>
          <div className={styles.macBookShowcase}>
            <img
              className={styles.macBookShowcaseChild}
              loading="lazy"
              alt=""
              src="/frame-13819@2x.png"
            />
          </div>
          <div className={styles.showcaseImage}>
            <div className={styles.macBook}>
              <img
                className={styles.macbookPro16631}
                loading="lazy"
                alt=""
                src="/macbook-pro-16---63-1@2x.png"
              />
              <img
                className={styles.k41Icon}
                loading="lazy"
                alt=""
                src="/k4-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MacBooks.propTypes = {
  className: PropTypes.string,
};

export default MacBooks;
