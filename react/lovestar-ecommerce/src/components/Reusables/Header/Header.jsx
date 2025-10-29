import stylesHeader from "./header.module.css";
import { Icon } from "@iconify/react";

import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const marqueeText = (
    <>
      <p>Envío gratis pedidos internacionales +200€</p>
      <img src="img/lovestarlogo.svg" alt="Logo de Lovestar" />
      <p>¡Únete al club!</p>
      <img src="img/lovestarlogo.svg" alt="Logo de Lovestar" />
    </>
  );

  return (
    <header>
      <div className={stylesHeader.publicidad}>
        <div className={stylesHeader.marquee}>
          {marqueeText}
          {marqueeText}
          {marqueeText}
          {marqueeText}
          {marqueeText}
        </div>
      </div>
      <div className={`${stylesHeader.centro}`}>
        <div className={stylesHeader.info}>
          <NavLink to="/Tienda" className={({ isActive }) => (isActive ? stylesHeader.active : undefined)}>Sobre Nosotros</NavLink>
          <NavLink to="/Tienda" className={({ isActive }) => (isActive ? stylesHeader.active : undefined)}>Contacto</NavLink>
        </div>
        <div className={stylesHeader.logo}>
          <Link to="/Home">
            <img src="img/alt-logo.svg" alt="Logo secundario de Lovestar" />
          </Link>
        </div>
        <div className={stylesHeader["social-links"]}>
          <Link to="/Login">
            <Icon icon="ic:baseline-account-circle" />
          </Link>
          <Icon icon="ion:cart" />
        </div>
      </div>
      <nav className={stylesHeader.nav}>
        <NavLink to="/Tienda" className={({ isActive }) => (isActive ? stylesHeader.active : undefined)}>Tienda</NavLink>
        <NavLink to="/Tienda" className={({ isActive }) => (isActive ? stylesHeader.active : undefined)}>Galería</NavLink>
        <NavLink to="/Tienda" className={({ isActive }) => (isActive ? stylesHeader.active : undefined)}>Editorial</NavLink>
        <NavLink to="/Tienda" className={({ isActive }) => (isActive ? stylesHeader.active : undefined)}>Membership</NavLink>
      </nav>
    </header>
  );
};

export default Header;
