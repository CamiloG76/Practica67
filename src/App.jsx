import { useState } from 'react'
import './App.css'
import { Calculadora } from './assets/components/sumarnumeros'

function App() {
  // codigo js
  const [contador, setContador] = useState(0)
  function aumentarContador(){
    setContador(contador + 1)
  }
  function disminuirContador(){
    setContador(contador - 1)
  }
  return (
    <>
      {/* etiquetas html */}
      <h1>Mi aplicacion de aritmetica</h1>
      <button onClick={aumentarContador} disabled={contador >= 10}>Aumentar contador</button>
      <button onClick={disminuirContador} disabled={contador <= 0}>Disminuir contador</button>
      <h4>{contador}</h4>
      <hr />
      <Calculadora/>
    </>
  )
}

export default App





