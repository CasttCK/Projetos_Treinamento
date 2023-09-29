import React from "react";
import CardHomeHeader from "../../components/CardHomeHeader";
import CardHomeCarrinho from "../../components/CardHomeCarrinho";
import CardHomeBody from "../../components/CardHomeBody";
import CardHomeFooter from "../../components/CardHomeFooter";

import "./style.css";

function Home(){
    return (
        <div className = "page-home">
            <CardHomeHeader/>
            <CardHomeCarrinho/>
            <CardHomeBody/>
            <CardHomeFooter/>
        </div>
    )
}

export default Home;
