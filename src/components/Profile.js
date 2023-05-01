import React, { useState } from 'react'
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import profileimg from '../profileimg.jpg'

function Profile() {

    // 좋아요 state
    const [like, setLike] = useState(8371)
    // 좋아요 function
    const addLike = () => {
        setLike(like + 1)
    }
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
                    싸이월드 클론은 아니고 st에요 방명록 남겨주세요~</StProfileMsg>
                <StProfileHr />
                <StProfileName>
                    <span className='span'>신샘</span>(♀) 1996. 8. 30<br />
                    Velog <span className='span'>saemmmm.log</span>
                </StProfileName>
                <StProfileLike>
                    <FaHeart onClick={addLike} className='heart' />
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