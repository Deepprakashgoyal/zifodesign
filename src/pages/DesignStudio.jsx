import FrameComponent from "../components/FrameComponent";
import Supercharge from "../components/Supercharge";
import MacBooks from "../components/MacBooks";
import Footer from "../components/Footer";
import FooterContent from "../components/FooterContent";
import Copyright from "../components/Copyright";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./DesignStudio.module.css";

const DesignStudio = () => {
  return (
    <div className={styles.designStudio}>
      <section className={styles.foods}>
        <div className={styles.frameParent}>
          <FrameComponent />
          <Supercharge />
        </div>
      </section>
      <MacBooks />
      <section className={styles.logotypesWrapper}>
        <img
          className={styles.logotypesIcon}
          loading="lazy"
          alt=""
          src="/logotypes.svg"
        />
      </section>
      <Footer />
      <FooterContent />
      <Copyright />
      <footer className={styles.footer}>
        <FrameComponent1 />
      </footer>
    </div>
  );
};

export default DesignStudio;
