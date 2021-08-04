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
        src="https://www.zastavki.com/pictures/originals/2015/Girls_The_girl_in_the_rays_of_a_bright_summer_sun_093946_.jpg"
        alt=""
      ></img>
    </div>
  );
}
