import { Link } from "react-router-dom";
import Button from "../components/Button";

function PageNotFound() {
  document.title = "Aliabbas Rahimi | Page not found";

  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        fontSize: "2.4rem",
        paddingTop: "6rem",
      }}
    >
      <h3 style={{ marginBottom: "2rem" }}>😢 404 Page not found</h3>

      <Link to="/">
        <Button text="Back to home" />
      </Link>
    </div>
  );
}

export default PageNotFound;
