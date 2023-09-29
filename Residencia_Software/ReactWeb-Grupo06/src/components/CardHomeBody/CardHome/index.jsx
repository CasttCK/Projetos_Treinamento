import React, { useState }from "react";
import { Link } from "react-router-dom";

import { StyleCardHome } from "./Style";

function CardHome({produto}){
    return(
        <>
        <StyleCardHome>
        <div className= "card-body">
            <img className= "img-card" src={produto.fotoLink} alt="" />
            <h2 className= "card-title">{produto.nome}</h2>
            <h4 className= "card-description">{produto.descricao}</h4>
            <h3 className= "card-price">R$ {produto.valor},00</h3>
            <button 
                type= "submit"
                className= "card-button"
                >
                    <Link to="/carrinho" className= "linkTo">Comprar</Link>
            </button>
        </div>
        </StyleCardHome>
        </>  
    )
}

export default CardHome;