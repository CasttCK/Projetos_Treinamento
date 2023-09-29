import styled from "styled-components";

export const StyleCardHomeFooter = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
    
    display: flex;
    margin-top: 3rem;
    margin-bottom: -1rem;
    margin-left: -1rem;
    padding-right: 1.5rem;
    width: 100%;
    height: 12rem;
    background: rgb(199, 199, 199);

    .div-info-footer{
        width: 100%;
        margin-top: 1rem;
        display: flex;
        gap: 3rem;
        margin-left: 30%;
    }

    .linkFooter{
       text-decoration-line: none;
       font-family: 'Ubuntu', sans-serif;
       color: gray;
       font-size: 1.5rem;
    }

    .div-selo-footer{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 25rem;
    }

    .foto-selo{
        width: 8rem;
        margin-left: 2.5rem;
    }
`