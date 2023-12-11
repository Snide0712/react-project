import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../src/fireConfig";
import { onAuthStateChanged } from "firebase/auth";
import { FaShoppingCart } from "react-icons/fa";
import LoginClient from "../../src/components/authentificationClient/loginClient"
function Menu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("singOut");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Novels</Link>
        </li>
        <li>
          <Link to="/Add">Add Novel</Link>
        </li>
        <li className="icon">
          <Link to="/Cart">
            <FaShoppingCart size={15} />
          </Link>
        </li>
        <li>
          {!isLoggedIn ? (
            <Link className="btn btn-outline-primary" to="/loginclient">
              Log In
            </Link>
          ) : (
            <button
              className="btn btn-outline-primary"
              onClick={() => logOut()}
            >
              Log Out
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
