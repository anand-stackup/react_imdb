import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { SearchContext } from "./Contexts/SearchContext";
import { MovieContext } from "./Contexts/Moviecontext";
import { WatchlistContext } from "./Contexts/WatchlistContext";
import SearchServices from "./Services/SearchServices";
import MovieServices from "./Services/MovieServices";
import WatchlistServices from "./Services/WatchlistServices";

function App() {
  // states of search context 
  const [movies, setMovies] = useState([]);  //state for storing the datas that match the search query from the imdb api
  const [value, setValue] = useState([]);    //state for storing the search value

  // states of movie context 
  const [id, setId] = useState('');  //state for storing the id of the movie in the current movie page
  const [movieData, setMovieData] = useState({});  //state for storing the data of the movie in the current movie page
  const [relatedMovie, setRelatedMovie] = useState('');  //related movie query
  const [relatedMovieData, setRelatedMovieData] = useState([]);  //related movie data
  const [isLoading, setIsLoading] = useState(true);  //setting the state of the loader

  // states of watchlist context
  const [watchlistData, setWatchListData] = useState({});  //state for storing data to be saved on the watchlist api
  const [ retrievedMovies, setRetrievedMovies ] = useState([]);  //state to store all datas in the watchlist api
  const [ idToRemove, setIdToRemove ] = useState('');  //state to store the id of the movie to be removed from the watchlist db 
  const [ isWatchlist, setIsWatchlist ] = useState();  //setting the state of the watchlist buttons
  // const [ watchlistMovies, setWatchlistMovies ] = useState([]);  //

  return (
    <SearchContext.Provider value={{ movies, setMovies, value, setValue }}>
      <MovieContext.Provider value={{ id, setId, movieData, setMovieData, relatedMovie, setRelatedMovie, relatedMovieData, setRelatedMovieData, isLoading, setIsLoading }}>
        <WatchlistContext.Provider value={{ watchlistData, setWatchListData,retrievedMovies, setRetrievedMovies, idToRemove, setIdToRemove, isWatchlist, setIsWatchlist }}>
          <div className="App">
            <MovieServices />
            <SearchServices />
            <WatchlistServices />
            <Layout />
          </div>
        </WatchlistContext.Provider >
      </MovieContext.Provider>
    </SearchContext.Provider>
  );
}

export default App;
