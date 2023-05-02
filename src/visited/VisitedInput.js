import React from 'react'
import * as S from '../style/Styles'
import axios from 'axios'

function VisitedInput({ newBoard, setNewBoard, fetchBoard }) {

    // 방명록 추가하기
    const onSubmitHandler = async () => {
        if (newBoard.contents == '' || newBoard.writer == '') {
            alert('방명록 내용과 작성자를 입력해주세요!')
        }
        if (newBoard.contents.length <= 10) {
            alert('10자 이상 입력해주세요!')
        } else {
            axios.post(`${process.env.REACT_APP_SERVER_URL}/board`, newBoard)
            fetchBoard()
        }
    }

    return (
        <form onSubmit={(e) => {
            // e.preventDefault()
            onSubmitHandler()
        }}>
            <S.VisitedInputBox>
                <S.VisitedInputtext placeholder='남기고 싶은 말을 10자 이상 작성해주세요!'
                    value={newBoard.contents}
                    onChange={(e) => {
                        setNewBoard({ contents: e.target.value, writer: newBoard.writer })
                    }} />
                <S.VisitedInputFooter>
                    <span className='span'>작성자 </span>
                    <S.VisitedInputWriter placeholder='8자 미만'
                        value={newBoard.writer}
                        onChange={(e) => {
                            setNewBoard({ writer: e.target.value, contents: newBoard.contents })
                        }} />
                    <S.StBtn size="기본" btn="기본">확인 💬</S.StBtn>
                </S.VisitedInputFooter>
            </S.VisitedInputBox>
        </form>
    )
}

export default VisitedInput

