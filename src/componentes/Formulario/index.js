import './Formulario.css';

import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log('form submetido! => ', nome, cargo, imagem, time);
    props.aoCadastrarColaborador({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  }
  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto 
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome do colaborador"
          valor={nome}
          aoAlterar={valor => setNome(valor)}
        ></CampoTexto>
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite o cargo do colaborador"
          valor={cargo}
          aoAlterar={valor => setCargo(valor)}
        ></CampoTexto>
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder="Digite o endereço da imagem do colaborador"
          valor={imagem}
          aoAlterar={valor => setImagem(valor)}
        ></CampoTexto>
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={props.nomeTimes}
          valor={time}
          aoAlterar={valor => setTime(valor)}
        ></ListaSuspensa>
        <Botao>Criar Card</Botao>
      </form>
    </section>
  )
}

export default Formulario;