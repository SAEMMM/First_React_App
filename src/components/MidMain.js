import React from 'react'
import styled from "styled-components";
import MiddleHome from '../pages/MiddleHome';


function MidMain() {

    return (
        <Background>
            <StMiddle>
                <StMiddleHeader>
                    <h1>First React App 🏠</h1>
                </StMiddleHeader>
                <MiddleHome />
            </StMiddle>
        </Background>
    )
}

export default MidMain

const Background = styled.div`
    width: 670px;
    height: 820px;
    padding: 40px 0px 10px 0px;
    box-sizing: border-box;
    background-color: Silver;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-radius: 20px;
`

const StMiddle = styled.div`
  width: 650px;
  height: 800px;
  background-color: White;
  border-radius: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-width: 0px 1px 1px 1px;
  border-color: black;
  border-style: solid;
`

const StMiddleHeader = styled.div`
    box-sizing: border-box;
    padding-left: 10px;
    width: 650px;
    height: 100px;
    background-color: Silver;
    display: flex;
    align-items: flex-end;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-style: black;
`