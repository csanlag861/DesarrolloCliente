import stylesBigLayout from "./biglayout.module.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
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
