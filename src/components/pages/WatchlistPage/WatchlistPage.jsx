import React from "react";
import Header from "../../Common/Header/Header";
import WatchlistSection from "./WatchlistSection/WatchlistSection";
import "./WatchlistSection/WatchlistSection.css"

const WatchlistPage = () => {
  return (
    <div>
      <Header />
      <div className="watchlist-container">
        <WatchlistSection />
      </div>
    </div>
  );
};

export default WatchlistPage;
