import React, {useState} from "react";

function ListingCard({listing, handleDelete}) {

  const [star, SetStar] = useState(false)
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {star ? (
          <button onClick={()=> SetStar(!star)}className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={()=> SetStar(!star)}className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={()=>handleDelete(listing.id)}className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
