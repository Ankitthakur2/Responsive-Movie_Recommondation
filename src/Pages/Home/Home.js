import React, { useEffect, useState } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
// import MovieList from "../components/movieList/movieList.js";
import MovieList from "../../components/movieList/movieList";
export default function Home() {
  const [popularmovies, setpopulermovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((result) => result.json())
      .then((data) => setpopulermovies(data.results));
  }, []);

  return (
    <div>
      <Carousel
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        transitionTime={2}
        infiniteLoop={true}
        className="pop"
      >
        {popularmovies.map((movie) => (
          <Link
            to={`/movie/${movie.id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="poster">
              <div className="posterimg">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt="Movie Backdrop"
                />
              </div>

              <div className="title">
                <h1>{movie.original_title}</h1>
              </div>
              <div className="movie-details">
                <div className="rate">
                  <h2>Rating:</h2>
                  {movie.vote_average} <i class="fas fa-star"></i>
                </div>

                <div className="date">
                  <h2>Release date:</h2>
                  {movie.release_date}
                </div>
                <div className="overview">
                  <p>{movie.overview}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
      <MovieList />
    </div>
  );
}
