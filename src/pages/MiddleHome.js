import React from 'react'
import styled from 'styled-components'
import miniroom from '../miniroom.png'

function MiddleHome() {
    return (
        <>
            <StMiddleBoard>
                💬 1 | 안녕하세요 <br />
                💬 2 | 방명록입니다 <br />
                💬 3 | 누르면 상세 페이지로 이동해요 <br />
                💬 4 | 내용이 길면 말줄임표가 보이도록 할거에요 <br />
                💬 5 | 최대 6개까지만 보일거에요 <br />
                💬 6 | 게시물 id순으로 보이게 할게요 <br />
            </StMiddleBoard>
            <StMiddelImg style={{ backgroundImage: 'url(' + miniroom + ')' }}></StMiddelImg>
        </>
    )
}

export default MiddleHome

const StMiddleBoard = styled.div`
    box-sizing: border-box;
    width: 600px;
    height: 200px;
    margin-top: 20px;
    line-height: 30px;
    padding: 10px;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-bottom-style: black;
`

const StMiddelImg = styled.div`
    width: 600px;
    height: 400px;
    margin-top: 20px;
    background-size: cover;
    background-position: center;
    border: 1px solid black;
`