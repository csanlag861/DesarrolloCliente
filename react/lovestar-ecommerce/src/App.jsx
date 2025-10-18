import "./styles/stylesGlobales.css"
import "./styles/styleReusables.css"

import Intro from "./pages/Intro/Intro";
import Home from "./pages/Home/Home";
import {Route, Routes} from 'react-router-dom';

function App() {
  return <div className="container">
    <Routes>
      <Route path="/Intro" element={<Intro/>}/>
      <Route path="Home" element={<Home/>}/>
    </Routes>
  </div>;
}

export default App;
