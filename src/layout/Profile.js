import React, { useEffect, useState } from 'react'
import * as S from '../style/Styles'
import { FaHeart } from "react-icons/fa";
import profileimg from '../profileimg.jpg'
import axios from "axios"

function Profile() {

    // 좋아요 state
    const [like, setLike] = useState(8371)
    // 좋아요 데이터 불러오기
    const addLikeHandler = () => {
        setLike(like + 1)
    }

    // useEffect(() => {
    //     fetchLike()
    // }, [])

    // 좋아요 천단위 콤마
    function commaAdd(num) {
        const regexp = /\B(?=(\d{3})+(?!\d))/g
        return num.toString().replace(regexp, ",")
        }
    
    return (
        <S.Background size="Profile">
            <S.StLeftProfile>
                <S.StProfileImg style={{ backgroundImage: 'url(' + profileimg + ')' }}></S.StProfileImg>
                <S.StProfileMsg>안녕하세요 리액트반 신샘입니다! 반갑습니다 잘 부탁드립니다^^
                    싸이월드st에요<br />
                    보실 때에는 PC에서 전체 화면으로 봐주시고, 방명록 남겨주시고 가세요~</S.StProfileMsg>
                <S.StProfileHr />
                <S.StProfileName>
                    <span className='span'>신샘</span>(♀) 1996. 8. 30<br />
                    Velog <span onClick={() => 
                        window.open('https://velog.io/@saemmmm')} 
                        className='velogLink'>saemmmm.log</span> 👈
                </S.StProfileName>
                <S.StProfileLike>
                    <FaHeart onClick={addLikeHandler} className='heart' />
                    <p>좋아요<br />{commaAdd(like)}개</p>
                </S.StProfileLike>
            </S.StLeftProfile>
        </S.Background>
    )
}

export default Profile