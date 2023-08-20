import React from "react";


const Limit = (props) => {
    return (
        <div className={`limit-card ${props.clas}`}>
            <div className="limit-header">
                {props.image}
                <h1>{props.title}</h1>
            </div>
            <p>{props.content}</p>
             </div>
    )
}


export default Limit;