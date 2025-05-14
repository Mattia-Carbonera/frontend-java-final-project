import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import GameShowDetails from "../components/GameShowDetails.jsx";
import MovieShowDetails from "../components/MovieShowDetails.jsx";
import SongShowDetails from "../components/SongShowDetails.jsx";
import BookShowDetails from "../components/BookShowDetails.jsx";

export default function ShowItemPage() {
  const serverHosting = import.meta.env.VITE_API_BACKEND_URL;

  const location = useLocation();
  const state = location.state || {};
  const { page, id, imgPath } = state;
  const backPage = page === "songs" ? "music" : page;
  console.log(backPage);

  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchHandler = () => {
    setIsLoading(true);
    setHasError(false);

    axios
      .get(serverHosting + page + "/" + id)
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

  useEffect(fetchHandler, []);

  return (
    <div className="show-container container">
      {response.name && <h1>{response.name}</h1>}
      {response.title && <h1>{response.title}</h1>}

      {/* loader */}
      {isLoading && (
        <div className="spinner-border text-primary mt-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      {/* error */}
      {hasError && (
        <div className="error-message mt-5">
          <h2>Oops! Qualcosa è andato storto. 😢</h2>
          <p>Riprova più tardi.</p>
        </div>
      )}

      <div className="show-main-container">
        <div className="show-container-img">
          {response.image && <img src={imgPath + response.image} alt="" />}
          {Object.keys(response).length !== 0 && !response.image && (
            <img src="https://placehold.co/400x600/png" alt="" />
          )}
        </div>

        {/* ... */}
        {page === "videogames" && <GameShowDetails response={response} />}
        {page === "movies" && <MovieShowDetails response={response} />}
        {page === "songs" && <SongShowDetails response={response} />}
        {page === "books" && <BookShowDetails response={response} />}
      </div>

      <div className="back-button">
        <NavLink to={"/" + backPage} state={{ page: backPage }}>
          <img src="/img/back-arrow/hand-arrow.webp" alt="" />
        </NavLink>
      </div>
    </div>
  );
}
