import stylesFooter from "./footer.module.css";

import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

import { useContext } from "react";
import { UserContext } from "../../../context/ContextUser";
import { toast } from "react-toastify";

import { aplicarDescuento } from "../../../utils/firebase";

const FooterMember = () => {
  const { currentUser } = useContext(UserContext);

  const handleDescuento = async (evento) => {

    evento.preventDefault();

    const emailForm = evento.target.email.value;
    console.log(emailForm);


    if (emailForm !== currentUser.email) {
      toast.error("El email introducido no es válido.")
      return;
    }

    try {
      aplicarDescuento(currentUser.uid);
      toast.success(`Has obtenido el descuento de miembro, ${currentUser?.username || currentUser?.displayName}`)
    } catch (error) {
      toast.error("Error al aplicar descuento", error)
    }

  }
  return (
    <footer>
      <div className={stylesFooter["footer__principal"]}>
        {currentUser.descuento === true ? (<form className={stylesFooter.form} onSubmit={handleDescuento}>
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
        </form>) : (<nav className={stylesFooter.secciones}>
          <NavLink to="/Tienda" className={({ isActive }) => (isActive ? stylesFooter.active : undefined)}>Tienda</NavLink>
          <NavLink to="/Galeria" className={({ isActive }) => (isActive ? stylesFooter.active : undefined)}>Galería</NavLink>
          <NavLink to="/Editorial" className={({ isActive }) => (isActive ? stylesFooter.active : undefined)}>Editorial</NavLink>
        </nav>)}

        <div className={stylesFooter.logo}>
          <Link to="/Home">
            <img
              src="/img/alt-logo-white.svg"
              alt="Logo secundario de Lovestar"
            />
          </Link>
        </div>
        {currentUser.descuento === true ? (<nav className={stylesFooter.secciones}>
          <NavLink to="/Tienda" className={({ isActive }) => (isActive ? stylesFooter.active : undefined)}>Tienda</NavLink>
          <NavLink to="/Galeria" className={({ isActive }) => (isActive ? stylesFooter.active : undefined)}>Galería</NavLink>
          <NavLink to="/Editorial" className={({ isActive }) => (isActive ? stylesFooter.active : undefined)}>Editorial</NavLink>
          <NavLink to="/Membership" className={({ isActive }) => (isActive ? stylesFooter.active : undefined)}>Membership</NavLink>
          <NavLink to="/SobreNosotros" className={({ isActive }) => (isActive ? stylesFooter.active : undefined)}>Sobre Nosotros</NavLink>
          <NavLink to="/Contacto" className={({ isActive }) => (isActive ? stylesFooter.active : undefined)}>Contacto</NavLink>
        </nav>) : (<nav className={stylesFooter.secciones}>
          <NavLink to="/Membership" className={({ isActive }) => (isActive ? stylesFooter.active : undefined)}>Membership</NavLink>
          <NavLink to="/SobreNosotros" className={({ isActive }) => (isActive ? stylesFooter.active : undefined)}>Sobre Nosotros</NavLink>
          <NavLink to="/Contacto" className={({ isActive }) => (isActive ? stylesFooter.active : undefined)}>Contacto</NavLink>
        </nav>)}

      </div>
      <div className={stylesFooter["footer__icons"]}>
        <Icon icon="mdi:instagram" />
        <Icon icon="mdi:twitter" />
        <Icon icon="ic:baseline-tiktok" />
      </div>
    </footer>
  );
};

export default FooterMember;
