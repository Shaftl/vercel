import styles from "./Spinner.module.css";

function Spinner({ isMenuOpen }) {
  return (
    <div className={`${isMenuOpen ? styles.activeS : ""} ${styles.loader}`}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default Spinner;
