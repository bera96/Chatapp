import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import { UserContext } from "../../context/UserContext";

function SearchFriend({ onSearchHandler }) {
  const { userList, searchFriend } = useContext(UserContext);

  const { theme } = useContext(ThemeContext);

  return (
    <div style={theme} className="search-container">
      <input
        onChange={(e) => {
          onSearchHandler(e.target.value);
        }}
        style={theme}
        type="search"
        placeholder="Search"
      />
    </div>
  );
}

export default SearchFriend;
