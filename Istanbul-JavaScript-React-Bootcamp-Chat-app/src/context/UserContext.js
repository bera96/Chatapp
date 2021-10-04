import React from "react";

export const UserContext = React.createContext({
  user: null,
  login: () => {},
  userList: [],
  selectUser: () => {},
  logout: () => {},
  textConstrain: () => {},
  selectedUser: null,
  setSelectedUser: () => {},
  message: null,
  setMessage: () => {},
  sendMessage: () => {},
});
