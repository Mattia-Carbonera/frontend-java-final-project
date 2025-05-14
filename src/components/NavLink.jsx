import { NavLink } from "react-router-dom";

export default function NavLinkComponent({ pageTitle, page }) {
  return (
    <nav className="header-nav">
      <ul>
        <li>
          <NavLink to={"/"} className="nav-link">
            <strong>Home</strong>
          </NavLink>
        </li>
        {pageTitle != "Videogames" && ""}
        <li>
          <NavLink
            to={"/videogames"}
            state={{ page: "videogame" }}
            className={
              pageTitle === "Videogames" || page.page === "videogames"
                ? "nav-link prova active-page"
                : "nav-link prova"
            }
          >
            Videogame
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/movies"}
            state={{ page: "film" }}
            className={
              pageTitle === "Film" || page.page === "movies"
                ? "nav-link prova active-page"
                : "nav-link prova"
            }
          >
            Film
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/music"}
            state={{ page: "musica" }}
            className={
              pageTitle === "Musica" || page.page === "songs"
                ? "nav-link prova active-page"
                : "nav-link prova"
            }
          >
            Musica
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/books"}
            state={{ page: "libreria" }}
            className={
              pageTitle === "Libreria" || page.page === "books"
                ? "nav-link prova active-page"
                : "nav-link prova"
            }
          >
            Libreria
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
