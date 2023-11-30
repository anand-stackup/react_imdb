import React, { useContext } from "react";
import "./CardSection.css";
import RelatedMovieCard from "./RelatedMovieCard";
import { MovieContext } from "../../../../../Contexts/Moviecontext";

const CardSection = () => {
  const { relatedMovieData } = useContext(MovieContext);

  return (
    <div className="card-section">
      {relatedMovieData.length !== 0 ? <h2>Related Movies</h2> : ""}
      <div className="card-section-container">
        <RelatedMovieCard />
      </div>
    </div>
  );
};

export default CardSection;
