import Contador from "./Contador";
const Intro = () => {
  return (
    <>
      <div className="contador">
        <Contador />
      </div>
      <div className="text-lovestar">
        <img src="img/alt-logo.svg" alt="Logo secundario de Lovestar" />
        <p>Entrar</p>
      </div>
      <div className="footer">
        <p>'A LOVESTORY'</p>
        <p>ÚNETE AL CLUB</p>
      </div>
    </>
  );
};

export default Intro;
