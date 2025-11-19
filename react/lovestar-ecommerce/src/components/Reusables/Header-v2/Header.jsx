import stylesHeader from "./header.module.css";
import { Icon } from "@iconify/react";

import { NavLink, Link } from "react-router-dom";

import { signOutUser } from "../../../utils/firebase";

import { UserContext } from "../../../context/ContextUser";
import { useContext, useState, useRef, useEffect } from "react";

import { toast } from "react-toastify";

const Header = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const stickyRef = useRef(null);
  const sentinelRef = useRef(null);
  const [stickyHeight, setStickyHeight] = useState(0); // Placeholder para que no genere salto cuando cambie el Header.
  const [isSticky, setIsSticky] = useState(false);
  const [navOpen, setNavOpen] = useState(false);


  const toggleNav = () => setNavOpen((prev) => !prev);

  const handleLogout = async () => {
    try {
      const res = await signOutUser();
      setCurrentUser(null);
      toast.success("Sesión cerrada correctamente.");
    } catch (error) {
      toast.error("Error al cerrar sesión.");
      console.error("Error en el Logout", error);
    }
  };

  const marqueeText = (
    <>
      <p>Envío gratis pedidos internacionales +200€</p>
      <img src="img/lovestarlogo.svg" alt="Logo de Lovestar" />
      <p>¡Únete al club!</p>
      <img src="img/lovestarlogo.svg" alt="Logo de Lovestar" />
    </>
  );

  useEffect(() => {
    if (stickyRef.current) {
      setStickyHeight(stickyRef.current.offsetHeight);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "15px" }
    );

    observer.observe(sentinelRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <header>
      <div className={stylesHeader.publicidad}>
        <div ref={sentinelRef} className={stylesHeader.sentinel}></div>
        <div className={stylesHeader.marquee}>
          {marqueeText}
          {marqueeText}
          {marqueeText}
          {marqueeText}
          {marqueeText}
        </div>
      </div>
      {isSticky && <div style={{ height: `${stickyHeight}px` }} />}
      <div ref={stickyRef} className={isSticky ? stylesHeader.sticky : ""}>
        <div className={`${stylesHeader.centro}`}>
          <div className={stylesHeader.info}>
            <Link to="/Login">
              <Icon icon="ic:baseline-account-circle" />
            </Link>
            {currentUser && (
              <Icon icon="material-symbols:logout" onClick={handleLogout} />
            )}
          </div>
          <div className={stylesHeader.logo}>
            <Link to="/Home">
              <img src="img/alt-logo.svg" alt="Logo secundario de Lovestar" />
            </Link>
          </div>
          <div className={stylesHeader["social-links"]}>
            {currentUser?.rol == "admin" && (
              <NavLink to="/lovestar">
                <Icon icon="eos-icons:admin" />
              </NavLink>
            )}
            <Icon icon="ion:cart" />
            <button className={stylesHeader.btnMobile} onClick={toggleNav}>
              {navOpen ? (<Icon
                className={stylesHeader.iconMobile}
                icon="material-symbols:close"
                width="24"
                height="24"
              />) : (<Icon className={stylesHeader.iconMobile} icon="material-symbols:menu" width="24" height="24" />)}
            </button>
          </div>
        </div>
        <nav className={`${stylesHeader.nav} ${navOpen && stylesHeader.navOpen}`}>
          {navOpen && (
            <Link className={stylesHeader.logo} to="/Home">
              <img src="img/alt-logo.svg" alt="Logo secundario de Lovestar" />
            </Link>
          )}
          <NavLink
            to="/Tienda"
            className={({ isActive }) =>
              isActive ? stylesHeader.active : undefined
            }
          >
            Tienda
          </NavLink>
          <NavLink
            to="/Galeria"
            className={({ isActive }) =>
              isActive ? stylesHeader.active : undefined
            }
          >
            Galería
          </NavLink>
          <NavLink
            to="/Tienda"
            className={({ isActive }) =>
              isActive ? stylesHeader.active : undefined
            }
          >
            Editorial
          </NavLink>
          <NavLink
            to="/Membership"
            className={({ isActive }) =>
              isActive ? stylesHeader.active : undefined
            }
          >
            Membership
          </NavLink>
          <NavLink
            to="/SobreNosotros"
            className={({ isActive }) =>
              isActive ? stylesHeader.active : undefined
            }
          >
            Sobre Nosotros
          </NavLink>
          <NavLink
            to="/Contacto"
            className={({ isActive }) =>
              isActive ? stylesHeader.active : undefined
            }
          >
            Contacto
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
