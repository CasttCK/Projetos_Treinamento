import React, { useState } from "react";

import Card from "./components/Card";

import ComponenteClasse from "./components/ComponenteClasse";
import ComponenteFuncao from "./components/ComponenteFuncao";
import DiretoPai from "./components/DiretoPai";
import IndiretoInput from "./components/IndiretoInput";

import IndiretoPai from "./components/IndiretoPai";
import Titulo from "./components/Titulo";

import "./Global.css";

function App() {
  const [ativo, setAtivo] = useState(true);
  return (
    <>
      <Card titulo="Exemplo Componente de Classe">
        {ativo ? (
          <ComponenteClasse
            nome="Abner Props"
            estado={ativo}
            objeto={{ nome: "Fulano", idade: 25 }}
          />
        ) : (
          <h1>Removeu</h1>
        )}
        <button onClick={() => setAtivo(!ativo)}>
          {ativo ? "Desativar Componente" : "Ativar Componente"}
        </button>
      </Card>
      <Card titulo="Exemplo Componente Funcional">
        <ComponenteFuncao nome="João" />
      </Card>
      <Card titulo="Exemplo Comunicação Direta">
        <DiretoPai />
      </Card>
      <Card titulo="Exemplo Comunicação Indireta">
        <IndiretoPai />
      </Card>
      {/*FICOU FALTANDO ABORDAR EM AULA*/}
      <Card titulo="Comunicação Direta / Indireta com Input (Componente Controlado)">
        <IndiretoInput />
      </Card>
      <Card titulo="Passagem de props por children [props.children]">
        <Titulo>Meu titulo</Titulo>
      </Card>
    </>
  );
}

export default App;
