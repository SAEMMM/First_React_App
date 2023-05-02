import React from 'react'
import * as S from '../style/Styles'
import { useNavigate } from 'react-router-dom';

function Nav() {
    const navigate = useNavigate(

    )
    return (
        <S.Background size="Nav">
            <S.StRightMenu>
                <S.StBtn btn="기본" onClick={() => {navigate('/')}}>홈</S.StBtn>
                <S.StBtn btn="기본" onClick={() => window.open('https://github.com/SAEMMM/First_React_App')}>깃허브</S.StBtn>
                <S.StBtn btn="기본" onClick={() => {navigate('/visited')}}>방명록</S.StBtn>
            </S.StRightMenu>            
        </S.Background>
    )
}

export default Nav