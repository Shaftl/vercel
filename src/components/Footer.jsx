import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={`${styles.footer} footer`}>
      <p>&copy; {new Date().getFullYear()} Aliabbas Rahimi</p>
    </div>
  );
}

export default Footer;
