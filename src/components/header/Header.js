import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="headerLeft">
        <div className="divlink">
          <Link to="/">
            <img
              className="header_icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
              alt="site-icon"
            />
          </Link>
        </div>
        <div className="divlink">
          <Link to="/movies/popular">Popular</Link>
        </div>

        <div className="divlink">
          <Link to="/movies/top_rated">Top Rated</Link>
        </div>
        <div className="divlink">
          <Link to="movies/upcoming">Upcoming</Link>
        </div>
      </div>
    </div>
  );
}
