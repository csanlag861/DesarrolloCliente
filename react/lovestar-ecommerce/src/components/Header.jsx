const Header = () => {
return (
    <header className="header">
        <div className="publicidad">
            <p>Envío gratis pedidos internacionales +200€</p>
            <img src="img/lovestarlogo.svg" alt="Logo de Lovestar" />
            <p>¡Únete al club!</p>
            <img src="img/lovestarlogo.svg" alt="Logo de Lovestar" />
            <p>Envío gratis pedidos internacionales +200€</p>
        </div>
        <div className="centro">
            <div className="info">
                <p>Sobre nosotros</p>
                <p>Contacto</p>
            </div>
            <div className="logo">
                <img src="img/alt-logo.svg" alt="Logo secundario de Lovestar" />
            </div>
            <div className="opciones">
                <p>Idioma</p>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
        <nav className="nav">
                <p>Tienda</p>
                <p>Galería</p>
                <p>Editorial</p>
                <p>Membership</p>
        </nav>
    </header>
)
}

export default Header;