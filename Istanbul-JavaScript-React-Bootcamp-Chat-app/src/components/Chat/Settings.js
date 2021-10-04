import React, { useContext } from "react";
import ThemeContext, { themes } from "../../context/themeContext";

import { UserContext } from "../../context/UserContext";

function Settings() {
  const { logout } = useContext(UserContext);

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={theme} className="settings">
      <button onClick={logout} className="button-logout">
        <i className="fas fa-sign-out-alt"></i>
      </button>
      <button onClick={toggleTheme} className="button-theme">
        <i className="far fa-moon"></i>
      </button>
    </div>
  );
}

export default Settings;
