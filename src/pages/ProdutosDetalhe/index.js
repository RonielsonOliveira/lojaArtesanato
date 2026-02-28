import { useParams } from "react-router-dom";
import Mock from "../Home/produtosMock.json";
import { Container } from "../../styles/GlobalStyles";
import {
  Details,
  Image,
  Title,
  Price,
  Info,
  Button,
  ProductWrapper,
  PageWrapper,
  ButtonWrapper,
} from "./styled";
import ProductDescription from "../../components/ProductDescription/index.tsx";
import ProductExpecification from "../../components/ProductExpecification/index.tsx";

export default function ProdutoDetalhe() {
  const { id } = useParams();
  const produto = Mock.find((item) => item.id === Number(id));

  if (!produto) {
    return <h2>Produto não encontrado</h2>;
  }

  return (
    <Container>
      <PageWrapper>
        <ProductWrapper>
          <Image>
            <img src={produto.imagem} alt={produto.nome} />
          </Image>

          <Details>
            <Title>{produto.nome}</Title>
            <Price>R$ {produto.preco.toFixed(2)}</Price>
            <Info>
              <p>Categoria: {produto.categoria}</p>
              <p>Estoque disponível: {produto.quantidade}</p>
            </Info>
            <ButtonWrapper>
              <Button>Comprar</Button>
            </ButtonWrapper>
          </Details>
        </ProductWrapper>
        <ProductDescription descricao={produto.descricao} />
        <ProductExpecification especificacao={produto.especificacao} />
      </PageWrapper>
    </Container>
  );
}
