import stylesHero from "./hero.module.css";

const Hero = () => {

    return (
        <div className={stylesHero.hero}>
            <div className={stylesHero.imagen}></div>
        </div>
    )
}

export default Hero;