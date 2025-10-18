import { useEffect } from "react";
import { useState } from "react";
import stylesContador from "./contador.module.css";

const Contador = () => {
  const fechaLanzamientoDrop = new Date("2025-12-24T17:00:00").getTime();
  const [tiempoRestante, setTiempoRestante] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const intervalo = setInterval(() => {
      const fechaActual = new Date().getTime();
      const diferenciaFechas = fechaLanzamientoDrop - fechaActual;

      if (diferenciaFechas > 0) {
        const dias = Math.floor(diferenciaFechas / (1000 * 60 * 60 * 24));
        const horas = Math.floor(
          (diferenciaFechas % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutos = Math.floor(
          (diferenciaFechas % (1000 * 60 * 60)) / (1000 * 60)
        );
        const segundos = Math.floor((diferenciaFechas % (1000 * 60)) / 1000);

        setTiempoRestante({
          dias: dias,
          horas: horas,
          minutos: minutos,
          segundos: segundos,
        });
      }
    }, 1000);

    return () => clearInterval(intervalo);
  }, [fechaLanzamientoDrop]);
  return (
    <div className={stylesContador.contador}>
      <p>
        {tiempoRestante.dias}D {tiempoRestante.horas}H {tiempoRestante.minutos}M{" "}
        {tiempoRestante.segundos}S
      </p>
    </div>
  );
};

export default Contador;
