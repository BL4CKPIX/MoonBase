import styled,{createGlobalStyle} from "styled-components";
import Fundo from '../image/astronauta.png'

export const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }
`
// HEADER //

export const BoxOne = styled.div`
    display: flex;
    align-items: center;
    height: 18vh;
    justify-content: space-around;
    position: sticky;
    top: 0;
    div{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 45%;
        height: 70%;
    }
    h1{
        font-family: 'Noto Sans TC', sans-serif;
        font-weight: 500;
        font-size: 1.6rem;
    }
    
    h2{
        font-size: 1rem;
        font-family: 'Heebo', sans-serif;
        font-style: bold;
        text-align: center;
        padding-left: 7%;
        padding-right: 7%;
        padding-top: 2%;
        padding-bottom: 2%;
        background-color: black;
        color: white;
        border-radius: 8px;
        cursor: pointer;
        border: none;
    }
    ul{
        display: flex;
        justify-content: space-around;
        width: 50%;
        font-family: 'Heebo', sans-serif;
        font-weight: bold;
        list-style: none;   
        font-size: 1.1rem;
        li{
            cursor: pointer;
        }
    }
`

// Main //

export const BoxMain = styled.div`
    display: flex;
    align-items: center;
    height: 140vh;
    background-image: url(${Fundo});
    background-position: right;
    background-size: 95%;
    background-repeat: no-repeat;
`
export const BoxText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 60%;
    height: 70%;
    h2{
        font-size: 5.8rem;
        width: 70%;
        line-height: 100%;
        font-weight: 500;
        font-family: 'Heebo', sans-serif;
    }
    p{
        width: 68%;
        font-family: 'Heebo', sans-serif;
        font-size: 1.5rem;
    }
`
export const BoxLogo = styled.div`
    display: flex;
    justify-content: space-around;
    width: 75%;
    img{
        width: 8vw;
        height: 3.5vh;
    }
`

// Footer //

export const BoxFooter = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 150vh;
    img{
        width: 80%;
    }
`

export const FooterText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 40%;
    height: 65%;
    background-color: #EBF7FF;
    font-family: 'Heebo', sans-serif;
    line-height: 20px;
    position: relative;
    bottom: 15%;
    left: 20%;
    p{
        width: 80%;
    }
`