import React from "react";

function Formulario(props) {
  return (
    <>
      <input
        type="text"
        value={props.inputValue}
        onChange={(e) => props.handleChange(e)}
      />
      <button onClick={props.handleSubmit}>Enviar</button>
    </>
  );
}

export default Formulario;
