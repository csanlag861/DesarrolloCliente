import "./styles/stylesGlobales.css"
import "./styles/stylesReusables.css"
import Home from "./pages/Home"
import Page2 from "./pages/Page2"
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="Page2" element={<Page2/>}/>
    </Routes>
    </>
  )
}

export default App
