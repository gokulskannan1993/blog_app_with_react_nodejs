import "./navbar.css";

import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const user = false;
  return (
    <div className="top-nav">
      <div className="navLeft">
        <i className="navIcon fab fa-facebook-square"></i>
        <i className="navIcon fab fa-twitter-square"></i>
        <i className="navIcon fab fa-instagram-square"></i>
        <i className="navIcon fab fa-linkedin"></i>
      </div>
      <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/signin">
              {user && "LOGOUT"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="navRight">
        {user ? (
          <img
            className="navImg"
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          ></img>
        ) : (
          <div>
            <ul className="navList">
              <li className="navListItem">
                <Link className="link" to="/signin">
                  LOGIN
                </Link>
              </li>
              <li className="navListItem">
                <Link className="link" to="/signup">
                  REGISTER
                </Link>
              </li>
            </ul>
          </div>
        )}

        <i
          className="navSearchIcon
         fas fa-search"
        ></i>
      </div>
    </div>
  );
}
