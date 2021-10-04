import React, { useState } from "react";
import Friends from "./Friends";
import SearchFriend from "./SearchFriend";
import Settings from "./Settings";
import "../../pages/Chat.css";

function FriendList() {
  const [value, setValue] = useState("");

  const onSearchHandler = (value) => {
    setValue(value);
  };

  return (
    <div className="left-side">
      <SearchFriend onSearchHandler={onSearchHandler}></SearchFriend>
      <Friends value={value}></Friends>
      <Settings></Settings>
    </div>
  );
}

export default FriendList;
