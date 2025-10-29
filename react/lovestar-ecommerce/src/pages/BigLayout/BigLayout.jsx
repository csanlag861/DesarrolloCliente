import stylesBigLayout from "./biglayout.module.css";

import Header from "../../components/Reusables/Header/Header";
import Footer from "../../components/Reusables/Footer/Footer";
import { Outlet } from "react-router-dom";

function BigLayout() {
  return (
    <div className={stylesBigLayout.container}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default BigLayout;
