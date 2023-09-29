import React, { useState } from "react";

import IndiretoFilho from "../IndiretoFilho";

function IndiretoPai() {
  const [pai, setPai] = useState({ nome: "?", idade: 0, nerd: false });

  function informacoesDoPai(nome, idade, nerd) {
    setPai({ nome: nome, idade: idade, nerd: nerd });
  }

  return (
    <>
      <div>
        <h1>Pai</h1>
        <span>{pai.nome} </span>
        <span>{pai.idade} </span>
        <span>{pai.nerd ? "Verdadeiro" : "Falso"}</span>
      </div>
      <IndiretoFilho setInformacaoPai={informacoesDoPai} />
    </>
  );
}

export default IndiretoPai;
