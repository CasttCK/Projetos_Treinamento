import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from "../Context/Context";
import UIButton from "../UI/Button/Button";


function initialState() {
  return { user: '', password: '' };
}

function login({ user, password }) {
  if (user === 'admin' && password === 'admin') {
    return { token: '1234' };
  }
  return { error: 'Usuário ou senha inválido' };
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    const { token, error } = login(values);

    if (token) {
      setToken(token);
      return history.push('/home');
    }

    setError(error);
    setValues(initialState);
  }

  return (
    <div className="user-login">
      <h1 className="user-login__title">Acessar o Sistema</h1>
      <form onSubmit={onSubmit}>
        <div className="user-login__form-control">
          <label htmlFor="user">Usuário</label>
          <input
            id="user"
            type="text"
            name="user"
            onChange={onChange}
            value={values.user}
          />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={onChange}
            value={values.password}
          />
        </div>
        {error && (
          <div className="user-login__error">{error}</div>
        )}
        <UIButton
          type="submit"
          theme="contained-green"
          className="user-login__submit-button"
          rounded
        >
          Entrar
        </UIButton>
      </form>
    </div>
  );
};

export default UserLogin;





// import { React, useState, useContext, onSubmit } from "react";
// import StoreContext from "../Context/Context";
// import { useHistory } from "react-router-dom";

// import { StyleCardLogin } from "./style";

// function initialState(){
//   return {user: '', password: ''};
// }

// function login({user, password}){
//   if(user === "admin" && password === "admin"){
//     return {token: '1234'};
//   }
//   return {error: "\nUsuário ou senha invalido!! \n\nTente outra vez."};
// }

// const UserLogin = () =>{
//   const [values, setValues] = useState(initialState);
//   const [setToken] = useContext(StoreContext);
//   const history = useHistory();

//   function  onChange(event){
//     const {value, name} = event.target;
//     setValues({
//       ...values,
//       [name]: value,
//     })
//   }

//   function onSubmit(event){
//     event.preventDefaul();

//     const{token} = login(values);
//     if(token){
//       setToken(token)
//       return history.push("/home")
//     }
//     setValues(initialState);
//   }    
    
//   return (
    
//     <StyleCardLogin>
//     <div classname="user-login">
//       <h1 classname="user-login-title">Acessar o sistema</h1>
//       <form onSubmit = {onSubmit}>
//         <div classname="user-login-form-control">
//           <label 
//             htmlFor="user"
//             >
//               Usuário
//           </label>
//           <input 
//             type="text" 
//             id="user" 
//             name="user" 
//             onChange= {onChange}
//             value= {values.user}
//           />
//         </div>
//         <div className="userlogin-form-control">
//           <label 
//             htmlFor="password"
//             >
//               Senha
//           </label>
//           <input 
//             type="password" 
//             id="password" 
//             name="password"
//             onChange= {onChange}
//             value= {values.password}
//           />
//         </div>
//         <button 
//           type= "submit" 
//           className= "user-login-submit-button"
//           >
//             Entrar
//         </button>
//       </form>
//     </div>
//     </StyleCardLogin>
//   );
// }
//    export default UserLogin;






  /* <>
      <StyleCardLogin>
        <label>
          Login
          <input
            class="input-login"
            type="text"
            value={nomeUsuario}
            onChange={(e) => setNomeUsuario(e.target.value)}
          />
          Senha:
          <input
            class="input-login"
            type="text"
            value={senhaUsuario}
            onChange={(e) => setSenhaUsuario(e.target.value)}
          />
          <button onClick={handleSubmit}>Login</button>
        </label>
      </StyleCardLogin>
    </> */
