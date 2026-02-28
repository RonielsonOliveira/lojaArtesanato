import { Link } from "react-router-dom";
import { ImageWrapper, Info, Title, TitleWrapper } from "./styled";

export default function Card({ nome, preco, photo, id }) {
  return (
    <Link to={`/produto/${id}`} style={{ textDecoration: "none" }}>
      <Info>
        <ImageWrapper>
          <img src={photo} alt={nome} />
        </ImageWrapper>
        <TitleWrapper>
          <Title>{nome}</Title>
          <span>{`R$ ${preco.toFixed(2)}`}</span>
        </TitleWrapper>
        <button>Comprar</button>
      </Info>
    </Link>
  );
}
