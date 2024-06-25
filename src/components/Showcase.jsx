import PropTypes from "prop-types";
import styles from "./Showcase.module.css";

const Showcase = ({ className = "" }) => {
  return (
    <div className={[styles.showcase, className].join(" ")}>
      <div className={styles.showcaseChild} />
    </div>
  );
};

Showcase.propTypes = {
  className: PropTypes.string,
};

export default Showcase;
