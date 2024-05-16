import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: #1d1d1d;
  width: 200px;
  border-radius: 5px;
  margin: 5px;

  h1 {
    color: yellow;
  }
`;

export function Card({ title, content }) {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{content}</p>
    </Container>
  );
}
