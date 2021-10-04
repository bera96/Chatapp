import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import { UserContext } from "../../context/UserContext";

function Header({ clicked, onClickHandler }) {
  const { selectedUser } = useContext(UserContext);

  if (!selectedUser) return null;
  const { theme } = useContext(ThemeContext);

  return (
    <div style={theme} className="user-header">
      <img className="user-image"></img>
      <h4 className="user-header-name">{`${selectedUser.first_name} ${selectedUser.last_name}`}</h4>
      <button
        onClick={onClickHandler}
        style={theme}
        className="ellipsis-button"
      >
        <i class="fas fa-ellipsis-h"></i>
      </button>
    </div>
  );
}

export default Header;
