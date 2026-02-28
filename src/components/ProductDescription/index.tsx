import { MdDescription } from "react-icons/md";
import { Description, Title, TitleWrapper, Wrapper } from "./styled.ts";

export type ProductDescriptionProps = {
  descricao: string;
};

export default function ProductDescription({
  descricao,
}: ProductDescriptionProps) {
  return (
    <Wrapper>
      <TitleWrapper>
        <MdDescription size={34} />
        <Title>Descrição do Produto</Title>
      </TitleWrapper>
      <Description>{descricao}</Description>
    </Wrapper>
  );
}
