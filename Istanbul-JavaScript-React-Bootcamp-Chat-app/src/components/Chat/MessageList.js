import React, { useContext, useState } from "react";
import ThemeContext from "../../context/themeContext";
import { UserContext } from "../../context/UserContext";

function MessageList() {
  const { selectedUser, setSelectedUser } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  if (!selectedUser) return null;

  return (
    <div>
      {selectedUser.messages.map((message) => {
        if (message.id) {
          return (
            <div style={theme} className="left-message-container">
              <p className="left-message">{message.text}</p>
            </div>
          );
        } else {
          return (
            <div style={theme} className="right-message-container">
              <p className="right-message">{message.text}</p>
            </div>
          );
        }
      })}
    </div>
  );
}

export default MessageList;
