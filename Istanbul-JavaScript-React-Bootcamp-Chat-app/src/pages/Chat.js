import React, { useCallback, useContext, useState } from "react";
import FriendList from "../components/Chat/FriendList";
import Messages from "../components/Chat/Messages";
import "./Chat.css";
import { Redirect } from "react-router-dom";
import UserDetails from "../components/Chat/UserDetails";
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";
function Chat() {
  const [clicked, setClicked] = useState(true);
  const history = useHistory();
  const { selectedUser } = useContext(UserContext);

  const onClickHandler = (value) => {
    console.log(history);
    if (clicked == true) {
      setClicked(false);
      history.push(`/chat/${selectedUser.id}/details`);
    } else {
      setClicked(true);
      history.push(`/chat/${selectedUser.id}`);
    }
  };

  if (localStorage.getItem("user") == null) {
    return <Redirect to="/login"></Redirect>;
  }
  return (
    <div className="chat-container">
      <FriendList></FriendList>
      {clicked ? (
        <Messages clicked={clicked} onClickHandler={onClickHandler}></Messages>
      ) : (
        <UserDetails
          clicked={clicked}
          onClickHandler={onClickHandler}
        ></UserDetails>
      )}
    </div>
  );
}

export default Chat;
