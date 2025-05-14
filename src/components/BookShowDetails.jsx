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
          {response.duration} min
        </p>
      )}

      {/* author */}
      {response.author && (
        <p>
          <strong>Autore: </strong>
          {response.author}
        </p>
      )}

      {/* publication date */}
      {response.publicationDate && (
        <p>
          <strong>Data di pubblicazione: </strong>
          {response.publicationDate}
        </p>
      )}

      {/* ISBN */}
      {response.isbn && (
        <p>
          <strong>ISBN: </strong>
          {response.isbn}
        </p>
      )}
    </div>
  );
}
