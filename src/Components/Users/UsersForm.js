import { React, useState } from "react";
import "./UsersForm.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

function UsersForm(props) {
  const [newUser, setNewUser] = useState({ name: "", age: "" });

  const addUserHandler = (event) => {
    event.preventDefault();
    if (event.target[0].value.trim().length === 0 || event.target[1].value.trim().length === 0) {
      props.onShowError(true);
      return;
    }
    if (+newUser.age < 1) {
      props.onShowError(true);
      return;
    }
    event.target.reset();
    props.onAddUser(newUser);
    props.onShowError(false);
    console.log(newUser);
  };

  const nameHandler = (event) => {
    setNewUser({ name: event.target.value });
  };

  const ageHandler = (event) => {
    setNewUser({ ...newUser, age: event.target.value });
  };

  return (
    <Card>
      <form onSubmit={addUserHandler} id="newUserForm">
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="name"
            placeholder="Type your username"
            onChange={nameHandler}
            // value={newUser.name}
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            placeholder="Your age in years"
            onChange={ageHandler}
            // value={newUser.age}
          />
        </div>
        <Button buttonText="Add user" type="submit" />
      </form>
    </Card>
  );
}

export default UsersForm;
