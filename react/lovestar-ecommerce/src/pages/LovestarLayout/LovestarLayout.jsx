import stylesBigLayout from "./lovestarlayout.module.css";

import Header from "../../components/Reusables/Header-Forms/Header";
import { Outlet } from "react-router-dom";

function BigLayout() {
  return (
    <div className={stylesBigLayout.container}>
      <Header />
      <Outlet />
    </div>
  );
}

export default BigLayout;
