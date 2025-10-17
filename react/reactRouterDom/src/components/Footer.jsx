import clasesFooter from "./footer.module.css";

function Footer() {
    return (
        <footer className={`${clasesFooter.footer} ${clasesFooter["color-fondo"]}`}>
            <span>Logo</span>
            <span>Cosas</span>
            <span>Redes Sociales</span>
        </footer>
    )
}

export default Footer;