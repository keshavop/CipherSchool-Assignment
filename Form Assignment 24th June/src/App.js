import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Output from "./Output";

function App() {
  const [userInput, setUserInput] = useState("");
  const [outputResult, setOutputResult] = useState("");

  const handleFormSubmit = (inputValue) => {
    setUserInput(inputValue);
    setOutputResult(inputValue.toUpperCase());
  };

  return (
    <div>
      <Header />
      <Form onSubmit={handleFormSubmit} />
      <Output result={outputResult} />
    </div>
  );
}

export default App;
