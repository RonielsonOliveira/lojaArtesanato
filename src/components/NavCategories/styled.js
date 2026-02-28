import styled from "styled-components";
import * as colors from "../../config/colors";

export const Lista = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.colorSecondary};
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding: 10px;
  li {
    color: ${colors.textcolor};
    font-weight: bold;
    font-size: 20px;
    padding: 10px;

    text-decoration: none;

    &:hover {
      color: ${colors.colorTextMain};
      cursor: pointer;
    }
  }
`;
