import React from 'react'
import MidMain from '../layout/MidMain'
import VisitedMain from '../visited/VisitedMain'
import VisitedDetail from '../pages/VisitedDetail'
import VisitedDetailEdit from '../pages/VisitedDetailEdit'
import Profile from '../layout/Profile'
import Nav from '../layout/Nav'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

function Router() {
  return (
    <StBackground>
        <Profile />
        <Routes>
          <Route path="/" element={<MidMain />} />
          <Route path="/visited" element={<VisitedMain />} />
          <Route path="/:id" element={<VisitedDetail />} />
          <Route path="/:id/edit" element={<VisitedDetailEdit />} />
        </Routes>
        <Nav />
      </StBackground>
  )
}

export default Router

const StBackground = styled.div`
  width: 100%;
  height: 1000px;
  background-color: WhiteSmoke;
  display: flex;
  justify-content: center;
  padding: 20px;
  margin: auto;
`