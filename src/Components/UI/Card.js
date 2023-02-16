import React from "react";
import './Card.modules.css'

function Card(props){
    return(
        <div className="card">{props.children}</div>
    )
}

export default Card;