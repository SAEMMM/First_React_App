import React from 'react'
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import profileimg from '../profileimg.jpg'

function Profile() {
    return (
        <>
            <StLeftProfile>
                <StProfileImg style={{ backgroundImage: 'url(' + profileimg + ')' }}></StProfileImg>
                <StProfileMsg>안녕하세요 리액트반 신샘입니다! 반갑습니다 잘 부탁드립니다^^</StProfileMsg>
                <StProfileHr />
                <StProfileName>
                    신샘(♀) 1996. 8. 30<br />
                    Velog saemmmm.log
                </StProfileName>
                <StProfileLike>
                    <FaHeart className='heart' />
                    <p>좋아요<br />9,134개</p>
                </StProfileLike>
            </StLeftProfile>
        </>
    )
}

export default Profile

const StLeftProfile = styled.div`
  width: 300px;
  height: 800px;
  background-color: lightgreen;
  margin-right: 10px;
  padding: 50px 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const StProfileImg = styled.div`
    width: 200px;
    height: 200px;
    background-size: cover;
    background-position: center;
    margin: auto;
`

const StProfileMsg = styled.div`
    width: 200px;
    height: 300px;
    /* background-color: white; */
    margin: auto;
    text-align: center;
    display: flex;
    align-items: center;
`
const StProfileHr = styled.hr`
    width: 200px;
    height: 1px;
    margin: auto;
    background-color: black;
    border: none;
`

const StProfileName = styled.div`
    width: 200px;
    height: 50px;
    /* background-color: white; */
    margin: auto;
    text-align: center;
`

const StProfileLike = styled.div`
    width: 200px;
    height: 70px;
    /* background-color: white; */
    margin: auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    .heart {
        font-size: 50px;
        color: red;
        margin-right: 5px;
    }
`