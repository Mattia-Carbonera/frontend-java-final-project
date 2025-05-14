import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  const myRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const container = entry.target;
          const titles = container.querySelectorAll(
            ".title-1, .title-2, .title-3"
          );

          if (entry.isIntersecting) {
            titles.forEach((title, index) => {
              setTimeout(() => {
                title.style.display = "block";
              }, (index + 1) * 400);
            });
          } else {
            // titles.forEach((title) => {
            //   title.style.display = "none";
            // });
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    const containers = document.querySelectorAll(".observe-container");
    containers.forEach((container) => observer.observe(container));

    return () => {
      containers.forEach((container) => observer.unobserve(container));
    };
  }, []);

  return (
    <div className="home-page-container">
      {/* section 1 */}
      <div className="home-page-section container-1">
        <div className="container-1-main-content">
          <div className="container-1-content">
            <div className="home-page-section-title">
              <div className="logo-img-container">
                <img src="/img/logo/logo.PNG" alt="" />
              </div>
              <h1>Javastream</h1>
              <p>
                <strong>L'intrattenimento a portata di click!</strong>
              </p>
            </div>
            <div className="home-page-section-content">
              <p>Esplora Giochi, Film, Musica e libri.</p>
            </div>
          </div>
        </div>

        <div className="container-1-navbar">
          <ul>
            <li>
              <a href="#container-2">Videogiochi</a>
            </li>
            <div className="container-1-line"></div>
            <li>
              <a href="#container-3">Film</a>
            </li>
            <div className="container-1-line"></div>
            <li>
              <a href="#container-4">Musica</a>
            </li>
            <div className="container-1-line"></div>
            <li>
              <a href="#container-5">Libri</a>
            </li>
          </ul>
        </div>

        <div className="bg-1">
          <img src="/img/background-homepage/pngegg.png" alt="" />
        </div>
      </div>

      {/* section 2 */}
      <div
        ref={myRef}
        className="home-page-section container-2 observe-container"
        id="container-2"
      >
        <div className="container-2-main-content">
          <div className="container-2-title">
            <h1>Videogiochi</h1>
          </div>
          <div className="container-2-content">
            <p>Scopri i migliori videogiochi del momento.</p>
          </div>
          <NavLink
            to={"/videogames"}
            state={{ page: "videogame" }}
            className="btn btn-primary"
          >
            Esplora
          </NavLink>
        </div>
        <div className="bg-2">
          <img src="/img/background-homepage/game.png" alt="" />
        </div>

        <div className="example-title">
          <div className="title-1">
            <img src="/img/placeholder-img/callofduty.jpg" alt="call-of-duty" />
          </div>
          <div className="title-2">
            <img src="/img/placeholder-img/hogwarts.avif" alt="hogwarts" />
          </div>
          <div className="title-3">
            <img src="/img/placeholder-img/fc25.jpeg" alt="FC-25" />
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div
        className="home-page-section container-3 observe-container"
        id="container-3"
      >
        <div className="container-3-main-content">
          <div className="container-3-title">
            <h1>Film</h1>
          </div>
          <div className="container-3-content">
            <p>Guarda i grandi successi del cinema.</p>
          </div>
          <NavLink
            to={"/movies"}
            state={{ page: "film" }}
            className="btn btn-primary"
          >
            Esplora
          </NavLink>
        </div>
        <div className="bg-3">
          <img src="/img/background-homepage/movie.png" alt="" />
        </div>

        <div className="example-title">
          <div className="title-1">
            <img src="/img/movies-img/avatar.JPG" alt="Avatar" />
          </div>
          <div className="title-2">
            <img src="/img/movies-img/matrix.jpg" alt="Matrix" />
          </div>
          <div className="title-3">
            <img src="/img/movies-img/up.jpg.webp" alt="UP" />
          </div>
        </div>
      </div>

      {/* section 4 */}
      <div
        className="home-page-section container-4 observe-container"
        id="container-4"
      >
        <div className="container-4-main-content">
          <div className="container-4-title">
            <h1>Musica</h1>
          </div>
          <div className="container-4-content">
            <p>Ascolta le più belle canzoni.</p>
          </div>
          <NavLink
            to={"/music"}
            state={{ page: "musica" }}
            className="btn btn-primary"
          >
            Esplora
          </NavLink>
        </div>
        <div className="bg-4">
          <img src="/img/background-homepage/music.png" alt="" />
        </div>

        <div className="example-title">
          <div className="title-1">
            <img
              src="/img/songs-img/smell-like-teen-spirit.jpg"
              alt="Smell like teen spirit"
            />
          </div>
          <div className="title-2">
            <img src="/img/songs-img/shallow.jpeg" alt="Shallow" />
          </div>
          <div className="title-3">
            <img src="/img/songs-img/believer.jpeg" alt="Believer" />
          </div>
        </div>
      </div>

      {/* section 5 */}
      <div
        className="home-page-section container-5 observe-container"
        id="container-5"
      >
        <div className="container-5-main-content">
          <div className="container-5-title">
            <h1>Libri</h1>
          </div>
          <div className="container-5-content">
            <p>Entra nella libreria e leggi i titoli più gettonati.</p>
          </div>
          <NavLink
            to={"/books"}
            state={{ page: "libreria" }}
            className="btn btn-primary"
          >
            Esplora
          </NavLink>
        </div>
        <div className="bg-5">
          <img src="/img/background-homepage/books.png" alt="" />
        </div>

        <div className="example-title">
          <div className="title-1">
            <img src="/img/books-img/dracula.jpg" alt="Dracula" />
          </div>
          <div className="title-2">
            <img
              src="/img/books-img/il-codice-da-vinci.jpg"
              alt="Il codice da vinci"
            />
          </div>
          <div className="title-3">
            <img
              src="/img/books-img/hp-pietra-filosofale.jpg"
              alt="Harry Potter"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
