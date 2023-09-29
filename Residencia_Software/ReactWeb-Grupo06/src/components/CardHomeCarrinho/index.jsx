import React from "react";
import logoCarrinho from "../../Assets/IMG/logoCarrinho.svg";
import {Link} from "react-router-dom"

import { StyleCardHomeCarrinho } from "./style"

function CardHomeCarrinho(){
    return(
        <StyleCardHomeCarrinho>
        <nav className= "nav-home-carrinho">
            <div className= "carrinho">
                <img 
                    className= "foto-carrinho"
                    src={logoCarrinho} 
                    alt="Logo carrinho"
                />
                <Link to="/carrinho" className= "linkTo"><h3>Meu Carrinho</h3></Link>
            </div>
        </nav>
        </StyleCardHomeCarrinho>
    )
}

export default CardHomeCarrinho;