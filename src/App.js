import styled from "styled-components";
import MidMain from "./components/MidMain";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Visited from "./pages/Visited";
import { Route, Routes, Outlet } from 'react-router-dom';

function App() {
  return (
      <StBackground>
        <Profile />
        <Routes>
          <Route path="/" element={<MidMain />} />
          <Route path="/visited" element={<Visited />} />
        </Routes>
        <Nav />
      </StBackground>
  );
}

export default App;

const StBackground = styled.div`
  width: 100%;
  height: 1000px;
  background-color: WhiteSmoke;
  display: flex;
  justify-content: center;
  padding: 20px;
  margin: auto;
`