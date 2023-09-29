import React, { useState } from "react";
import CardHome from "./CardHome/index"
import Produtos from "../../Api/DB/Produtos.json"
// import api from "../../service/api";

import { StyleCardHomeBody } from "./style"

function CardHomeBody(){
    const [produtosData, setProdutosData] = useState(Produtos)

    // api.get(`/produto`)
    //     .then((response) => {
    //       if (response.status === 200) {
    //         setProdutosData(response.data);
    //       }
    //     })
    //     .catch((error) => {
    //       alert(error.message);
    //     });

    //     const [produtosData, setProdutosData] = useState()

    return(
        <>
        <StyleCardHomeBody>
            <CardHome produto={produtosData[4]}/>
            <CardHome produto={produtosData[1]}/>
            <CardHome produto={produtosData[2]}/>
        </StyleCardHomeBody>
        </>

    )
}

export default CardHomeBody;