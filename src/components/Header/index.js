import { LogoGroup, Nav, SearchGroup, UserGroup } from "./styled";
import { Link } from "react-router-dom";
import logo from "../../Img/logo.png";
import { FaUser, FaHeart, FaShippingFast } from "react-icons/fa";
export default function Header() {
  return (
    <Nav>
      <LogoGroup>
        <a>Angela Artesanatos</a>
      </LogoGroup>
      <SearchGroup>
        <input type="text" placeholder="search"></input>
      </SearchGroup>
      <UserGroup>
        <a>Ola! User</a>
        <FaUser size={20} color="white" />
        <FaHeart size={20} color="white" />
        <FaShippingFast size={20} color="white" />
      </UserGroup>
    </Nav>
  );
}
