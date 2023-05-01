import React from 'react'
import styled from 'styled-components'
import miniroom from '../miniroom.png'
import axios from 'axios'
import { useState, useEffect } from 'react'

function MiddleHome() {
    const [board, setBoard] = useState(null)
    // 방명록 가져오기
    const fetchBoard = () => {
        axios.get('http://localhost:4000/board')
            .then((res) => {
                setBoard(res.data)
            })
            .catch(() => { console.log('실패') })
    }


    useEffect(() => {
        fetchBoard()
    }, [])

    return (
        <>
            <StMiddleBoard>
                {
                    board?.map((v) => {
                        return (
                            <div>
                                💬 {v.id} | {v.contents} <br />
                            </div>
                        )
                    })
                }

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
    overflow: hidden;
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