import React from "react";
import { Container } from "../../styles/GlobalStyles.js";
import Mock from "../../pages/Home/produtosMock.json";
import Card from "../../components/Card/index.js";
import { CardsContainer } from "../../components/Card/styled.js";
import Filter from "../../components/Filter/index.js";
export default function Contato() {
  return (
    <Container className="content-wrapper">
      <CardsContainer>
        {Mock.map((produto, index) => (
          <Card
            key={produto.id}
            id={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            photo={produto.imagem}
          />
        ))}
      </CardsContainer>
    </Container>
  );
}
