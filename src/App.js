import "./styles.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./Pages/Home/Home.js";
import MovieList from "./components/movieList/movieList.js";
import Movie from "./Pages/moviedetail/movie.js";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="movie/:id" element={<Movie />} />

          <Route path="movies/:type" element={<MovieList />} />

          <Route path="/*" element={<h1>Error Page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}
