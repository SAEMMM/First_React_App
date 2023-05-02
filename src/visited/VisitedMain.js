import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import profileimg from '../profileimg.jpg'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import VisitedInput from './VisitedInput'


function VisitedMain() {

     // 방명록 관리 state
     const [board, setBoard] = useState(null)
     // 방명록 가져오기
     const fetchBoard = () => {
         axios.get(`${process.env.REACT_APP_SERVER_URL}/board`)
             .then((res) => {
                 setBoard(res.data)
             })
             .catch(() => { console.log('실패') })
     }

    // 방명록 추가 state
    const [newBoard, setNewBoard] = useState({
        contents: '', writer: '',
    })

    // 방명록 삭제하기
    const onDeleteHandler = async (boardId) => {
        axios.delete(`${process.env.REACT_APP_SERVER_URL}/board/${boardId}`)
        alert('삭제 되었습니다!')
        fetchBoard()
    }

    useEffect(() => {
        fetchBoard()
    }, [])

    return (
        <Background>
            <StMiddle>
                <VisitedInput newBoard={newBoard} setNewBoard={setNewBoard} />
                {
                    board?.map((item) => {
                        return (<VisitedBoxLine key={item.id}>
                            <VisitedBoxHeader>
                                <VisitedBoxWriter>{item.writer}</VisitedBoxWriter>
                                <MarginLeft>
                                    <NavLink to={`/${item.id}`}><StBtn btn="더보기">더보기</StBtn></NavLink>
                                    <StBtn onClick={() => onDeleteHandler(item.id)} btn="삭제">삭제</StBtn>
                                </MarginLeft>
                            </VisitedBoxHeader>
                            <VisitedBoxImg style={{ backgroundImage: 'url(' + profileimg + ')' }}></VisitedBoxImg>
                            <VisitedBoxMsg>{item.contents}</VisitedBoxMsg>
                        </VisitedBoxLine>)
                    })
                }
            </StMiddle>
        </Background >
    )
}

export default VisitedMain

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
  border: 1px solid black;
  overflow: auto;
`

const StBtn = styled.button`
    width: 80px;
    height: 30px;
    background-color: ${props => props.btn === '확인' ? 'CornflowerBlue'
        : (props => props.btn === '더보기' ? 'MediumSeaGreen' : 'IndianRed')};
    color: white;
    font-weight: bold;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 5px;
    &:hover {
        filter: brightness(0.7);
        transition: all 0.3s;
    }
    &:active {
        background-color: LightSlateGrey;
    }
`

const VisitedBoxLine = styled.div`
    box-sizing: border-box;
    width: 600px;
    height: 250px;
    background-color: Gainsboro;
    margin-top: 10px;
    flex-shrink: 0;
    display: flex;
    flex-flow: row wrap;
    padding: 10px;
    justify-content: center;
    align-items: center;
`

const VisitedBoxHeader = styled.div`
    width: 560px;
    height: 50px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`

const VisitedBoxWriter = styled.p`
    color: black;
    font-weight: bold;
`

const VisitedBoxImg = styled.div`
    width: 150px;
    height: 150px;
    background-size: cover;
    background-position: center;
    border: 1px solid black;
`

const VisitedBoxMsg = styled.div`
    width: 400px;
    height: 150px;
    background-color: white;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px;
    margin-left: 10px;
    border: 1px solid black;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    .p {
        color: CornflowerBlue;
        text-decoration: underline;
        cursor: pointer;
        &:hover {
            filter: brightness(0.7);
            transition: all 0.3s;
        }
    }

`

const VisitedBoxMsgUpdate = styled.textarea`
    width: 400px;
    height: 150px;
    background-color: white;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px;
    margin-left: 10px;
    border: 1px solid black;
    resize: none;
`

const MarginLeft = styled.div`
    margin-left: auto;
`