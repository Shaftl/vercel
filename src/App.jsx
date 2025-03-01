import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { lazy, Suspense, useState } from "react";
import Spinner from "./pages/Spinner";
import Navbar from "./components/Navbar";
import PageNotFound from "./pages/PageNotFound";
import Services from "./pages/Services";
import Footer from "./components/Footer";

const HomePage = lazy(() => import("./pages/HomePage"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const History = lazy(() => import("./pages/History"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <div className="layout">
      <div
        className={`shadow ${isMenuOpen ? "activeShadow" : ""}`}
        onClick={() => {
          setIsMenuOpen(false);
          setIsMenuOpen2(false);
        }}
      ></div>

      <div className={`menuBar`}>
        <button
          onClick={() => setIsSideBarOpen((s) => !s)}
          className={`${isSideBarOpen ? "menuBarActive" : ""}`}
        >
          <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        </button>

        <button
          onClick={() => {
            setIsMenuOpen(true);
            setIsMenuOpen2((s) => !s);
          }}
          className={`${isMenuOpen2 ? "menuBar2Activee" : ""}`}
        >
          <i className={`fa fa-bars`} aria-hidden="true"></i>
        </button>
      </div>

      <BrowserRouter>
        <div className={`sidebar ${isSideBarOpen ? "sidbarActive" : ""}`}>
          <Sidebar />
        </div>

        <div className={`content box ${isMenuOpen ? "active" : ""}`}>
          <Suspense fallback={<Spinner isMenuOpen={isMenuOpen} />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/history" element={<History />} />
              <Route path="/services" element={<Services />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </div>
        <div className={`navbar ${isMenuOpen2 ? "menubarActive2" : "not"}`}>
          <Navbar
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            setIsMenuOpen2={setIsMenuOpen2}
          />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
