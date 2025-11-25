import Hero from "../../components/Home/Hero/Hero";
import Dialog from "../../components/Dialog/Dialog";
import Inpsiracion from "../../components/Home/Inspiracion/Inspiracion";
import { useEffect, useState } from "react";

function Home() {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const hasShownToday = localStorage.getItem("showDialog");
    const hoy = new Date().toDateString();

    if (hasShownToday !== hoy) {
      const time = setTimeout(() => {
        setShowDialog(true);
        localStorage.setItem("showDialog", hoy);
      }, 5000);

      return () => clearTimeout(time);
    }
  }, []);

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
      {showDialog && <Dialog />}
    </>
  );
}

export default Home;
