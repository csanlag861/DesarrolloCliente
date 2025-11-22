import stylesPerfil from "./perfil.module.css";

import Card from "../../components/Cards/Card-Perfil/Card-Perfil";

function Perfil() {
  return (
    <section className={stylesPerfil.main}>
      <h1>Perfil</h1>
      <div className={stylesPerfil.form}>
        <Card />
      </div>
    </section>
  );
}

export default Perfil;
