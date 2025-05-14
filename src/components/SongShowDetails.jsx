export default function GameShowDetails({ response }) {
  return (
    <div className="show-container-content">
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

      {/* artist */}
      {response.artist && (
        <p>
          <strong>Artista: </strong>
          {response.artist}
        </p>
      )}

      {/* album */}
      {response.album && (
        <p>
          <strong>Album: </strong>
          {response.album}
        </p>
      )}
    </div>
  );
}
