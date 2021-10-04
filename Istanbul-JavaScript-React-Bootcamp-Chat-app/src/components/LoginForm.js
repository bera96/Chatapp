import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import "./LoginForm.css";
import { Redirect } from "react-router-dom";

function LoginForm() {
  const { login } = useContext(UserContext);
  const [userName, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  if (localStorage.getItem("user") !== null) {
    return <Redirect to="/chat"></Redirect>;
  }

  return (
    <form className="login-form">
      <h3 className="login-title">Log in to your account</h3>
      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        className="login-input"
        type="text"
        placeholder="User Name"
      />
      <input
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
        className="login-input"
        type="text"
        placeholder="First Name"
      />
      <input
        onChange={(e) => {
          setLastName(e.target.value);
        }}
        className="login-input"
        type="text"
        placeholder="Last Name"
      />

      <button
        onClick={() => {
          // e.preventDefault()

          login({
            userName,
            firstName,
            lastName,
          });
        }}
        className="login-button"
      >
        LOGIN
      </button>
    </form>
  );
}

export default LoginForm;
