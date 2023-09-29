import React from "react";
import CardHomeHeader from "../../components/CardHomeHeader";
import CardCarrinhoBody from "../../components/CardCarrinhoBody";
import CardHomeFooter from "../../components/CardHomeFooter";

import "./style.css";

function Carrinho(){
    return (
        <div className = "page-carrinho">
            <CardHomeHeader/>
            <CardCarrinhoBody/>
            <CardHomeFooter/>
        </div>
    )
}

export default Carrinho;

