import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [filter, SetFilter] = useState("free")

  return (
    <div className="app">
      <Header SetFilter={SetFilter}/>
      <ListingsContainer filter={filter}/>
    </div>
  );
}

export default App;
