import React from "react";
import "./ErrorModal.css";
import Card from "./Card";
import Button from "./Button";

function ErrorModal(props) {
  const closeErrorHandler = () => {
    props.onCloseErrorModal(false)
  };
  return (
    <Card>
      <header className="text-error">Something went wrong</header>
      <div>
        <p>Please, try again.</p>
      </div>
      <Button type="button" buttonText="error OK" onClick={closeErrorHandler}/>
    </Card>
  );
}

export default ErrorModal;
