import styled from "styled-components";
import * as colors from "../../config/colors";
export const NavFooter = styled.footer`
  background: ${colors.primaryColor};
  color: #fff;
  padding: 15px;
  width: 100%;
  height: 150px;
  text-align: center;

  a {
    color: ${colors.colorTextMain};
    margin: 0 10px 0 0;
    font-weight: bold;
  }
  div {
    justify-content: space-between;
  }
`;
export const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  margin: 10px auto 10px auto; //topo/ esquerda/ bottom / direita
  width: 60%;
  font-family: sans-serif;
  font-weight: bold;
  color: ${colors.textcolor};
`;

export const Content = styled.div`
  font-size: 20px;
  font-family: sans-serif;
  text-align: center;
  margin-top: 10px;
  margin: 0 auto;
  line-height: 1.7;
  width: 80%;
  color: #fff;
`;
export const Grid = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 100%;

  figure {
    display: flex;
    flex-direction: column; /* 🔹 Coloca a legenda abaixo */
    align-items: center;
    text-align: center;
  }

  img {
    width: 280px;
    border-radius: 12px;
    object-fit: cover;
    transition: all 0.3s ease;
  }

  figcaption {
    margin-top: 18px;
    font-size: 24px;
    color: #fff;
    font-weight: 500;
    margin-bottom: 30px;
  }
`;

export const Button = styled.button`
  background-color: ${colors.primaryColor};
  color: #fff;
  font-size: 38px;
  font-weight: bold;
  padding: 12px 24px;
  border: 3px solid ${colors.textcolor};

  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;
  margin: 20px auto;
  display: block;

  &:hover {
    color: ${colors.primaryColor};
    background-color: ${colors.textcolor};
    transform: scale(1.15);
  }

  &:active {
    transform: scale(0.98);
  }
`;
export const Info = styled.div`
  img {
    width: 150px;
    border-radius: 12px;
    object-fit: cover;
    transition: all 0.3s ease;
    margin-top: 20px;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
  }
`;
