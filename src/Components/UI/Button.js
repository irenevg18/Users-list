import React from "react";

function Button(props){
    return(
        <button type="submit" onClick={props.addUserHandler}>Add User</button>
    )
}

export default Button;