import React from 'react'
import styled from 'styled-components'
import * as S from '../style/Styles'
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
        axios.get(`${process.env.REACT_APP_SERVER_URL}/board`)
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
    const onEditHandler = async () => {
        axios.patch(`${process.env.REACT_APP_SERVER_URL}/board/${id}`, {
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
        <S.Background size='MidMain'>
            <StMiddle>
                <DetailBox>
                    <div>
                        <S.StBtn onClick={onEditHandler} btn='기능' size='기본'>완료</S.StBtn>
                        <NavLink to={'/visited'}><S.StBtn btn='취소' size='기본'>취소</S.StBtn></NavLink>
                    </div>
                    <h1>방명록 수정하기 ✍️</h1>
                    <p className='pBold'>작성자 💬 {detail && detail.writer}</p>
                    <DetailBoxEdit value={edit} onChange={(e) => {
                        setEdit(e.target.value)
                    }}>
                    </DetailBoxEdit>
                </DetailBox>
            </StMiddle>
        </S.Background>
    )
}

export default VisitedDetailEdit

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