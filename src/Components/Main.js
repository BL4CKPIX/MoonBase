import React from "react";
import * as S from '../Styled/Styled'
import LastKnight from '../image/LastKnight.png'
import DragonEye from '../image/DragonEye.png'
import Quest from '../image/Quest.png'
import RadioTee from '../image/RadioTee.png'
export default function Main(){
    return(
        <S.BoxMain>
            <S.BoxText>
                <h2>Take your next project to the moon</h2>
                <p>We’re an agency with our heads in the clouds. Let us create and push your next project into the stratosphere. </p>
                <S.BoxLogo>
                    <img src={LastKnight} alt="Logo LastKnight Paris" />
                    <img src={DragonEye} alt="Logo DragonEye" />
                    <img src={Quest} alt="Logo Quest" />
                    <img src={RadioTee} alt="Logo RadioTee" />
                </S.BoxLogo>
            </S.BoxText>
        </S.BoxMain>
    )
}