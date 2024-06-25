import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <section className={[styles.footer, className].join(" ")}>
      <div className={styles.showcaseTitle}>
        <div className={styles.seeFewWrapper}>
          <h1 className={styles.seeFew}>{`See few  `}</h1>
        </div>
        <div className={styles.showcaseImages}>
          <img
            className={styles.macbookPro16621}
            loading="lazy"
            alt=""
            src="/macbook-pro-16---62-1@2x.png"
          />
          <img
            className={styles.desktop71}
            loading="lazy"
            alt=""
            src="/desktop--7-1@2x.png"
          />
          <img
            className={styles.macbookPro16671}
            loading="lazy"
            alt=""
            src="/macbook-pro-16---67-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
