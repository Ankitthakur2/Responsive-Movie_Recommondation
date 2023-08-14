import React, { useState, useEffect } from "react";
import "./movie.css";
import { useParams } from "react-router-dom";
import MovieRating from "../movierating";
export default function Movie() {
  const [moviedetail, setmovie] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setmovie(data));
    // .then((data) => console.log(data));
  };

  return (
    <div>
      <div className="moviedetail">
        <img
          src={`https://image.tmdb.org/t/p/original${
            moviedetail ? moviedetail.backdrop_path : ""
          }`}
          alt="background-pic"
          className="background-pic"
        />
        <div className="second_part">
          <div className="poster-pic">
            <img
              src={`https://image.tmdb.org/t/p/original${
                moviedetail ? moviedetail.poster_path : ""
              }`}
              alt="background-pic"
              className="poster-pic"
            />
          </div>
          <div className="details">
            <div className="movie-title">{moviedetail.original_title}</div>
            <div className="movie-tagline">{moviedetail.tagline}</div>
            <span className="rate-vote">
              {moviedetail.vote_average !== undefined && (
                <span>
                  <MovieRating rating={moviedetail.vote_average.toFixed(1)} />
                </span>
              )}

              <span>({moviedetail.vote_count}) votes</span>
            </span>
            <div className="duration">{moviedetail.runtime} mins</div>
            <div className="date">Release Date: {moviedetail.release_date}</div>
            <div className="genres">
              {moviedetail && moviedetail.genres
                ? moviedetail.genres.map((genre) => (
                    <>
                      <span className="moviegenre" id={genre.id}>
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
            <div className="overview">
              <h2>Overview</h2>
              <p>{moviedetail.overview}</p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="heading">Producton Companies</h2>
      <div className="production_com">
        {moviedetail && moviedetail.production_companies
          ? moviedetail.production_companies.map((company) => (
              <>
                {company.logo_path && (
                  <div className="company_logo">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/original" +
                        company.logo_path
                      }
                    />
                    <div className="com-name"> {company.name} </div>
                  </div>
                )}
              </>
            ))
          : ""}
      </div>
    </div>
  );
}
