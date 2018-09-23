import React from "react";
import "./Title.css";

const Title = props => {
    return(
        <header id="header" class="fixed-top">
        <div class="container">
            <div class="navbar navbar-toggleable-md navbar-light" role="navigation">
            <h1 className="title">{props.children}</h1>
            </div>
        </div>
        </header>
        )
}
export default Title;
