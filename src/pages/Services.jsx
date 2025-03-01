import { Link } from "react-router-dom";
import Button from "../components/Button";

function Services() {
  document.title = "Aliabbas Rahimi | Services";

  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        fontSize: "2.4rem",
        paddingTop: "6rem",
      }}
    >
      <h3 style={{ marginBottom: "2rem" }}>
        😢 This page is under construction!
      </h3>

      <Link to="/">
        <Button text="Back to home" />
      </Link>
    </div>
  );
}

export default Services;
