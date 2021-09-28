import React, {useState} from "react";

function Search({handleSearch}) {

  const [text, SetText] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(text);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={text}
        onChange={(e) => SetText(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
