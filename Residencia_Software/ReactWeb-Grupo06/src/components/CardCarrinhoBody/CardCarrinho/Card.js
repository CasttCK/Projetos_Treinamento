import React from 'react';
import { BiTrash } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import './Card.css';

function CardApresentacaoCarrinho({produto}){
  return(
    <div className="carrinho-card">
      <img
        src={produto.fotoLink}
        alt={produto.descricao}
        className="carrinho-card__image"
      />
      <div className="carrinho-card__info">
        <h1 className="carrinho-card__title">{produto.nome}</h1>
        <h3 className="carrinho-card__descricao">{produto.descricao}</h3>
        <span className="carrinho-card__price">R$ {produto.valor},00</span>
        <button
          type="button"
          className="carrinho-card__delete-button"
        >
          <Link className= "linkTo" to= "/"> <BiTrash /></Link>
        </button>
      </div>
  </div>
  )
}

export default CardApresentacaoCarrinho;