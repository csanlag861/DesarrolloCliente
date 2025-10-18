import stylesLovestar from "./lovestar.module.css";

const Lovestar = () => {
  return (
    <div className={stylesLovestar["text-lovestar"]}>
      <img src="img/alt-logo.svg" alt="Logo secundario de Lovestar" />
      <a href="Home">Entrar</a>
    </div>
  );
};

export default Lovestar;
