import React from "react";

import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://t3.ftcdn.net/jpg/02/68/81/22/360_F_268812279_cVMsQJ8UWfV8k8HO2oqjhRY1XhopgE68.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Gokul</b>
          </span>
          <span className="singlePostDate">
            Author: <b>1 hour ago</b>
          </span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          totam velit sint, amet aperiam ut ullam asperiores consequatur
          doloremque aspernatur repudiandae, ad consectetur dolores rem magni
          odit, fugiat saepe itaque. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Voluptatem obcaecati at laudantium perferendis.
          Tenetur accusamus officiis quis aspernatur a esse exercitationem ipsa
          fuga, sint praesentium reprehenderit consequatur voluptatum nam
          eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Labore hic excepturi est reiciendis dignissimos ducimus, laborum,
          molestiae recusandae alias tempore quaerat! Ea cupiditate laborum
          nostrum deserunt est expedita unde eligendi.
        </p>
      </div>
    </div>
  );
}
