import React from 'react'
import styled from 'styled-components'
import { useParams } from "react-router-dom"
import axios from 'axios'
import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function VisitedDetailEdit() {

    let navigate = useNavigate()

    // 방명록 관리 state
    const [board, setBoard] = useState(null)
    // 방명록 가져오기
    const fetchBoard = () => {
        axios.get('http://localhost:4000/board/')
            .then((res) => {
                setBoard(res.data)
            })
            .catch(() => { console.log('실패') })
    }
    console.log(board)

    let { id } = useParams()

    let detail = board?.find((item) => {
        return item.id === parseInt(id)
    })

    // 방명록 수정 state
    const [edit, setEdit] = useState('')
    // 방명록 수정하기
    const onEditHandler = () => {
        axios.patch(`http://localhost:4000/board/${id}`, {
            contents: edit, writer: board.writer
        })
        board?.map(item => {
            if (item.id == id) {
                return { ...item, contents: edit }
            } else {
                return item
            }
        })
        alert('수정 되었습니다!')
        navigate('/visited')
    }

    useEffect(() => {
        fetchBoard()
    }, [])

    return (
        <Background>
            <StMiddle>
                <DetailBox>
                    <CenterDiv>
                        <StBtn onClick={onEditHandler} btn='완료'>완료</StBtn>
                        <NavLink to={'/visited'}><StBtn btn='취소'>취소</StBtn></NavLink>
                    </CenterDiv>
                    <h1>방명록 수정하기 ✍️</h1>
                    <p className='pBold'>작성자 💬 {detail && detail.writer}</p>
                    <DetailBoxEdit value={edit} onChange={(e) => {
                        setEdit(e.target.value)
                    }}>
                    </DetailBoxEdit>
                </DetailBox>
            </StMiddle>
        </Background>
    )
}

export default VisitedDetailEdit

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
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  overflow: auto;
`

const DetailBox = styled.div`
    width: 600px;
    height: 700px;
    text-align: center;
    box-sizing: border-box;
    padding: 10px;
    background-color: Gainsboro;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .pBold {
        font-weight: bold;
    }
`

const DetailBoxEdit = styled.textarea`
    width: 550px;
    height: 400px;
    background-color: white;
    border: 1px solid gray;
    border-radius: 5px;
    resize: none;
    box-sizing: border-box;
    padding: 10px;
`

const CenterDiv = styled.div`

`
const StBtn = styled.button`
    width: 80px;
    height: 30px;
    background-color: ${props => props.btn === '완료' ? 'CornflowerBlue'
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