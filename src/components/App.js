import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [items, SetItems] = useState([])
  const [filter, SetFilter] = useState(items)

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(r=>r.json())
    .then(data=>SetItems(data))
  },[])

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

  function handleSearch(text){
    const newList = items.filter(item => item.description.includes(text));
    SetFilter(newList)    
  }

  return (
    <div className="app">
      <Header handleSearch={handleSearch}/>
      {items === null ? null: <ListingsContainer handleDelete={handleDelete} items={filter.length === 0 ? items : filter}/>}
    </div>
  );
}

export default App;
