import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { Card } from "./components/Card";
import { Dracula } from "./components/Dracula";

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <Container>
      <Card title="teste 1" content="ola" />
      <Dracula />
    </Container>
  );
}

export default App;
