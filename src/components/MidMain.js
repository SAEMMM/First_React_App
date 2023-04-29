import React from 'react'
import styled from "styled-components";

function MidMain() {
    return (
        <>
            <StMiddleTitle>가운데 제목, 미니룸(여기만 바뀜)</StMiddleTitle>
        </>
    )
}

export default MidMain

const StMiddleTitle = styled.div`
  width: 650px;
  height: 800px;
  background-color: gray;
  margin-right: 10px;
`