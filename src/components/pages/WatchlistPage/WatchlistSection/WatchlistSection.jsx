import React, { useContext } from 'react'
import Watchlist from './Watchlist'
import { WatchlistContext } from '../../../../Contexts/WatchlistContext'

const WatchlistSection = () => {
    const {retrievedMovies} = useContext(WatchlistContext)
    // console.log(retrievedMovies);

  return retrievedMovies.map((data) =>(
    <div className='watchlist-section' key={data.id}>
        <Watchlist data={data} />
    </div>
  ))
}

export default WatchlistSection