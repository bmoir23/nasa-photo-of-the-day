import React from "react";

const fetch = function(props){
    return(
        <div className ="imgCard">
            <h2>{props.title}</h2>
            <h3>{props.date}{props.copyright}</h3>
            <img src={props.url} alt="NASA Photo of the Day"/>
            <p>{props.explanation}</p>
        </div>
    );
};
export default fetch;