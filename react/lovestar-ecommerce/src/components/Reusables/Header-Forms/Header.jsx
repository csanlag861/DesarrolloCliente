import stylesHeader from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <header className={stylesHeader.logo}>
        <Link to="/Home">
          <img src="./img/lovestarlogo.svg" alt="Logo de Lovestar" />
        </Link>
      </header>
  );
};

export default Header;
