import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="item">
        <span className="title">ABOUT ME</span>
        <img
          src="https://www.usnews.com/dims4/USNEWS/dbd1d93/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F15%2F416be67d7734d2693f38093874c3e6%2Fmedia%3Af24eabe52b5040d8ba9fe4bd293e3d44Financial_Markets-Bull_Market_Birthday_60467.jpg"
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
