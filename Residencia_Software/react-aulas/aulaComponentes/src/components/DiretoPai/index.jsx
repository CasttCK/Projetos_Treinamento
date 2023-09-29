import React, {useState} from "react";
import DiretoFilho from "../DiretoFilho";

function DiretoPai() {
  const [filho] = useState({ nome: "João", idade: 15, nerd: true });
  return (
    <DiretoFilho nome={filho.nome} idade={filho.idade} nerd={filho.nerd} />
  );
}

export default DiretoPai;
