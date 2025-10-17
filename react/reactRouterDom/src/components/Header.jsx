import styleHeader from "./header.module.css";

function Header (){
    return (
        <header className={`${styleHeader.header} ${styleHeader["background-header"]}`}>
            <span>Logo</span>
            <nav>
                <ul className={styleHeader["container-nav"]}>
                    <li>Login</li>
                    <li>Registro</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;