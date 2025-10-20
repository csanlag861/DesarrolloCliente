import "./styles/stylesGlobales.css"
import "./styles/stylesReusables.css"
import Home from "./pages/Home"
import Page2 from "./pages/Page2"
import Login from "./pages/Login"
import Registro from "./pages/Registro"
import Contacto from "./pages/Contacto"
import { Route, Routes } from "react-router-dom";
import BigLayout from "./pages/BigLayout"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BigLayout />} >
          <Route index element={<Home />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes >
    </>
  )
}

export default App
