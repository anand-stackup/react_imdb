import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import MoviePage from '../pages/MoviePage/MoviePage'
import WatchlistPage from '../pages/WatchlistPage/WatchlistPage'

const Layout = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element= {<Home />} />
            <Route path='/movie/:id' element= {<MoviePage />} />
            <Route path='/watchlist' element= {<WatchlistPage />} />
        </Routes>
    </div>
  )
}

export default Layout