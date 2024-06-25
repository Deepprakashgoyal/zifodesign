import PropTypes from "prop-types";
import styles from "./Copyright.module.css";

const Copyright = ({ className = "" }) => {
  return (
    <section className={[styles.copyright, className].join(" ")}>
      <div className={styles.copyrightContent}>
        <div className={styles.superchargeYourWebsiteParent}>
          <h1 className={styles.superchargeYourWebsiteContainer}>
            <p className={styles.supercharge}>supercharge</p>
            <p className={styles.yourWebsite}>your website</p>
          </h1>
          <div className={styles.makeYourDesignReadyWithCrWrapper}>
            <div className={styles.makeYourDesign}>
              make your design ready with creative thoughts
            </div>
          </div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.contactTalk}>
            <button className={styles.linkRelative}>
              <div className={styles.contactUs}>Contact Us</div>
            </button>
            <button className={styles.linkRelative1}>
              <div className={styles.talkWithUs}>Talk with Us</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

Copyright.propTypes = {
  className: PropTypes.string,
};

export default Copyright;
