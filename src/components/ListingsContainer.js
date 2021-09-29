import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({filter}) {
  const [items, SetItems] = useState([])
  const [sortBy, SetSortBy] = useState("id")

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(r=>r.json())
    .then(data=>SetItems(data))
  },[])

  const newList = items.filter(item => item.description.toLowerCase().includes(filter.toLowerCase()));

  const sortedListing = newList.sort((listingA, listingB) => {
    if(sortBy === "id"){ 
      return listingA.id -listingB.id
    } else {
      return listingA.location.localeCompare(listingB.location)
    }
  })

  function handleDelete(id){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    .then(r=>r.json())
    .then(()=>{
      const updatedItems = items.filter((item) => item.id !== id);
      SetFilter(updatedItems)
    })
  }
  const itemCards = sortedListing.map((listing) => <ListingCard key={listing.id} handleDelete={handleDelete} listing={listing}/>)

  return (
    <main>
      <button onClick = {()=>SetSortBy("id")}>Sort By Default</button>
      <button onClick = {()=>SetSortBy("location")}>Sort By Location</button>
      <ul className="cards">{itemCards}</ul>
    </main>
  );
}

export default ListingsContainer;
