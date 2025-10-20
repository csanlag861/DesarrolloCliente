import stylesHeader from "./header.module.css";

import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const marqueeText = (
    <>
      <p>Envío gratis pedidos internacionales +200€</p>
      <img src="img/lovestarlogo.svg" alt="Logo de Lovestar" />
      <p>¡Únete al club!</p>
      <img src="img/lovestarlogo.svg" alt="Logo de Lovestar" />
      <p>Envío gratis pedidos nacionales +100€</p>
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
      <div className={stylesHeader.centro}>
        <div className={stylesHeader.info}>
          <p>Sobre nosotros</p>
          <p>Contacto</p>
        </div>
        <div className={stylesHeader.logo}>
          <Link to="/Home">
            <img src="img/alt-logo.svg" alt="Logo secundario de Lovestar" />
          </Link>
        </div>
        <div className={stylesHeader.opciones}>
          <p>Idioma</p>
          <div className={stylesHeader.circle}></div>
          <div className={stylesHeader.circle}></div>
          <div className={stylesHeader.circle}></div>
        </div>
      </div>
      <nav className={stylesHeader.nav}>
        <NavLink to="/Tienda" className={({ isActive }) => (isActive ? stylesHeader.active : undefined)}>Tienda</NavLink>
        <p>Galería</p>
        <p>Editorial</p>
        <p>Membership</p>
      </nav>
    </header>
  );
};

export default Header;
