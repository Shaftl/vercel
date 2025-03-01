import styles from "./SelfInfo.module.css";

function SelfInfo() {
  return (
    <div className={`mb-medium ${styles.selfInfo}`}>
      <p>
        Residence: <span>UK</span>
      </p>
      <p>
        Age: <span>18</span>
      </p>
    </div>
  );
}

export default SelfInfo;
