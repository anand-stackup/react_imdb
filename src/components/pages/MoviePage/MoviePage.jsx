import React, { useContext, useEffect } from "react";
import Header from "../../Common/Header/Header";
import Banner from "./MainSection/Banner";
import CardSection from "./MainSection/CardSection/CardSection";
import SearchSection from "./MainSection/SearchSection/SearchSection";
import { useParams } from "react-router-dom";
import { MovieContext } from "../../../Contexts/Moviecontext";
import { WatchlistContext } from "../../../Contexts/WatchlistContext";
import LoadingSpinner from "../../Common/LoadingSpinner/LoadingSpinner";

const MoviePage = () => {
  const { setId, movieData, setIsLoading, isLoading } = useContext(MovieContext);
  const { retrievedMovies, setIsWatchlist } = useContext(WatchlistContext);
  const { id } = useParams();

  function selectedMovie() {
    setId(id);
  }

  function watchlistState() {
    const check = retrievedMovies.some((data) => data.id === id);

    if (check) {
      setIsWatchlist(true);
    } else {
      setIsWatchlist(false);
    }
  }

  useEffect(() => {
    watchlistState();
  });

  useEffect(() => {
    if (id) {
      selectedMovie();
    }

    setTimeout(() => {
      setIsLoading(false);
    }, "2000");
  }, [id, movieData]);

  return (
    <div>
      <Header />
      {isLoading ? <LoadingSpinner /> : ""}
      {!isLoading ? <Banner data={movieData} /> : ""}
      <SearchSection />
      {!isLoading ? <CardSection data={movieData} /> : ""}
    </div>
  );
};

export default MoviePage;
