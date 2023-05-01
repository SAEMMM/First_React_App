import React from 'react'
import styled from 'styled-components'
import { useParams } from "react-router-dom"
import axios from 'axios'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function VisitedDetail() {

    // 방명록 관리 state
    const [board, setBoard] = useState(null)
    // 방명록 가져오기
    const fetchBoard = () => {
        axios.get('http://localhost:4000/board')
            .then((res) => {
                setBoard(res.data)
            })
            .catch(() => { console.log('실패') })
    }

    let { id } = useParams()

    let detail = board?.find((item) => {
        return item.id === parseInt(id)
    })

    useEffect(() => {
        fetchBoard()
    }, [])

    return (
        <Background>
            <StMiddle>
                <DetailBox>
                    <NavLink to={'/visited'}><StBtn btn='목록'>목록</StBtn></NavLink>
                    <StBtn btn='수정'>수정</StBtn>
                    <h1>방명록 상세보기 👀</h1>
                    <p className='pBold'>작성자 💬 {detail.writer}</p>
                    {detail.contents}
                </DetailBox>
            </StMiddle>
        </Background>
    )
}

export default VisitedDetail

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
  justify-content: center;
  border: 1px solid black;
  overflow: auto;
`

const DetailBox = styled.div`
    width: 600px;
    height: 700px;
    /* background-color: skyblue; */
    text-align: center;
    .pBold {
        font-weight: bold;
    }
`

const StBtn = styled.button`
    width: 80px;
    height: 30px;
    background-color: ${props => props.btn === '목록' ? 'CornflowerBlue'
        : (props => props.btn === '수정' ? 'MediumSeaGreen' : 'IndianRed')};
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