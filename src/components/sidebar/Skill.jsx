import styles from "./Skill.jsx.module.css";

function Skill({ title, cv }) {
  return (
    <div className={`${styles.skill} ${cv === "cv" ? styles.CVLink : ""}`}>
      {cv === "cv" ? (
        <i className={`fa fa-download ${styles.check}`} aria-hidden="true"></i>
      ) : (
        <i className={`fa fa-check ${styles.check}`} aria-hidden="true"></i>
      )}
      <p>{title}</p>
    </div>
  );
}

export default Skill;
