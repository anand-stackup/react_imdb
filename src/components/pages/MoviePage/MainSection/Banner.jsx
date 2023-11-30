import React, { useContext, useEffect } from "react";
import "./Banner.css";
import Genre from "./Genre";
import Stars from "./Stars";
import { MovieContext } from "../../../../Contexts/Moviecontext";
import { WatchlistContext } from "../../../../Contexts/WatchlistContext";
import AddIcon from "./AddIcon";
import RemoveIcon from "./RemoveIcon";

const Banner = ({ data }) => {
  const { setRelatedMovie } = useContext(MovieContext);
  const { isWatchlist } = useContext(WatchlistContext);

  // function to format number to k or m
  function numFormatter(num) {
    if (num > 999999) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num > 999) {
      return (num / 1000).toFixed(1) + "k";
    } else {
      return num;
    }
  }

  function settingRelatedMovie() {
    const relatedMovieName = data.title;
    setRelatedMovie(relatedMovieName);
  }

  useEffect(() => {
    settingRelatedMovie();
  });

  return (
    <div className="banner">
      <div className="banner-container">
        <div className="overlay-img">
          <img src={data.image} alt="" />
        </div>
        <div className="overlay">
          <div className="movie-img">
            <img src={data.image} alt="" />
          </div>
          <div className="movie-details">
            <div className="icon">
              {!isWatchlist ? <AddIcon data={data} /> : ""}
              {isWatchlist ? <RemoveIcon data={data} /> : ""}
            </div>
            <div className="details">
              <div className="title">
                <h2>{data.title}</h2>
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <h3>{data.rating.star}</h3>
                  <span>{numFormatter(data.rating.count)}</span>
                </div>
              </div>

              <div className="more-details">
                <span>{data.runtime}</span>
                <Genre data={data.genre} />
                <span>
                  {data.releaseDetailed.day +
                    "-" +
                    data.releaseDetailed.month +
                    "-" +
                    data.releaseDetailed.year}
                </span>
              </div>

              <div className="plot">
                <p>{data.plot}</p>
              </div>

              <div className="director">
                <h3>Director:</h3>
                <span>{data.directors}</span>
              </div>

              <div className="stars-container">
                <h3>Actors:</h3>
                <Stars data={data.actors} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
