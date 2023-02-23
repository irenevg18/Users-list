import { Reac, useState } from "react";
import './UsersList.css'
import Card from "../UI/Card";
import Button from "../UI/Button";

function UserList(props) {

  return (
    <Card>
      <ul>{props.users.map((user,i) => <li key={i}>{user.name} <span>{user.age} years old.</span></li>)}</ul>
    </Card>
  );
}

export default UserList;
