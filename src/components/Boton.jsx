import '../stylesheets/Boton.css'

const Boton = (props) => {

  const esOperador = value => {
    return isNaN(value) && (value !== '.') && (value !== '=')
  }

  return (
    <div
      className={`boton-contenedor ${esOperador(props.children)? 'operador': ''}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </div>
  )
}

export default Boton
