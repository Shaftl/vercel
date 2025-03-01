import { NavLink, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar({ isMenuOpen, setIsMenuOpen, setIsMenuOpen2 }) {
  const location = useLocation();
  const pathName = location.pathname.slice(1);

  function handleCloseMenu() {
    setIsMenuOpen(false);
    setIsMenuOpen2(false);
  }

  return (
    <div className={`${isMenuOpen ? styles.active : ""} ${styles.navbar}`}>
      <div className="menuBarBtn">
        <i
          className={`fa fa-bars`}
          aria-hidden="true"
          onClick={() => {
            setIsMenuOpen((s) => !s);
            setIsMenuOpen2((s) => !s);
          }}
        ></i>
      </div>

      <p className={styles.currentSectionText}>
        {pathName ? pathName : "Home"}
      </p>

      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/" onClick={handleCloseMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" onClick={handleCloseMenu}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/history" onClick={handleCloseMenu}>
              History
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={handleCloseMenu}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={handleCloseMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
