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
        src="https://cdn.wallpapersafari.com/24/56/aLSZX9.jpg"
        alt=""
      ></img>
    </div>
  );
}
