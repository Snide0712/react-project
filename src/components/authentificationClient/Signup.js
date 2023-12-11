import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./logs.css";

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/loginclient");
        sendEmailVerification(auth.currentUser)
          .then(() => {
            console.log("Email Sent");
          })
          .catch((err) => {
            console.log(err);
            alert(err);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorMessage);
      });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="line">
          {" "}
          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={({ target }) => setEmail(target.value)}
            required
          />
        </div>
        <div className="line">
          {" "}
          <label htmlFor="password">
            Password          </label>

            <input
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              onChange={({ target }) => setPassword(target.value)}
              required
            />
        </div>
        <button className="button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
