import React from "react";
import Search from "./Search";

function Header({SetFilter}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search SetFilter={SetFilter}/>
    </header>
  );
}

export default Header;
