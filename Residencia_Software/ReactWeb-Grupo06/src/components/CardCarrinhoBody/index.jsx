import React, {useState} from "react";
import CardApresentacaoCarrinho from "./CardCarrinho/Card";
import { StyleCardCarrinhoBody } from "./style";
import Produtos from "../../Api/DB/Produtos.json"

function CardCarrinho(){
    const [produtosData, setProdutosData] = useState(Produtos)
    return(
        <StyleCardCarrinhoBody>
            <CardApresentacaoCarrinho produto= {produtosData[0]}/>
            <CardApresentacaoCarrinho produto= {produtosData[1]}/>
            <CardApresentacaoCarrinho produto= {produtosData[2]}/>
            <CardApresentacaoCarrinho produto= {produtosData[3]}/>
            <CardApresentacaoCarrinho produto= {produtosData[4]}/>
            <CardApresentacaoCarrinho produto= {produtosData[5]}/>
            <CardApresentacaoCarrinho produto= {produtosData[6]}/>
        </StyleCardCarrinhoBody>
    )
}

export default CardCarrinho;


