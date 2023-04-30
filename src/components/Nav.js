import React from 'react'
import styled from "styled-components";

function Nav() {
    return (
        <Background>
            <StRightMenu>
                <StRightMenuBtn>홈</StRightMenuBtn>
                <StRightMenuBtn>깃허브</StRightMenuBtn>
                <StRightMenuBtn>방명록</StRightMenuBtn>
            </StRightMenu>
        </Background>
    )
}

export default Nav

const Background = styled.div`
    width: 170px;
    height: 820px;
    padding: 40px 0px 10px 0px;
    box-sizing: border-box;
    background-color: Silver;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-radius: 20px;
`

const StRightMenu = styled.div`
  width: 170px;
  height: 800px;
  border-radius: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-top: 100px;
  padding-bottom: 540px;
  justify-content: space-around;
`

const StRightMenuBtn = styled.button`
    width: 150px;
    height: 50px;
    background-color: LightGray;
    border-radius: 5px;
    border: 1px solid black;
    font-size: 25px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        filter: brightness(0.7);
        transition: all 0.3s;
    }
    &:active {
        background-color: LightSlateGrey;
    }
`