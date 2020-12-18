import React, { useState, useEffect } from "react";
import axios from "./axios";
import req from "./request";
import "./Banner.css";
import { Link } from "react-router-dom";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resp = await axios.get(req.fetchOriginals);
      setMovie(
        resp.data.results[
          Math.floor(Math.random() * resp.data.results.length - 1)
        ]
      );
      return resp;
    }
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="content">
        <h1 className="title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="buttons">
          <Link to="/list">
            <button className="btn">Play</button>
            <button className="btn">My List</button>
          </Link>
        </div>
        <h2 className="desc">{truncate(movie?.overview, 200)}</h2>
      </div>
      <div className="gradient-2" />
    </header>
  );
}

export default Banner;
