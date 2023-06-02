import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main"
import Footer from "./Components/Footer";
import { GlobalStyled } from "./Styled/Styled";
export default function App(){
    return(
        <div>
            <Header/>
            <Main/>
            <Footer/>
            <GlobalStyled/>
        </div>
    )
}
