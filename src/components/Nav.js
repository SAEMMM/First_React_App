import React from 'react'
import styled from "styled-components";

function Nav() {
    return (
        <Background>
            <StRightMenu>오른쪽 메뉴(페이지 이동하면 색 바뀜)</StRightMenu>
        </Background>
    )
}

export default Nav

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

const StRightMenu = styled.div`
  width: 300px;
  height: 800px;
  background-color: White;
  border-radius: 20px;
`