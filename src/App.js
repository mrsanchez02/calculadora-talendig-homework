import './App.css'
import Boton from './components/Boton'
import BotonClear from './components/BotonClear'
import Pantalla from './components/Pantalla'
import TalendigLogo from './images/logo_talendig.png'
import { useState } from 'react'
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState('')

  const agregarInput = val => {
    if(val==='.' && input.includes('.')) return // No need more than one period '.'
    if(val==='0' && input.length===0) return  // No aditional 0
    setInput(prev=>prev+val)
  }

  const calcularRestulado = () => {
    if(input) {
      setInput(evaluate(input))
    } else {
      alert("Favor ingerse valores para realizar los calculos.")
    }
  }

  return (
    <div className='App'>
      <div className='talendig-logo-contenedor'>
        <img 
          src={TalendigLogo}
          alt='Logo talendig' 
          className='talendig-logo'
        />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularRestulado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
