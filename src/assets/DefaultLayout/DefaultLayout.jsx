import { NavLink, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavLinkComponent from "../../components/NavLink";

export default function DefaultLayout({ children }) {
  const location = useLocation();
  const page = location.state || {};
  let pageTitle;

  if (page.page == "videogame" || page.page == "videogames") {
    pageTitle = "Videogames";
  }
  if (page.page == "film" || page.page == "movies") {
    pageTitle = "Film";
  }
  if (page.page == "musica" || page.page == "music") {
    pageTitle = "Musica";
  }
  if (page.page == "libreria" || page.page == "books") {
    pageTitle = "Libreria";
  }

  const modalNavBtnHandler = () => {
    const navModal = document.getElementById("nav-modal");
    const header = document.getElementById("header");

    if (navModal.classList.contains("d-none")) {
      navModal.classList.remove("d-none");
      header.classList.add("margin-modal");
    } else {
      navModal.classList.add("d-none");
      header.classList.remove("margin-modal");
    }
  };

  return (
    <>
      <header>
        <div className="header-container" id="header">
          <div className="header-logo">
            <a href="/">
              <div className="header-img">
                <img src="/img/logo/logo.PNG" alt="" />
              </div>
            </a>
            <h2>{pageTitle}</h2>
          </div>

          <div className="nav-link-desktop">
            <NavLinkComponent pageTitle={pageTitle} page={page} />
          </div>

          <div className="nav-link-mobile">
            <div className="open-nav-modal">
              <div
                className="hamburger"
                onClick={() => {
                  modalNavBtnHandler();
                }}
              >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
            <div id="nav-modal" className="d-none">
              <NavLinkComponent pageTitle={pageTitle} page={page} />
            </div>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <div className="footer-bottom">
          <p>&copy; 2025 Javastream. All rights reserved.</p>
          <p>Powered by Boolflix & BoolB&B</p>
        </div>
      </footer>
    </>
  );
}
