import React, { useContext, useEffect } from 'react'
import { WatchlistContext } from '../Contexts/WatchlistContext'
import axios from 'axios';

const WatchlistServices = () => {
const { watchlistData, setRetrievedMovies, retrievedMovies, idToRemove, setIdToRemove } = useContext(WatchlistContext)

const data =  watchlistData 

// function to save added movie id and data 
function saveWatchlistId() {
  axios.post('http://localhost:4000/api/watchlist', data)
    .then((res) => {
      console.log(res.data.data);
      getWatchlistData()
    })
    .catch((error) => {
      console.error('Error saving watchlistID');
    });
}

useEffect(() => {
  if(Object.keys(watchlistData).length > 0){
    saveWatchlistId()
  }
},[watchlistData])

// function to get all movies from watchlist 
function getWatchlistData() {
  axios.get('http://localhost:4000/api/watchlist')
    .then((res) => {
      setRetrievedMovies(res.data)
    })
    .catch((error) => {
      console.error('Error getting watchlistdata');
    });
}

useEffect(() => {
  getWatchlistData()
},[])


// function to delete a movie 
function deleteWatchlistData() {
  axios.delete(`http://localhost:4000/api/watchlist/${idToRemove}`)
    .then((res) => {
      setRetrievedMovies(retrievedMovies.filter(item => item.id !== idToRemove));
      setIdToRemove('')
      console.log(res);
    })
    .catch((error) => {
      console.error('Error deleting watchlistdata',error);
    });
}

useEffect(() => {
  deleteWatchlistData()
},[idToRemove])


  return (
    <div></div>
  )
}

export default WatchlistServices