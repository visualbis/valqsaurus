import React from "react";
import ReactDOM from "react-dom";
import "./css/custom.css";
import "react-medium-image-zoom/dist/styles.css";

export const Tag = (props) => {
    return (
        <div>
            <header>
                <h1 class="docTitle_node_modules-@docusaurus-theme-classic-lib-theme-DocItem-">
                    {props.header}<div id="tag"><img src={props.image} /></div>
                </h1>
            </header>
        </div>
    );
};


