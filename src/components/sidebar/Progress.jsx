import styles from "./Progress.module.css";

function Progress({ size, name }) {
  return (
    <div className={styles.progressBox}>
      <p className={`heading-tertairy ${styles.progressText}`}>
        {name} <span>{size}</span>
      </p>
      <div className={styles.progress}>
        <div className={`${styles.back} ${styles.bar}`}></div>
        <div
          className={`${styles.forward} ${styles.bar}`}
          style={{ width: `${size}` }}
        ></div>
      </div>
    </div>
  );
}

export default Progress;
