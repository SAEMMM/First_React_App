import React from 'react'
import * as S from '../style/Styles'
import MidHome from '../components/MidHome'


function MidMain() {

    return (
        <S.Background size="MidMain">
            <S.StMiddle>
                <S.StMiddleHeader>
                    <h1>First React App 🏠</h1>
                </S.StMiddleHeader>
                <MidHome />
            </S.StMiddle>
        </S.Background>
    )
}

export default MidMain

