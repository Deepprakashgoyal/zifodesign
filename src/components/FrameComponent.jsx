import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <header className={[styles.headerFlexWrapper, className].join(" ")}>
      <div className={styles.headerFlex}>
        <div className={styles.studioName}>
          <a href="/" className={styles.designStudio}>Zifo Design</a>
        </div>
        <div className={styles.studioCallLinks}>
          <div className={styles.linkRelative}>
            <a className={styles.showcase}>Showcase</a>
          </div>
          <div className={styles.linkRelative1}>
            <a className={styles.blog}>Blog</a>
          </div>
        </div>
        <div className={styles.studioCallLinks1}>
          <button className={styles.linkRelative2}>
            <a href="https://calendly.com/zifodesign" className={styles.scheduleCall}>Schedule Call</a>
          </button>
          <a href="https://calendly.com/zifodesign" className={styles.linkRelative3}>
            <div className={styles.contactUs}>Contact Us</div>
          </a>
        </div>
      </div>
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
