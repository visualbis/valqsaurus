import React from "react";
import ReactDOM from "react-dom";
import "./css/custom.css";

export const Release = (props) => {
    return (
        <div className="ProductRelease">
            <header>
                <h1>{props.header}</h1>
            </header>
            <a href={props.earlier}>Earlier version: {props.earlier}</a>
            <br></br>
            <a href={props.next}>Next version: {props.next}</a>
            <br></br>
            <a href="docs/releases">Releases</a>
        </div>
    );
};
