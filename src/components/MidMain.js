import React from 'react'
import styled from "styled-components";
import miniroom from '../miniroom.png'

function MidMain() {
    return (
        <Background>
            <StMiddle>
                <StMiddleHeader>
                    <h1>First React App</h1>
                </StMiddleHeader>
                <StMiddleBoard>
                    방명록1 | 안녕하세요 <br />
                    방명록2 | 방명록입니다 <br />
                    방명록3 | 누르면 상세 페이지로 이동해요 <br />
                    방명록4 | 내용이 길면 말줄임표가 보이도록 할거에요 <br />
                    방명록5 | 최대 6개까지만 보일거에요 <br />
                    방명록6 | 게시물 id순으로 보이게 할게요 <br />
                </StMiddleBoard>
                <StMiddelImg style={{ backgroundImage: 'url(' + miniroom + ')' }}></StMiddelImg>
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
`

const StMiddleHeader = styled.div`
    box-sizing: border-box;
    padding-left: 10px;
    width: 650px;
    height: 100px;
    background-color: Silver;
    display: flex;
    align-items: flex-end;
`

const StMiddleBoard = styled.div`
    box-sizing: border-box;
    width: 600px;
    height: 200px;
    /* background-color: skyblue; */
    margin-top: 20px;
    line-height: 30px;
    padding: 10px;
    border-bottom-style: solid;
    border-bottom-width: 2px;;
    border-bottom-style: black;
`

const StMiddelImg = styled.div`
    width: 600px;
    height: 400px;
    margin-top: 20px;
    background-size: cover;
    background-position: center;
`