import styles from "./Star.module.css";

function Star({ rating }) {
  return (
    <div className={styles.stars}>
      <i
        className="fa fa-star"
        style={
          rating >= 1
            ? { color: "var(--primary-color)" }
            : { color: "rgba(43, 43, 53, 0.98)" }
        }
        aria-hidden="true"
      ></i>
      <i
        className="fa fa-star"
        style={
          rating >= 2
            ? { color: "var(--primary-color)" }
            : { color: "rgba(43, 43, 53, 0.98)" }
        }
        aria-hidden="true"
      ></i>
      <i
        className="fa fa-star"
        style={
          rating >= 3
            ? { color: "var(--primary-color)" }
            : { color: "rgba(43, 43, 53, 0.98)" }
        }
        aria-hidden="true"
      ></i>
      <i
        className="fa fa-star"
        style={
          rating >= 4
            ? { color: "var(--primary-color)" }
            : { color: "rgba(43, 43, 53, 0.98)" }
        }
        aria-hidden="true"
      ></i>
      <i
        className="fa fa-star"
        style={
          rating >= 5
            ? { color: "var(--primary-color)" }
            : { color: "rgba(43, 43, 53, 0.98)" }
        }
        aria-hidden="true"
      ></i>
    </div>
  );
}

export default Star;
