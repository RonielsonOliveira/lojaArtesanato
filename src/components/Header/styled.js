import styled from "styled-components";
import * as colors from "../../config/colors";

export const Nav = styled.nav`
  background: ${colors.colorPrimary};
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 180px;
  gap: 20px; /* Espaço entre imagem e link */

  a {
    color: ${colors.textcolor};
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;
  }

  img {
    width: 140px;
  }
`;
export const LogoGroup = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  justify-items: center;
`;

export const SearchGroup = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    width: 100%;
    height: 30px;
    border-radius: 4px;
    border: none;
    padding: 8px;
  }
`;

export const UserGroup = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 4px;
  gap: 10px;
  img {
    color: wheat;
  }
`;
