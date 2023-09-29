import React from "react";
import {Link} from "react-router-dom"
import Selo01 from "../../Assets/IMG/Selo01.png"
import Selo02 from "../../Assets/IMG/Selo02.png"
import Selo03 from "../../Assets/IMG/Selo03.png"

import { StyleCardHomeFooter } from "./style";

function CardHomeFooter(){
    return(
        <>
        <StyleCardHomeFooter>
            <footer>
                <div className= "div-info-footer">
                    <div>
                        <Link to='' className= "linkFooter">Atendimento <br/>0800-722-478</Link>
                    </div>
                    <div>
                        <Link to='' className= "linkFooter">Home</Link>
                    </div>
                    <div>
                        <Link to='' className= "linkFooter">Quem somos</Link>
                    </div>
                    <div>
                        <Link to='' className= "linkFooter">Serratec</Link>
                    </div>
                </div>
                <div className= "div-selo-footer">
                    <div>
                    <img 
                        className= "foto-selo"
                        src={Selo01} 
                        alt="Selo de Confiabilidade"
                    />
                    </div>
                    <div>
                    <img 
                        className= "foto-selo"
                        src={Selo02} 
                        alt="Selo de Confiabilidade"
                    />
                    </div>
                    <div>
                    <img 
                        className= "foto-selo"
                        src={Selo03} 
                        alt="Selo de Confiabilidade"
                    />
                    </div>
                </div>
            </footer>
        </StyleCardHomeFooter>
        </>
    )
}

export default CardHomeFooter;