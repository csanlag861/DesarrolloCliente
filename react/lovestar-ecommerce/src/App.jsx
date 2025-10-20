import "./styles/stylesGlobales.css"
import "./styles/styleReusables.css"

import Intro from "./pages/Intro/Intro";
import Home from "./pages/Home/Home";
import { Route, Routes } from 'react-router-dom';
import BigLayout from "./pages/BigLayout/BigLayout";

function App() {
  return <div className="container">
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/Home" element={<BigLayout />}>
        <Route path="/Home" element={<Home />} />

      </Route>
    </Routes>
  </div>;
}

export default App;
