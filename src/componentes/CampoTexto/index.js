import { useState } from 'react';
import './CampoTexto.css';

const CampoTexto = (props) => {
  const label = props.label;
  const placeholder = props.placeholder;
  const placeholderModificada = `${props.placeholder}...`;
  
  const aoDigitar = (evento) => {
    props.aoAlterar(evento.target.value);
  }
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={placeholderModificada}></input>
    </div>
  )
}

export default CampoTexto;