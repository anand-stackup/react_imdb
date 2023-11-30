import React, { useContext } from "react";
import { WatchlistContext } from "../../../../Contexts/WatchlistContext";

const RemoveIcon = ({data}) => {
  const { setIdToRemove } = useContext(WatchlistContext);

  function idToRemove() {
    setIdToRemove(data.id)
    console.log('dlt func');
}

  return (
    <div className="remove-icon" onClick={()=>{idToRemove()}}>
      <span className="material-symbols-outlined remove">folder_delete</span>
      <span>from watchlist</span>
    </div>
  );
};

export default RemoveIcon;
