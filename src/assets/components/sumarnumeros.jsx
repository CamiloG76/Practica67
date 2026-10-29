
import { useState } from "react"

const Calculadora = () => {
    const [numero1, setNumero1] = useState('')
    const [numero2, setNumero2] = useState('')
    const [resultado, setResultado] = useState(null)
    const [resultado2, setResultado2] = useState(null)
    const [colorSumar, setColorSumar] = useState("blue")
    const [colorRestar, setColorRestar] = useState("red")

    const sumar = () => {setResultado(parseFloat(numero1) + parseFloat(numero2))}
    const resta = () => {setResultado2(parseFloat(numero1) - parseFloat(numero2))}
    const cambiarColor = () => {return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}
    return (
        <>
            <h1>Calculadora Aura</h1>
            <input
                type="number"
                placeholder="Ingrese un numero"
                value={numero1}
                onChange={(evento) => setNumero1(evento.target.value)}
            />
            <input
                type="number"
                placeholder="Ingrese un numero"
                value={numero2}
                onChange={(evento) => setNumero2(evento.target.value)}
            />
            <br />
            <br />
            <button
                onClick={() => {
                    sumar() 
                    setColorSumar(cambiarColor())}} style={{ backgroundColor: colorSumar }}>Sumar
            </button>
            <h2>Resultado: {resultado}</h2>
            <br />
            <br />
            <button
                onClick={() => {resta()
                setColorRestar(cambiarColor())}}style={{ backgroundColor: colorRestar }}>Restar
            </button>
            <h2>Resultado: {resultado2}</h2>
        </>
    )
}

export { Calculadora }

