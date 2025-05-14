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

      {/* genre */}
      {response.genre && (
        <span>
          <strong>Genere: </strong>
          {response.genre}
        </span>
      )}

      {/* platform */}
      {response.platforms && (
        <>
          <p>
            <strong>Disponibile per: </strong>
          </p>
          <ul>
            {response.platforms.map((available, index) => {
              return (
                <li key={index}>
                  <strong>{available.name}</strong>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}
