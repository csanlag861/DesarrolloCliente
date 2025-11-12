import stylesAboutUs from "./aboutus.module.css";

import Acordeon from "../../components/Acordeon/Acordeon";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

function AboutUs() {
  return (
    <main className={stylesAboutUs.main}>
      <div className={stylesAboutUs.h1}>
        <h1>Sobre Nosotros</h1>
      </div>
      <div className={stylesAboutUs.acordeon}>
        <Acordeon />
      </div>
    </main>
  );
}

export default AboutUs;
