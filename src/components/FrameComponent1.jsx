import Showcase from "./Showcase";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={[styles.showcaseParent, className].join(" ")}>
      <Showcase />
      <div className={styles.rights}>
        <div className={styles.allRightsReserved}>All rights reserved</div>
        <div className={styles.legalLinks}>
          <b className={styles.docs}>Docs</b>
          <b className={styles.support}>Support</b>
          <a className={styles.privacy}>Privacy</a>
          <b className={styles.terms}>Terms</b>
          <b className={styles.releases}>Releases</b>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
