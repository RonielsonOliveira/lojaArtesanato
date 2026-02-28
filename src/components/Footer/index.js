import { NavFooter } from "./styled";
import { Link } from "react-router-dom";



export default function Footer(){
    return(
        <NavFooter>
        <Link to="/">
          <a>Home</a>
         </Link>
         <Link to="/contato">
          <a>Contato</a>
         </Link>
     
          
        </NavFooter>
    )
}