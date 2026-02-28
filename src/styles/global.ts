"use client";
import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle<{ removeBg?: boolean }>`

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Poppins Light'), local('Poppins-Light'),
      url('/fonts/poppins-v21-latin-300italic.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Poppins Regular'), local('Poppins-Regular'),
      url('/fonts/poppins-v21-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
      url('/fonts/poppins-v21-latin-600.woff2') format('woff2');
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  ${({ theme, removeBg }) => css`
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      ${!removeBg &&
      css`
        background-color: ${theme.colors.mainBg};
      `}
    }
  `}

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
  }

  .pomodoro {
    background: #fff;
    margin: 40px auto;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }

  .pomodoro h2 {
    text-align: center;
    margin-bottom: 24px;
    font-size: clamp(2rem, 3vw, 2.8rem);
  }


  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 28px;
    width: 100%;
  }

  .cardContainer {
    background: #000;
    border-radius: 8px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .cardContainer:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
  }

  .cardContainer img {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 6px;
  }

  .cardContainer h3 {
    color: #fff;
    text-align: center;
    font-size: 1.8rem;
  }

  .cardContainer a {
    width: 100%;
    padding: 10px;
    background: #41e1ba;
    color: #000;
    border-radius: 6px;
    font-weight: 600;
    text-decoration: none;
    text-align: center;

    transition: filter 0.2s ease;
  }

  .cardContainer a:hover {
    filter: brightness(0.9);
  }


  @media (max-width: 640px) {
    .pomodoro {
      margin: 24px 0;
      padding: 16px;
    }
  }
`;

export default GlobalStyles;
