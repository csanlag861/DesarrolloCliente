import stylesHero from "./hero.module.css";

const Hero = () => {

    return (
        <div className={stylesHero.hero}>
            <img src="img/herogif.gif" alt="Animación del Logo de Lovestar" />
        </div>
    )
}

export default Hero;