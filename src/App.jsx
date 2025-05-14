import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./assets/DefaultLayout/DefaultLayout";
import HomePage from "./pages/HomePage";
import IndexItemsPage from "./pages/IndexItemsPage";
import ShowPage from "./pages/ShowPage";

// import VideogamePage from "./pages/VideogamePage";
// import MoviesPage from "./pages/MoviePage";
// import MusicPage from "./pages/MusicPage";
// import BooksPage from "./pages/BooksPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index Component={HomePage} />
        <Route Component={DefaultLayout}>
          <Route path="/videogames" Component={IndexItemsPage} />
          <Route path="/movies" Component={IndexItemsPage} />
          <Route path="/music" Component={IndexItemsPage} />
          <Route path="/books" Component={IndexItemsPage} />

          <Route path="videogames/item/:id" Component={ShowPage} />
          <Route path="movies/item/:id" Component={ShowPage} />
          <Route path="songs/item/:id" Component={ShowPage} />
          <Route path="books/item/:id" Component={ShowPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
