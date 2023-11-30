import React, { useContext } from "react";
import "./Card.css";
import { SearchContext } from "../../../../Contexts/SearchContext";
import { MovieContext } from "../../../../Contexts/Moviecontext";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const { movies, setMovies } = useContext(SearchContext);
  const { setIsLoading } = useContext(MovieContext);

  const navigate = useNavigate();

  function selectedMovie(id) {
    navigate(`/movie/${id}`);
    setMovies([]);
    setIsLoading(true);
  }

  return movies.map((movie) => (
    <div
      className="card"
      key={movie.id}
      onClick={() => {
        selectedMovie(movie.id);
      }}
    >
      <div className="card-img">
        <img src={movie.image} alt="img" />
      </div>
      <div className="card-desc">
        <h3>{movie.title}</h3>
        <span>{movie.year}</span>
      </div>
    </div>
  ));
};

export default Card;
