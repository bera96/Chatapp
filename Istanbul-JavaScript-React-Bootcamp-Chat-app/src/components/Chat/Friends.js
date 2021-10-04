import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import { UserContext } from "../../context/UserContext";

function Friends({ value }) {
  const { userList, selectUser } = useContext(UserContext);

  const textConstrain = (message) => {
    if (message.length >= 30) {
      return message.slice(0, 30) + "...";
    } else return message;
  };

  return (
    <div className="friendlist-container">
      {userList
        .filter((val) => {
          if (value == null) {
            console.log(typeof value);
            return userList;
          } else if (
            val.first_name.toLowerCase().includes(value.toLowerCase()) ||
            val.last_name.toLowerCase().includes(value.toLowerCase())
          ) {
            return val;
          }
        })
        .map((friends, key) => {
          const lastMessage =
            friends.messages[friends.messages.length - 1].text;

          return (
            <div
              key={key}
              onClick={() => selectUser(friends.id)}
              className="friendlist-friend-container"
            >
              <div className="left">
                <img></img>
              </div>
              <div className="right">
                <h4 className="friendlist-friend-name">
                  {friends.first_name + " "}
                  {friends.last_name}
                </h4>
                <span className="friendlist-friend-text">
                  {textConstrain(lastMessage)}
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
}
export default Friends;
