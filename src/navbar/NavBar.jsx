import "./navbar.css";

import React from "react";

export default function NavBar() {
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
          <li className="navListItem">HOME</li>
          <li className="navListItem">ABOUT</li>
          <li className="navListItem">CONTACTS</li>
          <li className="navListItem">WRITE</li>
          <li className="navListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="navRight">
        <img
          className="navImg"
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        ></img>
        <i
          className="navSearchIcon
         fas fa-search"
        ></i>
      </div>
    </div>
  );
}
