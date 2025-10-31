import { useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(0);

    const handleIncrementar = () => {
        setContador((contadorActual) => contadorActual +1); // Sirve para incrementar el varlo
        // setContador(contador + 1); --> Si yo pongo esto varias veces no funciona ya que estoy machacando el valor.

        console.log("Contador no actualizado", contador); // El contador no se actualiza ya que sólo lo imprime cuando se ejecuta el bloque, por lo que irá atrasado.
    }
    console.log("Contador ?¿?¿?", contador);
    
    const handleDecrementar = () => {
        setContador((contadorActual) => contadorActual -1);
        setContador((contadorActual) => contadorActual -1);
    }

    const handleReset = () => {
        setContador(0);
    }
    return (
        <div>
            <h2>Contador super cutre</h2>
            <div>{contador}</div>
            <button onClick={handleIncrementar}>++</button>
            <button onClick={handleDecrementar}>--</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default Contador;