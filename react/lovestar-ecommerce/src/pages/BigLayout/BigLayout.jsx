import stylesBigLayout from "./biglayout.module.css";

import Header from "../../components/Reusables/Header/Header";
import Headerv2 from "../../components/Reusables/Header-v2/Header";
import Footer from "../../components/Reusables/Footer/Footer";
import FooterMember from "../../components/Reusables/Footer-Member/Footer";
import { Outlet } from "react-router-dom";

import { useContext } from "react";
import { UserContext } from "../../context/ContextUser";

function BigLayout() {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className={stylesBigLayout.container}>
        <Headerv2 />
        <main className={stylesBigLayout.main}>
          <Outlet />
        </main>
        {!currentUser ? (
          <Footer />
        ) : currentUser?.rol == "user" ? (
          <Footer />
        ) : (
          <FooterMember />
        )}
      </div>
    </>
  );
}

export default BigLayout;
