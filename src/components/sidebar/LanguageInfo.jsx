import styles from "./LanguageInfo.module.css";

function LanguageInfo() {
  return (
    <div className={`mb-medium ${styles.languageInfo}`}>
      {/* <div className={styles.barBox}>
        <div className={`${styles.persian} ${styles.progressBar}`}></div>
        <p className="heading-tertairy">Persian</p>
      </div>
      <div className={styles.barBox}>
        <div className={`${styles.pashto} ${styles.progressBar}`}></div>
        <p className="heading-tertairy">Pashto</p>
      </div> */}
      
      <div className={styles.barBox}>
        <div className={`${styles.english} ${styles.progressBar}`}></div>
        <p className="heading-tertairy">English</p>
      </div>
      <div className={styles.barBox} style={{filter: 'blur(1px)', opacity: '0.5'}}>
        <div className={`${styles.persian} ${styles.progressBar}`}></div>
        <p className="heading-tertairy"></p>
      </div>
    </div>
  );
}

export default LanguageInfo;
