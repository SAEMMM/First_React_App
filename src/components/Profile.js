import React, { useEffect, useState } from 'react'
import styled from "styled-components";
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
        <Background>
            <StLeftProfile>
                <StProfileImg style={{ backgroundImage: 'url(' + profileimg + ')' }}></StProfileImg>
                <StProfileMsg>안녕하세요 리액트반 신샘입니다! 반갑습니다 잘 부탁드립니다^^
                    싸이월드st에요<br />
                    보실 때에는 PC에서 전체 화면으로 봐주시고, 방명록 남겨주시고 가세요~</StProfileMsg>
                <StProfileHr />
                <StProfileName>
                    <span className='span'>신샘</span>(♀) 1996. 8. 30<br />
                    Velog <span onClick={() => 
                        window.open('https://velog.io/@saemmmm')} 
                        className='velogLink'>saemmmm.log</span> 👈
                </StProfileName>
                <StProfileLike>
                    <FaHeart onClick={addLikeHandler} className='heart' />
                    <p>좋아요<br />{commaAdd(like)}개</p>
                </StProfileLike>
            </StLeftProfile>
        </Background>
    )
}

export default Profile

const Background = styled.div`
    width: 320px;
    height: 820px;
    padding: 40px 0px 10px 0px;
    box-sizing: border-box;
    background-color: Silver;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-radius: 20px;
`

const StLeftProfile = styled.div`
  width: 300px;
  height: 800px;
  background-color: White;
  padding: 50px 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 20px;
  align-itemS: center;
  border: 1px solid black;
`

const StProfileImg = styled.div`
    width: 200px;
    height: 200px;
    background-size: cover;
    background-position: center;
    border: 1px solid black;
`

const StProfileMsg = styled.div`
    width: 200px;
    height: 300px;
    text-align: center;
    display: flex;
    align-items: center;
`
const StProfileHr = styled.hr`
    width: 230px;
    height: 2px;
    background-color: black;
    border: none;
`

const StProfileName = styled.div`
    width: 200px;
    height: 50px;
    text-align: center;
    .span {
        color: CornflowerBlue;
        font-weight: bold;
    }
    .velogLink {
        color: CornflowerBlue;
        font-weight: bold;
        text-decoration: underline;
        cursor: pointer;
        &:hover {
            filter: brightness(0.7);
            transition: all 0.3s;
        }
    }
`

const StProfileLike = styled.div`
    width: 200px;
    height: 70px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    .heart {
        font-size: 50px;
        color: red;
        margin-right: 5px;
        cursor: pointer;
        &:hover {
            filter: brightness(0.7);
            transition: all 0.3s;
        }
        &:active {
            color: LightPink;
        }
    }
`