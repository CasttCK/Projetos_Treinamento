import React, { useState, useEffect } from "react";
import Formulario from "../Formulario";

function IndiretoInput() {
  const [inputValue, setInputValue] = useState("Insira um texto");

  //   useEffect(() => {
  //     alert("Modificou")
  //   }, [input])

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit() {
    alert(`Nome salvo ${inputValue}`);
  }

  return (
    <>
      <h3>{inputValue}</h3>
      <Formulario
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        inputValue={inputValue}
      />
    </>
  );
}

export default IndiretoInput;
