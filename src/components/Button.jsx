import { Link } from "react-router-dom";
import styles from "./Button.module.css";

function Button({ text, type, link, address }) {
  return (
    <>
      {link === "contact" || link === "portfolio" ? (
        <a href={address} target="blank">
          <button
            className={`${styles.btn} ${styles[type]}`}
            style={
              type === "link"
                ? { display: "flex", alignItems: "center", gap: "1rem" }
                : null
            }
          >
            {text}{" "}
            {type === "link" ? (
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            ) : null}
          </button>
        </a>
      ) : (
        <button
          className={`${styles.btn} ${styles[type]}`}
          style={
            type === "link"
              ? { display: "flex", alignItems: "center", gap: "1rem" }
              : null
          }
        >
          {text}{" "}
          {type === "link" ? (
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          ) : null}
        </button>
      )}
    </>
  );
}

export default Button;
