import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import Header from "./Header";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";

function Messages({ clicked, onClickHandler }) {
  const { selectedUser, setSelectedUser } = useContext(UserContext);

  return (
    <div className="right-side">
      <Header clicked={clicked} onClickHandler={onClickHandler}></Header>
      <MessageList></MessageList>
      <MessageForm></MessageForm>
    </div>
  );
}

export default Messages;
