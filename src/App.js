import logo from "./logo.svg";
import "./App.css";
import { Card } from "./components/Card";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <Container>
      <Card title="teste 1" content="ola" />
      <Card title="teste 2 " />
      <Card title="teste 3" />
    </Container>
  );
}

export default App;
