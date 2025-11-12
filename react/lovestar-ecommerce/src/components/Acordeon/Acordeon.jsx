import stylesAcordeon from "./acordeon.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

const Acordeon = () => {
  return (
    <section className={stylesAcordeon.section}>
      <Accordion className={stylesAcordeon.acordeon}>
        <AccordionSummary
          expandIcon={<p className={stylesAcordeon.expand}>+</p>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h2>¿Quiénes Somos?</h2>
        </AccordionSummary>
        <AccordionDetails className={stylesAcordeon.details}>
          Lovestar nace de la pasión por el diseño, la música y la cultura
          urbana. No somos solo una marca de ropa: somos una comunidad que
          expresa lo que siente a través del estilo. Cada prenda está pensada
          para transmitir actitud, autenticidad y confianza. Creemos en la
          individualidad, en vestir lo que te representa y en no seguir
          tendencias, sino crearlas.
        </AccordionDetails>
      </Accordion>
      <Accordion className={stylesAcordeon.acordeon}>
        <AccordionSummary
          expandIcon={<p className={stylesAcordeon.expand}>+</p>}
          aria-controls="panel2-content"
          id="panel2-header"
          className={stylesAcordeon.summary}
        >
          <h2>¿Qué significa Lovestar?</h2>
        </AccordionSummary>
        <AccordionDetails>
          Lovestar representa el equilibrio entre el amor y la ambición. “Love”
          porque todo lo que hacemos parte de la pasión, del cariño por lo que
          somos y creamos. “Star” porque cada persona que lleva nuestra ropa
          tiene su propio brillo. Es una filosofía: amar lo que haces, brillar
          siendo tú.
        </AccordionDetails>
      </Accordion>
      <Accordion className={stylesAcordeon.acordeon}>
        <AccordionSummary
          expandIcon={<p className={stylesAcordeon.expand}>+</p>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <h2>¿Dónde nos puedes encontrar?</h2>
        </AccordionSummary>
        <AccordionDetails>
          Nuestro universo está en línea: 🌐 [www.lovestar.com] — el único lugar
          donde encontrarás nuestras colecciones oficiales. 📱 Síguenos en
          Instagram y TikTok para ver drops exclusivos, sesiones detrás de
          cámara y próximos lanzamientos. También participamos en eventos,
          ferias y pop-ups seleccionados que anunciamos siempre en nuestras
          redes.
        </AccordionDetails>
      </Accordion>
      <Accordion className={stylesAcordeon.acordeon}>
        <AccordionSummary
          expandIcon={<p className={stylesAcordeon.expand}>+</p>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <h2>¿Qué hacemos diferente?</h2>
        </AccordionSummary>
        <AccordionDetails>
          Nos importa tanto el diseño como la historia detrás de cada pieza.
          Creamos colecciones limitadas con materiales seleccionados y procesos
          responsables. Cada lanzamiento (drop) tiene una identidad única y no
          se repite. No creemos en la moda rápida, creemos en prendas que duran
          y cuentan algo.
        </AccordionDetails>
      </Accordion>
      <Accordion className={stylesAcordeon.acordeon}>
        <AccordionSummary
          expandIcon={<p className={stylesAcordeon.expand}>+</p>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <h2>¿Cómo trabajamos?</h2>
        </AccordionSummary>
        <AccordionDetails>
          Trabajamos con talleres locales y proveedores de confianza, cuidando
          cada detalle desde el boceto hasta el envío. Diseñamos en Málaga,
          producimos en series reducidas y revisamos cada prenda antes de
          entregarla. Nuestro objetivo es que cada cliente sienta que lleva algo
          especial, hecho con intención.
        </AccordionDetails>
      </Accordion>
      <Accordion className={stylesAcordeon.acordeon}>
        <AccordionSummary
          expandIcon={<p className={stylesAcordeon.expand}>+</p>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <h2>¿Qué viene después?</h2>
        </AccordionSummary>
        <AccordionDetails>
          Lovestar está en constante evolución. Nuevas colaboraciones,
          colecciones cápsula y experiencias físicas llegarán muy pronto.
          Queremos seguir creciendo junto a nuestra comunidad, siempre fieles a
          lo que somos. Esto es solo el principio.
        </AccordionDetails>
      </Accordion>
      <Accordion className={stylesAcordeon.acordeon}>
        <AccordionSummary
          expandIcon={<p className={stylesAcordeon.expand}>+</p>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <h2>Hazte miembro.</h2>
        </AccordionSummary>
        <AccordionDetails>
          Ser miembro es más que ventajas: es formar parte de nuestra historia.
          Tendrás acceso a colecciones secretas, contenido exclusivo y la
          oportunidad de vivir cada drop como un protagonista. Move in silence,
          create your story.
        </AccordionDetails>
      </Accordion>
    </section>
  );
};

export default Acordeon;
