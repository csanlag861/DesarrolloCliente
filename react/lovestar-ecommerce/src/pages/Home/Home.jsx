import Hero from "../../components/Home/Hero/Hero";
import Dialog from "../../components/Dialog/Dialog";
import Inpsiracion from "../../components/Home/Inspiracion/Inspiracion";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/ContextUser";

function Home() {
  const {currentUser} = useContext(UserContext);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const hasShownToday = localStorage.getItem("showDialog");
    const hoy = new Date().toDateString();

    if (hasShownToday !== hoy && !currentUser?.descuentoDialog) {
      const time = setTimeout(() => {
        setShowDialog(true);
        localStorage.setItem("showDialog", hoy);
      }, 5000);

      return () => clearTimeout(time);
    }
  }, [currentUser]);

  useEffect(() => {
    if (showDialog) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [showDialog]);

  return (
    <>
      <Hero />
      <Inpsiracion />
      {showDialog && <Dialog onClose={() => setShowDialog(false)} />}
    </>
  );
}

export default Home;
