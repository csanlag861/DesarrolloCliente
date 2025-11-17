import stylesFooter from "./footer.module.css";

import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleMiembro = () => {navigate("/Membership")}


  return (
    <footer>
      <div className={stylesFooter["footer__principal"]}>
        <div className={stylesFooter.form}>
          <h3>¡Hazte Miembro!</h3>
          <div className={stylesFooter.member}>
            <p>Sé parte del movimiento. Accede antes que nadie a nuestras novedades, descuentos y sorpresas solo para miembros.</p>
          </div>
          <button type="button" onClick={handleMiembro}>HAZTE MIEMBRO</button>
        </div>
        <div className={stylesFooter.logo}>
          <Link to="/Home">
            <img
              src="img/alt-logo-white.svg"
              alt="Logo secundario de Lovestar"
            />
          </Link>
        </div>
        <nav className={stylesFooter.secciones}>
          <NavLink to="/Tienda" className={({ isActive }) => (isActive ? stylesFooter.active : undefined)}>Tienda</NavLink>
          <NavLink to="/Galeria" className={({ isActive }) => (isActive ? stylesFooter.active : undefined)}>Galería</NavLink>
          <NavLink to="/Tienda" className={({ isActive }) => (isActive ? stylesFooter.active : undefined)}>Editorial</NavLink>
          <NavLink to="/Membership" className={({ isActive }) => (isActive ? stylesFooter.active : undefined)}>Membership</NavLink>
          <NavLink to="/SobreNosotros" className={({ isActive }) => (isActive ? stylesFooter.active : undefined)}>Sobre Nosotros</NavLink>
          <NavLink to="/Contacto" className={({ isActive }) => (isActive ? stylesFooter.active : undefined)}>Contacto</NavLink>
        </nav>
      </div>
      <div className={stylesFooter["footer__icons"]}>
        <Icon icon="mdi:instagram" />
        <Icon icon="mdi:twitter" />
        <Icon icon="ic:baseline-tiktok" />
      </div>
    </footer>
  );
};

export default Footer;
