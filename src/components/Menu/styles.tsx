import styled, { css } from "styled-components";
import media from "styled-media-query";
import { Link } from "react-router-dom";
import theme from "../../styles/theme.ts";
export const Wrapper = styled.menu`
  ${({ theme }) => css`
    background: ${theme.colors.colorPrimary};
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 180px;

    ${media.lessThan("medium")`
      height: 80px;
      padding: 0 ${theme.spacings.xxsmall};
    `}
  `}
`;
export const MobileWrapper = styled.div`
  display: none;

  ${media.lessThan("medium")`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  `}

  img {
    width: 74px;
    display: block;
  }
`;
export const LogoMobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 100%;
`;
export const MobileIcon = styled.div`
  display: flex;
  align-items: center; /* centraliza verticalmente o ícone */
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export const LogoWrapper = styled.div`
  ${media.lessThan("medium")`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 2.2rem;
    height: 2.2rem;
    display: flex;
    flex-grow: 1;
    align-items: center;
    cursor: pointer;
    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;
export const CloseIcon = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: ${theme.spacings.medium};
    right: ${theme.spacings.medium};
    color: ${theme.colors.white};
    cursor: pointer;
  `}
`;
export const MenuGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  ${media.lessThan("medium")`
  display: none;
  `}
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const SocialGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: white;
    font-size: 2.2rem;
  }

  img {
    width: 120px;
    height: auto;
    display: block;
  }
`;
export const NavGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacings.xxsmall};
`;
export const MenuLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    position: relative;
    cursor: pointer;
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;
    &:hover {
      &::after {
        content: "";
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.colorAccent};
        animation: hoverAnimation 0.2s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`;
export const IconLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    cursor: pointer;
    align-self: center;
    font-size: ${theme.font.sizes.medium};
    margin: 1.4rem 10px auto;
    text-decoration: none;
    text-align: center;
    align-items: center;
    &:hover {
      &::after {
        content: "";
        position: absolute;
        display: block;
        height: 0.3rem;
        animation: hoverAnimation 0.4s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`;
export type MenuFullProps = {
  isOpen: boolean;
};
export const MenuNav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.xsmall};
    width: 100%;
  `}
`;

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100svh;
    background: ${theme.colors.colorAccent};
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? "all" : "none"};
    transition: opacity 0.3s ease;

    ${MenuNav} {
      gap: ${theme.spacings.xsmall};
    }

    ${NavGroup} {
      flex-direction: column;
      gap: ${theme.spacings.xsmall};
    }

    ${SocialGroup} {
      margin-top: ${theme.spacings.xsmall};
    }

    ${MenuLink} {
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`;
