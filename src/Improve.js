import React from "react";

const Improve = (props) => {
    return (
        <div className="improve-card">
            {props.image}
            <div className="improve-text">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            </div>
        </div>
    )
}


export default Improve;