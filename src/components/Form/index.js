import React from "react";
import PropTypes from 'prop-types'
import {FaPlus} from 'react-icons/fa';
import {FormB} from './styled.js'
export default function Form({handleChange, handleSubmit, novaTarefa}) {
  return (
    <FormB onSubmit={handleSubmit} action="#" className="form">

              <input
          type="text"
         

          placeholder="Nome"
        ></input>
        <input
          type="text"
         
          
          placeholder="Email"
        ></input>
            <input
          type="text"
         
          
          placeholder="Descreva o servico que deseja fazer"
        ></input>
      <button type="submit">
        Enviar
      </button>
    </FormB>
  );
}


Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,

}
