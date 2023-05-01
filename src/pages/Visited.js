import React from 'react'
import styled from 'styled-components'
import profileimg from '../profileimg.jpg'

function Visited() {
    return (
        <Background>
            <StMiddle>

                <VisitedInputBox>
                    <VisitedInput placeholder='남기고 싶은 말을 10자 이상 작성해주세요!' />
                    <VisitedInputFooter>
                        <span className='span'>작성자 </span><VisitedInputWriter placeholder='8자 미만' />
                        <StBtn btn="확인">확인 💬</StBtn>
                    </VisitedInputFooter>
                </VisitedInputBox>

                <VisitedBoxLine>
                    <VisitedBoxHeader>
                        <VisitedBoxWriter>작성자</VisitedBoxWriter>
                        <MarginLeft>
                            <StBtn btn="수정">수정</StBtn>
                            <StBtn btn="삭제">삭제</StBtn>
                        </MarginLeft>
                    </VisitedBoxHeader>
                    <VisitedBoxImg style={{ backgroundImage: 'url(' + profileimg + ')' }}></VisitedBoxImg>
                    <VisitedBoxMsg>
                        방명록 남긴 데이터를 여기에 보여줄거에요<br />
                        만약 말이 길어진다면.. 상세페이지 버튼을 눌러서 보면 된답니다<br />
                        상세페이지는 portal을 사용해서 모달로^^.. 띄울거에요
                    </VisitedBoxMsg>
                </VisitedBoxLine>

            </StMiddle>
        </Background>
    )
}

export default Visited

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

const VisitedInputBox = styled.div`
    width: 600px;
    height: 250px;
    box-sizing: border-box;
    padding: 20px;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-bottom-style: black;
    margin-top: 20px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`

const VisitedInput = styled.textarea`
    width: 550px;
    height: 150px;
    background-color: white;
    border: 1px solid gray;
    border-radius: 5px;
    resize: none;
    box-sizing: border-box;
    padding: 10px;
`

const VisitedInputFooter = styled.div`
    margin-left: auto;
    .span {
        font-size:14px;
    }
`
const VisitedInputWriter = styled.input`
    width: 100px;
    height: 25px;
    border: 1px solid gray;
    border-radius: 5px;
    margin-right: 5px;
`

const StBtn = styled.button`
    width: 80px;
    height: 30px;
    background-color: ${props => props.btn === '확인' ? 'CornflowerBlue'
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
`

const MarginLeft = styled.div`
    margin-left: auto;
`