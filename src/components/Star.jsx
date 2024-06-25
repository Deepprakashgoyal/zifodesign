import PropTypes from "prop-types";
import styles from "./Star.module.css";

const Star = ({ className = "" }) => {
  return (
    <img
      className={[styles.starIcon, className].join(" ")}
      loading="lazy"
      alt=""
      src="/star.svg"
    />
  );
};

Star.propTypes = {
  className: PropTypes.string,
};

export default Star;
