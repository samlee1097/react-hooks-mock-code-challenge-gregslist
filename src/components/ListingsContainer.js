import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({items, handleDelete}) {
  
  const itemCards = items.map((listing) => <ListingCard key={listing.id} handleDelete={handleDelete} listing={listing}/>)

  return (
    <main>
      <ul className="cards">
        {itemCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
