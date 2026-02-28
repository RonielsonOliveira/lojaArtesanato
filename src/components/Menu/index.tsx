import { useState } from "react";
import * as S from "./styles.tsx";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../Img/logo.png";
export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <S.Wrapper>
        <S.MenuGroup>
          <S.NavGroup>
            <S.MenuLink href="/">Bonecos</S.MenuLink>
            <S.MenuLink href="/">Tapetes</S.MenuLink>
            <S.MenuLink href="/">Bolsas</S.MenuLink>
            <S.MenuLink href="/">Acessorios</S.MenuLink>
          </S.NavGroup>

          <S.SocialGroup>
            <S.LogoLink to="/" className="Link">
              <img src={logo} alt="Belas Artes Construcoes" />
            </S.LogoLink>
          </S.SocialGroup>
        </S.MenuGroup>
        <S.MobileWrapper>
          <S.LogoLink to="/" className="Link">
            <S.LogoMobileWrapper>
              <img src={logo} alt="Angela Artesanatos" />
            </S.LogoMobileWrapper>
          </S.LogoLink>
          <S.MobileIcon onClick={() => setIsOpen(true)}>
            <FaBars size={28} />
          </S.MobileIcon>
        </S.MobileWrapper>
      </S.Wrapper>

      <S.MenuFull isOpen={isOpen}>
        <S.CloseIcon onClick={() => setIsOpen(false)}>
          <FaTimes size={28} />
        </S.CloseIcon>

        <S.MenuNav>
          <S.NavGroup>
            <S.MenuLink href="/" onClick={() => setIsOpen(false)}>
              Bonecos
            </S.MenuLink>
            <S.MenuLink href="/orcamento" onClick={() => setIsOpen(false)}>
              Tapetes
            </S.MenuLink>
            <S.MenuLink href="/servicos" onClick={() => setIsOpen(false)}>
              Bolsas
            </S.MenuLink>
            <S.MenuLink href="/contato" onClick={() => setIsOpen(false)}>
              Acessorios
            </S.MenuLink>
          </S.NavGroup>

          <S.SocialGroup>
            <S.LogoLink to="/" className="Link">
              <img src={logo} alt="Belas Artes Construcoes" />
            </S.LogoLink>
          </S.SocialGroup>
        </S.MenuNav>
      </S.MenuFull>
    </>
  );
}

export default Menu;
