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
      }, 1000);

      return () => clearTimeout(time);
    }
  }, []);

  return (
    <>
      <Hero />
      <Inpsiracion />
      {showDialog && <Dialog />}
    </>
  );
}

export default Home;
