import React from 'react'
import styled from 'styled-components'
import * as S from '../style/Styles'
import { useParams } from "react-router-dom"
import axios from 'axios'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function VisitedDetail() {

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

    let { id } = useParams()

    let detail = board?.find((item) => {
        return item.id === parseInt(id)
    })

    useEffect(() => {
        fetchBoard()
    }, [])

    return (
        <S.Background size="MidMain">
            <StMiddle>
                <DetailBox>
                    <div>
                        <NavLink to={'/visited'}><S.StBtn btn='기본' size='기본'>목록</S.StBtn></NavLink>
                        <NavLink to={`/${id}/edit`}><S.StBtn btn='기능' size='기본'>수정</S.StBtn></NavLink>
                    </div>
                    <h1>방명록 상세보기 👀</h1>
                    <DetailBoxMsg>
                        <p className='pBold'>작성자 💬 {detail && detail.writer}</p>
                        {detail && detail.contents}
                    </DetailBoxMsg>
                </DetailBox>
            </StMiddle>
        </S.Background>
    )
}

export default VisitedDetail

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

const DetailBoxMsg = styled.div`
    width: 550px;
    height: 500px;
    box-sizing: border-box;
    padding: 10px;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
`