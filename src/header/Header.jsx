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
        src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2019_17/2835276/190425-thor-avengers-endgame-ew-339p.jpg"
        alt=""
      ></img>
    </div>
  );
}
