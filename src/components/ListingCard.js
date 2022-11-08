import React, {useState} from "react";

function ListingCard({id, description, image, location}) {

  const [likeButton, setLikeButton] = useState(false);

  function handleLikeButton (){
    setLikeButton(!likeButton);
  }


  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {likeButton ? (
          <button onClick={handleLikeButton} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleLikeButton} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
