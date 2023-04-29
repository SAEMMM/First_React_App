import React from 'react'
import styled from "styled-components";

function MidMain() {
    return (
        <Background>
            <StMiddleTitle>가운데 제목, 미니룸(여기만 바뀜)</StMiddleTitle>
        </Background>
    )
}

export default MidMain

const Background = styled.div`
    width: 670px;
    height: 820px;
    background-color: Silver;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
`

const StMiddleTitle = styled.div`
  width: 650px;
  height: 800px;
  background-color: White;
  border-radius: 20px;
`