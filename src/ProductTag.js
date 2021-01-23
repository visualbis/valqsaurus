import React from "react";
import ReactDOM from "react-dom";
import "./css/custom.css";

export const Tag = (props) => {
    return (
        <div>
            <header>
                <h1 class="docTitle_1Lrw">{props.header} <div><img src={props.image} /></div></h1>
            </header>
        </div>
    );
};