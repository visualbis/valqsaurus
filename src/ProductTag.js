import React from "react";
import ReactDOM from "react-dom";
import "./css/custom.css";

export const Tag = (props) => {
  return (
    <div className="productTag">
      <header>
        <h1>{props.header}</h1>
        <div>
          <img src={props.image} />
        </div>
      </header>
    </div>
  );
};
