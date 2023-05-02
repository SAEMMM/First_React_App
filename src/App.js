import styled from "styled-components";
import MidMain from "./components/MidMain";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Visited from "./pages/Visited";
import { Route, Routes } from 'react-router-dom';
import VisitedDetail from "./pages/VisitedDetail";
import { QueryClient, QueryClientProvider } from "react-query"
import VisitedDetailEdit from "./pages/VisitedDetailEdit";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StBackground>
        <Profile />
        <Routes>
          <Route path="/" element={<MidMain />} />
          <Route path="/visited" element={<Visited />} />
          <Route path="/:id" element={<VisitedDetail />} />
          <Route path="/:id/edit" element={<VisitedDetailEdit />} />
        </Routes>
        <Nav />
      </StBackground>
    </QueryClientProvider>
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