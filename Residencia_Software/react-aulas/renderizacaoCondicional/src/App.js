import React, {useState} from 'react';
import SaudacaoVisitante from "./components/SaudacaoVisitante";
import SaudacaoUsuario from "./components/SaudacaoUsuario";

function App() {
  const[isLogado, setIsLogado] = useState(false)

  function handleSetLogado(){
    setIsLogado(!isLogado)
  }

  function validarLogin(){
    if(isLogado){
      return <SaudacaoUsuario />
    }
    return <SaudacaoVisitante />
  }

  return (
    <> 
      {validarLogin()}
      <button onClick={handleSetLogado}>{isLogado ? 'Logoff' : 'Login'}</button>
    </>
  );
}

export default App;
