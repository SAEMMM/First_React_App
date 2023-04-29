import styled from "styled-components";
import MidMain from "./components/MidMain";
import Nav from "./components/Nav";
import Profile from "./components/Profile";

function App() {
  return (
    <StBackground>
      <Profile />
      <MidMain />
      <Nav />
    </StBackground>
  );
}

export default App;

const StBackground = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  margin: auto;
`