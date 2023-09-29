import React from "react";

function ComponenteFilho(props) {
  return (
    <>
      <button onClick={() => props.setInformacaoPai("Jorge", 50, true)}>
        Passar Informações para o pai
      </button>
    </>
  );
}

export default ComponenteFilho;
