import React from "react";
import {Link} from "react-router-dom"

import { StyleCardHomeHeader } from "./style"

function CardHomeHeader(){
    return(
        <>
        <StyleCardHomeHeader>
        <header className= "home-header">
            <nav className= "nav-home-header">
               <h2>E-Commerce Serratec</h2>
               <div className= "div-input">
                   <input 
                        type= "search" 
                        className= "nav-home-input"
                        placeholder="Pesquisar"
                    />
               </div>
               <div className= "div-button">
                    <button
                        type= "submit"
                        className= "nav-home-button"
                    >
                        <Link to="/" className= "linkTo">Sair</Link>
                    </button>
               </div>
            </nav>
        </header>
        </StyleCardHomeHeader>
        </>
    )
}

export default CardHomeHeader;