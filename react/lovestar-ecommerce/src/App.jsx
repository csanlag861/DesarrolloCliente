import "./styles/stylesGlobales.css"
import "./styles/styleReusables.css"

import Intro from "./pages/Intro/Intro";
import Home from "./pages/Home/Home";
import Tienda from "./pages/Tienda/Tienda";
import Login from "./pages/Login/Login";

import { Route, Routes } from 'react-router-dom';
import BigLayout from "./pages/BigLayout/BigLayout";

function App() {
  return <>
    <Routes>
      <Route path="/" element={<Intro />} />

      <Route path="/" element={<BigLayout />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/Tienda" element={<Tienda />} />
      </Route>
      <Route path="/Login element={<Login/>}"/>
    </Routes>
  </>;
}

export default App;
