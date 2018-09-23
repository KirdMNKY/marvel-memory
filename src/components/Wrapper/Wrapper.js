import React from "react";
import "./Wrapper.css";

const Wrapper = props => {
    return(
    
    <div>
    <div className="jumbotron intro">
        Young Mavel Clicky Game
    </div>
    <div className="wrapper">{props.children}</div>
    </div>

)
};

export default Wrapper;
