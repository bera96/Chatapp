
import React, { useState, useEffect } from "react";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import { UserContext } from "./context/UserContext";
import mockUsers from "./mock-users.json";
import { Switch, Link, Route, Redirect, useHistory } from "react-router-dom";
import ThemeContext, { themes } from "./context/themeContext";

function App() {
  const [user, setUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [theme, setTheme] = useState(themes.dark);
  const [message, setMessage] = useState(null);

  const history = useHistory();
  console.log(selectedUser);
  const selectUser = (userId) => {
    const user = mockUsers.users.find((user) => user.id === userId);

    setSelectedUser(user);
    localStorage.setItem("selectedUser", JSON.stringify(user));
    history.push("/chat/" + userId);
  };

  const login = (username) => {
    const user = username;
    setUser(user);
    if (user.firstName.length != 0 && user.userName.length != 0) {
      localStorage.setItem("user", JSON.stringify(user));
    } else alert("Please fill the fields!!!");
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const sendMessage = (message) => {
    if (message) {
      setSelectedUser({
        ...selectedUser,
        messages: [...selectedUser.messages, { text: message }],
      });
      localStorage.setItem("message", JSON.stringify({ text: message }));
    }
  };

  const toggleTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };

  useEffect(() => {
    const userNameFromStorage = localStorage.getItem("user");
    const selectedUserFromStorage = localStorage.getItem("selectedUser");

    if (selectedUserFromStorage) {
      const selectedUserObject = JSON.parse(selectedUserFromStorage);
      setSelectedUser(selectedUserObject);
    }

    if (userNameFromStorage) {
      const userObject = JSON.parse(userNameFromStorage);

      setUser(userObject);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <UserContext.Provider
        value={{
          user,
          login,
          userList: mockUsers.users,
          selectUser,
          logout,
          selectedUser,
          setSelectedUser,
          message,
          sendMessage,
        }}
      >
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/chat">
            <Chat></Chat>
          </Route>
        </Switch>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
