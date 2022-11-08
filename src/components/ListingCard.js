import React, {useState} from "react";

function ListingCard({setListingID, listingObj, handleRemoveListing}) {


  const [likeButton, setLikeButton] = useState(false);

  function handleLikeButton (){
    setLikeButton(!likeButton);
  }


  function handleClick (e){
    handleRemoveListing(listingObj)
  }


  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listingObj.image} alt={listingObj.description} />
      </div>
      <div className="details">
        {likeButton ? (
          <button onClick={handleLikeButton} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleLikeButton} className="emoji-button favorite">☆</button>
        )}
        <strong>{listingObj.description}</strong>
        <span> · {listingObj.location}</span>
        <button onClick={handleClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
