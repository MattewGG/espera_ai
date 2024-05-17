import React, { useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  background-color: #1d1d1d;
  widht: 200px;
  border-radius: 5px;
  margin: 10px;

  h1 {
    color: green;
  }

  button {
    background-color: red;
  }
`;

export function Dracula() {
  //você pode o valor do useState de 0 para outro
  const [count, SetCount] = useState(0);
  //voce sempre cria as const dentro da função :(
  //Onclick sempre pega a interação com o botação para contar

  //sempre chama entre {}  esse tipo de interaçao.
  return (
    <Container>
      <h1>Contador: {count} </h1>
      <button onClick={() => SetCount(count + 1)}> Aumentar 1</button>
      <button onClick={() => SetCount(count - 1)}>Diminuir 1 </button>
    </Container>
  );
}

//sempre que criar o componente faça o index dele na mesma pasta
