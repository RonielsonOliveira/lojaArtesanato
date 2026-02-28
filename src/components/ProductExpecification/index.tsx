import { Description, Title, TitleWrapper, Wrapper } from "./styled.ts";
import { CgDetailsMore } from "react-icons/cg";
export type ProductExpecificationProps = {
  especificacao: Record<string, string | number>;
};

export default function ProductExpecification({
  especificacao,
}: ProductExpecificationProps) {
  return (
    <Wrapper>
      <TitleWrapper>
        <CgDetailsMore size={34} />
        <Title>Especificações do Produto</Title>
      </TitleWrapper>

      <Description>
        {Object.entries(especificacao).map(([key, value]) => (
          <div key={key}>
            <strong>{key}:</strong> {value}
          </div>
        ))}
      </Description>
    </Wrapper>
  );
}
