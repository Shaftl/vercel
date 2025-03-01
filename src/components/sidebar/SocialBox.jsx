import styles from "./SocialBox.module.css";

function SocialBox() {
  return (
    <div className={styles.social} >
      <i className="fa fa-facebook" aria-hidden="true"></i>
      <i className="fa fa-twitter" aria-hidden="true"></i>
      <i className="fa fa-github" aria-hidden="true"></i>
      <i className="fa fa-dribbble" aria-hidden="true"></i>
    </div>
  );
}

export default SocialBox;
