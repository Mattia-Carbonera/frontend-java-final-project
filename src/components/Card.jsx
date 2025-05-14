import { NavLink } from "react-router-dom";

export default function card({ item, page, imgPath, backPage }) {
  let pageTitle;

  if (page.page == "videogame" || backPage == "videogames") {
    pageTitle = "videogames";
    console.log(backPage);
  }
  if (page.page == "film" || backPage == "movies") {
    pageTitle = "movies";
  }
  if (page.page == "musica" || backPage == "songs") {
    pageTitle = "songs";
  }
  if (page.page == "libreria" || backPage == "books") {
    pageTitle = "books";
  }

  return (
    <NavLink
      to={"/" + pageTitle + "/item/" + item.id}
      className="card"
      state={{ id: item.id, page: pageTitle, imgPath: imgPath }}
    >
      <div className="card-img-container">
        {item.image && (
          <img
            className={pageTitle === "songs" ? "music-img" : "card-img"}
            src={imgPath + item.image}
            alt="image"
          />
        )}
        {!item.image && (
          <img
            src="https://placehold.co/400x600/png"
            alt="image"
            className={pageTitle === "songs" ? "music-img" : "card-img"}
          />
        )}
      </div>
      <div className="card-body">
        <h6>{item.name && item.name}</h6>
        <h6>{item.title && item.title}</h6>
      </div>
    </NavLink>
  );
}
