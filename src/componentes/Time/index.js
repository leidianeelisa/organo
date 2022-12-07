import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
  const cssCorPrimaria = {borderColor: props.corPrimaria};
  const cssCorSecundaria = {backgroundColor : props.corSecundaria};
  return (
    // se o tamanho de colaboradores for maior que 0, ele renderiza tudo que está a partir do &&
    props.colaboradores.length > 0 && 
    <section className='time' style={cssCorSecundaria}>
      <h3 style={cssCorPrimaria}>{props.nome}</h3>
      <div className='colaboradores'>
        {props.colaboradores.map(colaborador =>  
          <Colaborador
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            corFundo={props.corPrimaria}>
          </Colaborador>)}
      </div>
    </section>
    //OU PODE SER FEITO EM TERNÀRIO:
    // props.colaboradores.length > 0 ? 
    // <section className='time' style={cssCorSecundaria}>
    //   <h3 style={cssCorPrimaria}>{props.nome}</h3>
    //   <div className='colaboradores'>
    //     {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}></Colaborador>)}
    //   </div>
    // </section>
    // : ''
  )
}

export default Time;