import PropTypes from "prop-types";
import styles from "./FooterContent.module.css";

const FooterContent = ({ className = "" }) => {
  return (
    <section className={[styles.footerContent, className].join(" ")}>
      <div className={styles.footerLinks}>
        <h1 className={styles.foods}>{`foods,  `}</h1>
      </div>
      <div className={styles.divFlex}>
        <div className={styles.macBookPair}>
          <img
            className={styles.macbookPro16731}
            loading="lazy"
            alt=""
            src="/macbook-pro-16---73-1@2x.png"
          />
          <div className={styles.macbookPro16181Wrapper}>
            <img
              className={styles.macbookPro16181}
              loading="lazy"
              alt=""
              src="/macbook-pro-16---18-1@2x.png"
            />
          </div>
          <div className={styles.macBookPairChild} />
        </div>
        <div className={styles.soundCategory}>
          <div className={styles.sound}>
            <div className={styles.soundMacBook}>
              <h1 className={styles.sounds}>sounds,</h1>
            </div>
            <img
              className={styles.macbookPro161811}
              loading="lazy"
              alt=""
              src="/macbook-pro-16---18-1-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FooterContent.propTypes = {
  className: PropTypes.string,
};

export default FooterContent;
