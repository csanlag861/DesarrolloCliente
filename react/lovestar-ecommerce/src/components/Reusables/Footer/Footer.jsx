import stylesFooter from "./footer.module.css";

import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer>
      <div className={stylesFooter["footer__principal"]}>
        <div className={stylesFooter.form}>
          <h3>OBTÉN UN 10% DE DESCUENTO</h3>
          <input type="email" name="email" placeholder="Email" />
          <input type="submit" value="OBTENER DESCUENTO" />
          <div className={stylesFooter["form__policy"]}>
            <input type="checkbox" name="terminos" />
            <p>
              He leído y acepto los Términos y Condiciones de Lovestar y
              entiendo la información sobre el uso de mis datos personales tal
              como se explica en la Política de Privacidad.
            </p>
          </div>
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
        <NavLink to="/Tienda" className={({ isActive }) => (isActive ? stylesFooter.active : undefined)}>Galería</NavLink>
        <NavLink to="/Tienda" className={({ isActive }) => (isActive ? stylesFooter.active : undefined)}>Editorial</NavLink>
        <NavLink to="/Membership" className={({ isActive }) => (isActive ? stylesFooter.active : undefined)}>Membership</NavLink>
        <NavLink to="/Tienda" className={({ isActive }) => (isActive ? stylesFooter.active : undefined)}>Sobre Nosotros</NavLink>
        <NavLink to="/Tienda" className={({ isActive }) => (isActive ? stylesFooter.active : undefined)}>Contacto</NavLink>
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
