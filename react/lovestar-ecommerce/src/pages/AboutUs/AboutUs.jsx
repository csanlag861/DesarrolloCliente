import stylesAboutUs from "./aboutus.module.css";

import Acordeon from "../../components/Acordeon/Acordeon";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

function AboutUs() {
  return (
    <section className={stylesAboutUs.main}>
        <h1>Sobre Nosotros</h1>
      <div className={stylesAboutUs.acordeon}>
        <Acordeon />
      </div>
    </section>
  );
}

export default AboutUs;
