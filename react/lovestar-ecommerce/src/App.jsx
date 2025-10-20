import "./styles/stylesGlobales.css"
import "./styles/styleReusables.css"

import Intro from "./pages/Intro/Intro";
import Home from "./pages/Home/Home";
import Tienda from "./pages/Tienda/Tienda";

import { Route, Routes } from 'react-router-dom';
import BigLayout from "./pages/BigLayout/BigLayout";

function App() {
  return <div className="container">
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/" element={<BigLayout />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/Tienda" element={<Tienda />} />

      </Route>
    </Routes>
  </div>;
}

export default App;
