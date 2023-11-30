import React, { useContext } from "react";
import "./SearchCard.css";
import { SearchContext } from "../../../../../Contexts/SearchContext";
import { MovieContext } from "../../../../../Contexts/Moviecontext";
import { useNavigate } from "react-router-dom";

const SearchCard = () => {
  const { movies, setMovies } = useContext(SearchContext);
  const { setIsLoading } = useContext(MovieContext);

  const navigate = useNavigate();

  function selectedMovie(id) {
    navigate(`/movie/${id}`);
    setIsLoading(true);
    setMovies([]);
  }

  return movies.map((movie) => (
    <div
      className="search-card"
      key={movie.id}
      onClick={() => {
        selectedMovie(movie.id);
      }}
    >
      <div className="search-img">
        <img src={movie.image} alt="" />
      </div>

      <div className="search-desc">
        <h3>{movie.title}</h3>
        <span>{movie.year}</span>
      </div>
    </div>
  ));
};

export default SearchCard;
