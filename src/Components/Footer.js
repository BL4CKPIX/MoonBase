import React from "react";
import * as S from '../Styled/Styled'
import mulher from '../image/mulher.png'
export default function Footer(){
    return(
        <S.BoxFooter>
            <img src={mulher} alt="Mulher No Escritorio" />
            <S.FooterText>
                <h2>We’re Moon Base</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam leo urna turpis semper sed a vulputate mi. Diam nisl non in et mattis. Sit pulvinar cursus integer lectus sagittis bibendum. Rhoncus cras diam tellus convallis.</p>
                <p>Condimentum aliquam arcu arcu massa purus egestas ante vulputate nisl. Nisl tellus non, eu velit mauris, lectus vel, ornare. Pellentesque in at ac tortor ipsum commodo. Sit sed nulla blandit tincidunt velit aliquam dui ipsum amet. Tincidunt sit mauris, tempus tincidunt orci integer.</p>
            </S.FooterText>
        </S.BoxFooter>
    )
}