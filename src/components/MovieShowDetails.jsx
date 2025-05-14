export default function GameShowDetails({ response }) {
  return (
    <div className="show-container-content">
      {/* description */}
      {response.description && (
        <p>
          <strong>Descrizione: </strong>
          {response.description}
        </p>
      )}

      {/* duration */}
      {response.duration && (
        <p>
          <strong>Durata: </strong>
          {response.duration} min.
        </p>
      )}

      {/* relase date */}
      {response.releaseDate && (
        <p>
          <strong>Data di rilascio: </strong>
          {response.releaseDate}
        </p>
      )}

      {/* genres */}
      {response.genres && (
        <>
          <span>
            <strong>Generi: </strong>
          </span>
          <ul>
            {response.genres.map((genre, index) => {
              return (
                <li key={index}>
                  <strong>{genre.name}</strong>
                </li>
              );
            })}
          </ul>
        </>
      )}

      {/* trailer */}
      {response.trailer && (
        <>
          <button
            className="btn btn-light"
            onClick={() => {
              const trailerModal = document.querySelector(".trailer-modal");
              trailerModal.classList.toggle("d-none");
              document.querySelector("video").play();
            }}
          >
            Trailer
          </button>

          <div className="trailer-modal d-none">
            <div className="flexbox">
              <video controls autoplay>
                <source
                  src={"/video/trailer/" + response.trailer}
                  type="video/mp4"
                ></source>
              </video>
            </div>
            <span
              id="close-trailer-modal"
              onClick={() => {
                const trailerModal = document.querySelector(".trailer-modal");
                trailerModal.classList.toggle("d-none");
                const video = document.querySelector("video");
                video.pause();
                video.currentTime = 0;
              }}
            >
              X
            </span>
          </div>
        </>
      )}
    </div>
  );
}
