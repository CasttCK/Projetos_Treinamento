import React, { useState } from "react";

const estadoInicial = {
  nome: "Abner",
  sobrenome: "Joia",
};

function ComponenteFuncao(props) {
  const [pessoa, setPessoa] = useState(estadoInicial);

  const {nome} = props

  console.log(props)

  //   useEffect(() => {
  //       alert('Criou componente')
  //   }, [])

  //   useEffect(() => {
  //     alert("Componente alterou");
  //   }, [pessoa]);

  function handleSetPessoa() {
    setPessoa({ ...pessoa, nome: "Fulano" });
  }

  console.log(pessoa);

  return (
    <>
      <h1>State do componente {`=> ${pessoa.nome} ${pessoa.sobrenome}`}</h1>
      <h1>Nome vindo de props {`=> ${nome}`}</h1>
      <button onClick={handleSetPessoa}>Alterar state do componente</button>
    </>
  );
}

export default ComponenteFuncao;

// const ComponenteFuncao = () =>{
//     return <h1>Componente Funcional</h1>;
// }
