import Intro from "./components/Intro";
import Home from "./components/Home";
import {Route, Routes} from 

function App() {
  return <div className="container">
    <Routes>
      <Route path="/Intro" element={<Intro/>}/>
      <Route path="/Home" element={<Home/>}/>
    </Routes>
  </div>;
}

export default App;
