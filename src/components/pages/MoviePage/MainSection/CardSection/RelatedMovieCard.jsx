import React, { useContext } from "react";
import "./RelatedMovieCard.css";
import { MovieContext } from "../../../../../Contexts/Moviecontext";
import { useNavigate } from "react-router-dom";

const RelatedMovieCard = () => {
  const { relatedMovieData, setIsLoading } = useContext(MovieContext);

  const navigate = useNavigate();

  function selectedMovie(id) {
    navigate(`/movie/${id}`);
    setIsLoading(true);
  }

  return relatedMovieData.map((data) => (
    <div
      className="related-movie-card"
      key={data.id}
      onClick={() => {
        selectedMovie(data.id);
      }}
    >
      <div className="related-img">
        <img src={data.image} alt="" />
      </div>

      <div className="related-desc">
        <h3>{data.title}</h3>
        <span>{data.year}</span>
      </div>
    </div>
  ));
};

export default RelatedMovieCard;
