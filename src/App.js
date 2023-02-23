import React, { useState } from "react";
import UsersForm from "./Components/Users/UsersForm";
import UserList from "./Components/Users/UsersList";
import ErrorModal from "./Components/UI/ErrorModal";
import "./App.css";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [errorModal, setErrorModal] = useState(false);

  const addUserHandler = (user) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, user];
    });
  };

  const showErrorModal = (error) => {
    error ? setErrorModal(true) : setErrorModal(false);
  };
  return (
    <div>
      <h1>hola!</h1>
      <UsersForm onAddUser={addUserHandler} onShowError={showErrorModal} />
      {usersList.length <= 0 && !errorModal ? (
        <div id="no-users">No users yet</div>
      ) : !errorModal ? (
        <UserList users={usersList} />
      ) : (
        <ErrorModal onCloseErrorModal={setErrorModal}/>
      )}
    </div>
  );
}

export default App;
