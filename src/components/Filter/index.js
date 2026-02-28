import { FilterStyle, NavFooter, Checkbox } from "./styled";
import { Link } from "react-router-dom";



export default function Filter(){
    return(<FilterStyle>
      <Checkbox>
      <label>
        Reforma
        <input type="checkbox" name="servico" value="Reforma"></input>
      </label>
      <label>
        Pintura
        <input  type="checkbox" name="servico" value="Pintura"></input>
      </label>
      <label>
        Marcenaria
        <input type="checkbox" name="servico" value="Instalação elétrica"></input>
      </label>
      <label>
        Hidraulica
        <input  type="checkbox" name="servico" value="Instalação hidraulica"></input>
      </label>
 
    </Checkbox>
       </FilterStyle>
    )
}