import React from "react";

function Button(props){

    const {type, onClick, buttonText} = props 

    return(
        <button type={type} onClick={onClick}>{buttonText}</button>
    )
}

export default Button;