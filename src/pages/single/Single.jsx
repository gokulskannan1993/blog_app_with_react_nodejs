import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SInglePost";
import "./single.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost></SinglePost>
      <Sidebar></Sidebar>
    </div>
  );
}
