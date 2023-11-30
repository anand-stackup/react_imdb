import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { SearchContext } from "../Contexts/SearchContext";

const SearchServices = () => {
  const { setMovies, value } = useContext(SearchContext);

  let url = `https://imdb-api.projects.thetuhin.com/search?query={${value}}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setMovies(res.data.results);
    });
  }, [url]);
  return <div></div>;
};

export default SearchServices;
