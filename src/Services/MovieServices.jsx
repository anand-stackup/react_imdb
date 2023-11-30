import React, { useContext, useEffect } from "react";
import { MovieContext } from "../Contexts/Moviecontext";
import axios from "axios";

const MovieServices = () => {
  const { id, setMovieData, relatedMovie, setRelatedMovieData } = useContext(MovieContext);

  // get movie based on search
  function fetchMovieData() {
    if (id === "") {
      return;
    }

    let url = `https://imdb-api.projects.thetuhin.com/title/${id}`;
      console.log(url);

    axios
      .get(url)
      .then((res) => {
        setMovieData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchMovieData();
  }, [id]);

  // search related movie 
  function fetchRelated () {
    let newUrl = `https://imdb-api.projects.thetuhin.com/search?query={${relatedMovie}}`

    axios.get(newUrl).then((res) => {

      // filtering movie with same id 
      let filteredData = (res.data.results).filter(data => data.id != id)
      setRelatedMovieData(filteredData)
    })
  }

  useEffect(() => {
    fetchRelated();
  },[relatedMovie]);

  return <div></div>;
};

export default MovieServices;
