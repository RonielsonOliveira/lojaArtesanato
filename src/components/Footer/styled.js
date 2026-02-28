import styled from "styled-components";
import * as colors from '../../config/colors'
export const NavFooter = styled.footer`
  background: ${colors.primaryColor};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);

  a {
    color: #fff;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

