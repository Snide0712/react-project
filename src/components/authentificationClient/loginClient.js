import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../fireConfig";
import { Link, useNavigate } from "react-router-dom";
import "./logs.css";

const LoginClient = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`submitted email: ${email} password: ${password}`);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorMessage);
      });
  };

  const forgotPass = () => {
    if (email) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          console.log("Password reset email sent!");
        })
        .catch((error) => {
          console.log(error);
        });
    } else alert("Type your Email");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="line">
          {" "}
          <label htmlFor="email">
            <EmailIcon /> Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={({ target }) => setEmail(target.value)}
            required
          />
        </div>{" "}
        <div className="line">
          <label htmlFor="password">
            <PasswordIcon /> Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="current-password"
            onChange={({ target }) => setPassword(target.value)}
            required
          />
        </div>
        <button
          className="button"
          type="submit"
          style={{ width: "100%" }}
          onClick={(event) => handleSubmit(event)}
        >
          Sign In
        </button>
        <div className="links">
          <span>
            <Link onClick={() => forgotPass()}>Forgot password?</Link>
          </span>
          <span>
            <Link to="/signup">Don't have an account? Sign Up</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginClient;
