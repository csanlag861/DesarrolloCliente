import { useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(0);

    const handleIncrementar = () => {
        setContador(contador+1);
    }

    const handleDecrementar = () => {
        setContador(contador-1);
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