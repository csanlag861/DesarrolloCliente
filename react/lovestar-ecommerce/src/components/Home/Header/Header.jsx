import stylesHeader from "./header.module.css";

const Header = () => {
return (
    <header>
        <div className={stylesHeader.publicidad}>
            <p>Envío gratis pedidos internacionales +200€</p>
            <img src="img/lovestarlogo.svg" alt="Logo de Lovestar" />
            <p>¡Únete al club!</p>
            <img src="img/lovestarlogo.svg" alt="Logo de Lovestar" />
            <p>Envío gratis pedidos internacionales +200€</p>
        </div>
        <div className={stylesHeader.centro}>
            <div className={stylesHeader.info}>
                <p>Sobre nosotros</p>
                <p>Contacto</p>
            </div>
            <div className={stylesHeader.logo}>
                <img src="img/alt-logo.svg" alt="Logo secundario de Lovestar" />
            </div>
            <div className={stylesHeader.opciones}>
                <p>Idioma</p>
                <div className={stylesHeader.circle}></div>
                <div className={stylesHeader.circle}></div>
                <div className={stylesHeader.circle}></div>
            </div>
        </div>
        <nav className={stylesHeader.nav}>
                <p>Tienda</p>
                <p>Galería</p>
                <p>Editorial</p>
                <p>Membership</p>
        </nav>
    </header>
)
}

export default Header;