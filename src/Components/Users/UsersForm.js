import { React, useState } from "react";
import "./UsersForm.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

function UsersForm() {
  const [user, setUser] = useState({ name: "", age: 0 });

  const addUserHandler = (event) => {
    event.preventDefault();
    event.target.reset();
    console.log(user);
  };

  const nameHandler = (event) => {
   setUser({name: event.target.value})

  };  
  
  const ageHandler = (event) => {
    setUser({...user, age: event.target.value})
    
  };




  return (
    <Card>
      <form onSubmit={addUserHandler} id="newUserForm">
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Type the username"
            onChange={nameHandler}
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="number" id="age" placeholder="Type yous age in years" onChange={ageHandler}/>
        </div>
        <Button onClick={addUserHandler} />
      </form>
    </Card>
  );
}

export default UsersForm;
