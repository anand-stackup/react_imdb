import React, { useContext } from "react";
import "./Header.css";
import { SearchContext } from "../../../Contexts/SearchContext"
import { useNavigate } from "react-router-dom";
import { WatchlistContext } from "../../../Contexts/WatchlistContext";

const Header = () => {
  const navigate = useNavigate();
  const { retrievedMovies } = useContext(WatchlistContext);

  function toHomePage(){
    navigate('/');
  }

  const { setValue } = useContext(SearchContext)

  let inputData = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-img" onClick={() => {toHomePage()}}>
            <img
              src="https://logos-world.net/wp-content/uploads/2022/04/IMDb-Logo.png"
              alt=""
            />
          </div>
        </div>
        <div className="search">
          <input type="search" placeholder="Search IMDb" onChange={inputData} />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="watchlist">
          <a href="/watchlist"><i className="fa-solid fa-folder-plus"></i>Watchlist</a>
          <span>({retrievedMovies.length})</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
