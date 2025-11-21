import stylesAcordeon from "./acordeon.module.css";
import { useState } from "react";

const faqs = [
  {
    title: "¿Quiénes somos?",
    text: "Lovestar nace de la pasión por el diseño, la música y la cultura urbana. No somos solo una marca de ropa: somos una comunidad que expresa lo que siente a través del estilo. Cada prenda está pensada para transmitir actitud, autenticidad y confianza. Creemos en la individualidad, en vestir lo que te representa y en no seguir tendencias, sino crearlas.",
  },
  {
    title: "¿Qué significa Lovestar",
    text: "Lovestar representa el equilibrio entre el amor y la ambición. Love porque todo lo que hacemos parte de la pasión, del cariño por lo que somos y creamos. Star porque cada persona que lleva nuestra ropa tiene su propio brillo. Es una filosofía: amar lo que haces, brillar siendo tú.",
  },
  {
    title: "¿Dónde nos puedes encontrar?",
    text: "Nuestro universo está en línea: 🌐 lovestar-two.vercel.app, el único lugar donde encontrarás nuestras colecciones oficiales. 📱 Síguenos en Instagram y TikTok para ver drops exclusivos, sesiones detrás de cámara y próximos lanzamientos. También participamos en eventos, ferias y pop-ups seleccionados que anunciamos siempre en nuestras redes.",
  },
  {
    title: "¿Qué hacemos diferente?",
    text: "Nos importa tanto el diseño como la historia detrás de cada pieza. Creamos colecciones limitadas con materiales seleccionados y procesos responsables. Cada lanzamiento (drop) tiene una identidad única y no se repite. No creemos en la moda rápida, creemos en prendas que duran y cuentan algo.",
  },
  {
    title: "¿Qué viene después?",
    text: "Lovestar está en constante evolución. Nuevas colaboraciones, colecciones cápsula y experiencias físicas llegarán muy pronto. Queremos seguir creciendo junto a nuestra comunidad, siempre fieles a lo que somos. Esto es solo el principio.",
  },
  {
    title: "Hazte miembro.",
    text: "Ser miembro es más que ventajas: es formar parte de nuestra historia. Tendrás acceso a colecciones secretas, contenido exclusivo y la oportunidad de vivir cada drop como un protagonista. Move in silence, create your story.",
  },
];

function Accordion({ data }) {
  const [currentNumber, setCurrentOpen] = useState(null);
  return (
    <div className={stylesAcordeon.accordion}>
      {data.map((item, pos) => (
        <AccordionItem
          number={pos}
          title={item.title}
          key={item.title}
          currentNumber={currentNumber}
          onCurrentOpen={setCurrentOpen}
        >
          {item.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({
  number,
  title,
  currentNumber,
  onCurrentOpen,
  children,
}) {
  const isOpen = currentNumber === number;
  
  function handleToggle() {
    onCurrentOpen(isOpen ? null : number);
  }
  
  return (
    <div 
      className={`${stylesAcordeon.item} ${isOpen ? stylesAcordeon.open : ""}`} 
      onClick={handleToggle}
    >
      <p className={stylesAcordeon.number}>{number < 9 ? `0${number + 1}` : number + 1}</p>
      <p className={stylesAcordeon.title}>{title}</p>
      <p className={stylesAcordeon.icon}>{isOpen ? "-" : "+"}</p>
      {isOpen && <div className={stylesAcordeon["content-box"]}>{children}</div>}
    </div>
  );
}

const Acordeon = () => {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
};

export default Acordeon;