import React, { useContext, useState } from "react";
import { WatchlistContext } from "../../../../Contexts/WatchlistContext";
import { useNavigate } from "react-router-dom";

const Watchlist = ({ data }) => {
  const { setIdToRemove } = useContext(WatchlistContext);
  const navigate = useNavigate();

  function idToRemove() {
    setIdToRemove(data.id);
  }

  function selectedMovie() {
    navigate(`/movie/${data.id}`);
  }

  return (
    <div
      className="watch-list"
      onClick={() => {
        selectedMovie();
      }}
    >
      <div className="watch-list-img">
        <img src={data.image} alt="" />
      </div>

      <div className="watch-list-desc">
        <h3>{data.title}</h3>
        <span>{data.year}</span>
      </div>
      <div>
        <button
          className="delete-btn"
          onClick={() => {
            idToRemove();
          }}
        >
          Remove from watchlist
        </button>
      </div>
    </div>
  );
};

export default Watchlist;
