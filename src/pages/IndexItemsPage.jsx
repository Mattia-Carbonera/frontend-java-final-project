import { useLocation } from "react-router-dom";
import Card from "../components/Card.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ShowItemPage() {
  const serverHosting = import.meta.env.VITE_API_BACKEND_URL;

  const location = useLocation();
  const page = location.state || {};
  const backPage = location.state || {};

  let pageTitle;
  let imgPath;
  console.log(page);

  if (page.page == "videogame" || backPage.page == "videogames") {
    pageTitle = "videogames";
    imgPath = "/img/games-img/";
  }
  if (page.page == "film" || backPage.page == "movies") {
    pageTitle = "movies";
    imgPath = "/img/movies-img/";
  }
  if (page.page == "musica" || page.page == "music") {
    pageTitle = "songs";
    imgPath = "/img/songs-img/";
    console.log(pageTitle);
  }
  if (page.page == "libreria" || backPage.page == "books") {
    pageTitle = "books";
    imgPath = "/img/books-img/";
  }

  const [response, setResponse] = useState({});
  const [inputSerach, setInputSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchHandler = () => {
    setIsLoading(true);
    setHasError(false);
    // console.log(page);

    axios
      .get(serverHosting + pageTitle)
      .then((res) => {
        console.log(res.data);
        setResponse(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setHasError(true);
        setIsLoading(false);
      });

    document.getElementById("input-search").value = "";
  };

  const fetchSearchHandler = (key) => {
    setIsLoading(true);
    setHasError(false);

    axios
      .get(serverHosting + pageTitle + "/search?" + key + "=" + inputSerach)
      .then((res) => {
        console.log(res.data);
        setResponse(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setHasError(true);
        setIsLoading(false);
      });
  };

  const resetButtonHandler = () => {
    fetchHandler();
    document.getElementById("input-search").value = "";
  };

  // fetch
  useEffect(fetchHandler, [pageTitle]);

  // responsive nav modal
  useEffect(() => {
    document.getElementById("nav-modal").classList.add("d-none");
    document.getElementById("header").classList.remove("margin-modal");
  }, [pageTitle]);

  return (
    <div className="show-item-page container">
      {/* title */}
      {(page.page === "videogame" && <h1>Sezione Videogiochi</h1>) ||
        (page.page === "videogames" && <h1>Sezione Videogiochi</h1>)}

      {(page.page === "movies" && <h1>Sezione Film</h1>) ||
        (page.page === "film" && <h1>Sezione Film</h1>)}

      {(page.page === "music" && <h1>Sezione Musica</h1>) ||
        (page.page === "musica" && <h1>Sezione Musica</h1>)}

      {(page.page === "books" && <h1>Sezione Libri</h1>) ||
        (page.page === "libreria" && <h1>Sezione Libri</h1>)}

      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <div className="d-flex navbar-container" role="search">
            <input
              id="input-search"
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
              onChange={(e) => {
                setInputSearch(e.target.value);
              }}
            />
            <button
              className="btn btn-primary me-2"
              type="submit"
              onClick={
                pageTitle === "videogames" || pageTitle === "songs"
                  ? () => fetchSearchHandler("name")
                  : () => fetchSearchHandler("title")
              }
            >
              Cerca
            </button>
            <button className="btn btn-secondary" onClick={resetButtonHandler}>
              Resetta
            </button>
          </div>
        </div>
      </nav>

      <div className="show-page-card-container">
        {isLoading === true && (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        {/* ! imgPath */}
        {response.length > 0 && isLoading === false
          ? response.map((item) => {
              return (
                <Card
                  key={item.id}
                  item={item}
                  page={page}
                  backPage={pageTitle}
                  imgPath={imgPath}
                />
              );
            })
          : null}
        {response.length === 0 && isLoading === false && (
          <div className="no-result">
            <h1>Non ci sono risultati</h1>
          </div>
        )}

        {/* error */}
        {hasError && (
          <div className="error-message">
            <h2>Oops! Qualcosa è andato storto. 😢</h2>
            <p>Riprova più tardi.</p>
          </div>
        )}
      </div>
    </div>
  );
}
