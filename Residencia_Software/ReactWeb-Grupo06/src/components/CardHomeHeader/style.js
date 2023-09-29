import styled from "styled-components";

export const StyleCardHomeHeader = styled.div`
    
    .home-header{
        position: absolute;
        width: 100%;
        height: 8rem;
        left: 0px;
        top: 0px;
        background: rgb(172, 182, 187);
            h2{
                color: gray;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 38px;
                margin-left: 5%;
                margin-top: 2.5rem;
            }   
    }

    .nav-home-input{
        position: absolute;
        width: 20rem;
        height: 3rem;
        border: none;
        border-radius: 0.5rem;
        left: 60%;
        top: 2.5rem;
        background: rgb(199, 199, 199);
    }

    .nav-home-button{
        position: absolute;
        width: 5rem;
        height: 3rem;
        border: none;
        border-radius: 1.5rem;
        background: rgb(43, 155, 219);
        left: 90%;
        top: 2.5rem;

        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-style: normal;
        font-weight: bolder;
        font-size: 20px;
        display: block;
        align-items: center;
    }
    
    .linkTo{
        color: white;
        text-decoration-line: none;
    }
`