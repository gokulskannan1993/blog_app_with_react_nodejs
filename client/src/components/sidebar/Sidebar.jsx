import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="item">
        <span className="title">ABOUT ME</span>
        <img
          src="https://st4.depositphotos.com/12985790/i/600/depositphotos_219003892-stock-photo-portrait-young-smiling-woman-headphones.jpg"
          alt=""
        ></img>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="item">
        <span className="title">CATEGORIES</span>
        <ul className="list">
          <li className="listItem">Life</li>
          <li className="listItem">Music</li>
          <li className="listItem">Style</li>
          <li className="listItem">Sport</li>
          <li className="listItem">Movies</li>
          <li className="listItem">Tech</li>
        </ul>
      </div>
      <div className="item">
        <span className="title">FOLLOW US</span>
        <div className="social">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
}
