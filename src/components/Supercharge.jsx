import Star from "./Star";
import FrameComponent2 from "./FrameComponent2";
import PropTypes from "prop-types";
import styles from "./Supercharge.module.css";

const Supercharge = ({ className = "" }) => {
  return (
    <div className={[styles.supercharge, className].join(" ")}>
      <div className={styles.divFlex}>
        <div className={styles.designAndUX}>
          <div className={styles.icon}>
            <div className={styles.uXIcon}>
              <img
                className={styles.clipPathGroup}
                loading="lazy"
                alt=""
                src="/clip-path-group@2x.png"
              />
            </div>
            <div className={styles.designShapes}>
              <div className={styles.designShapesInner}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.frameItem} />
                  <div className={styles.frameInner} />
                </div>
              </div>
              <h1 className={styles.and}>and</h1>
            </div>
            <div className={styles.uXDesign}>
              <div className={styles.frameParent}>
                <div className={styles.vectorParent}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <h1 className={styles.ux}>UX</h1>
                </div>
                <div className={styles.vectorWrapper}>
                  <img
                    className={styles.vectorIcon1}
                    loading="lazy"
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contactLink}>
            <div className={styles.uniqueUiuxDesign}>
              Unique UI/UX design for Websites
            </div>
          </div>
        </div>
        <img className={styles.divFlexChild} alt="" src="/star-430.svg" />
        <div className={styles.contactLink1}>
          <a href="https://calendly.com/zifodesign" className={styles.linkRelative}>
            <div className={styles.contactUs}>Contact Us</div>
          </a>
        </div>
        <Star />
      </div>
      <FrameComponent2 />
    </div>
  );
};

Supercharge.propTypes = {
  className: PropTypes.string,
};

export default Supercharge;
