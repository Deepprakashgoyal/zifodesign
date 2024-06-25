import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <header className={[styles.headerFlexWrapper, className].join(" ")}>
      <div className={styles.headerFlex}>
        <div className={styles.studioName}>
          <a className={styles.designStudio}>Design Studio</a>
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
            <a className={styles.scheduleCall}>Schedule Call</a>
          </button>
          <button className={styles.linkRelative3}>
            <div className={styles.contactUs}>Contact Us</div>
          </button>
        </div>
      </div>
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
