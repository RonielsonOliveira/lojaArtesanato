import styled, { createGlobalStyle } from "styled-components";
import {
  primaryColor,
  textcolor,
  colorBgMain,
  colorTextMain,
  colorSecondary,
} from "../config/colors";
import "react-toastify/dist/ReactToastify.css";
import media from "styled-media-query";

export default createGlobalStyle`
  *{
   
   
    outline: none;
    
   
  }

  html, body, #root {
    
    margin: 0;
   
  }

  body {
     
    font-family: sans-serif;
    background: ${colorBgMain};
    
  
  
   
    
  }

  #root {
   
   
    min-height: 100vh; /* garante que o root ocupe toda a tela */
     background-color: ${colorBgMain};
  }

  main {
    flex: 1;          /* faz o main crescer para ocupar todo o espaço disponível */
    display: flex;
    flex-direction: column;
    min-height: 100vh;

   
  }

  button {
    cursor: pointer;
    background: ${colorSecondary};
    border: none;
    margin: 0 auto;
    color: #fff;
    width: 80%;
    padding: 10px 20px;
    border-radius: 4px;
    
    transition: all 300ms;
  }

  button:hover{
    filter: brightness(75%);
  }

  a {
    text-decoration: none;
    color: ${colorTextMain};
  }

  ul {
    list-style: none;
  }

  .Toastify__toast--success {
    background: ${primaryColor};
    color: #fff;
  }

  .Toastify__toast--error {
    background: ${textcolor};
    color: ${primaryColor};
  }
`;
export const Container = styled.section`
  background-color: ${colorBgMain};
  width: 90%;
  padding: 24px;
  display: flex;
  margin: 30px auto;

  border-radius: 12px;
  border: 2px dashed ${colorTextMain};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  ${media.lessThan("medium")`
  margin: 40px auto;
  `}
  .content-wrapper {
    width: 100%;
  }
`;
