import React from 'react'
import styled from "styled-components";

function Nav() {
  return (
    <>
    <StRightMenu>오른쪽 메뉴(페이지 이동하면 색 바뀜)</StRightMenu>
    </>
  )
}

export default Nav

const StRightMenu = styled.div`
  width: 300px;
  height: 800px;
  background-color: skyblue;
`