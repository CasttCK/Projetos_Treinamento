import React from 'react';

function DiretoFilho(props){
    return(
        <>
            <span>{props.nome} </span>
            <span>{props.idade} </span>
            <span>{props.nerd ? 'Verdadeiro' : 'Falso'}</span>
        </>

    )
}

export default DiretoFilho;
