import "./header.css";

import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="titles">
        <span className="titleSmall">React & Node </span>
        <span className="titleLarge">Blog</span>
      </div>
      <img
        className="image"
        src="https://i.pinimg.com/originals/15/be/33/15be33d514f99d4cb6bc453e405cbb6d.jpg?crop"
        alt=""
      ></img>
    </div>
  );
}
