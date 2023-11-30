import React, { useContext } from "react";
import { WatchlistContext } from "../../../../Contexts/WatchlistContext";

const AddIcon = ({ data }) => {
  const { setWatchListData } = useContext(WatchlistContext);

  function addWatchlistId() {
    setWatchListData({
      id: data.id,
      image: data.image,
      title: data.title,
      year: data.year,
    });
    console.log("add", data.id);
  }

  return (
    <div
      className="add-icon"
      onClick={() => {
        addWatchlistId();
      }}
    >
      <span className="material-symbols-outlined">create_new_folder</span>
      <span>to watchlist</span>
    </div>
  );
};

export default AddIcon;
