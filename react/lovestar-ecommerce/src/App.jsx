import "./styles/stylesGlobales.css"
import "./styles/styleReusables.css"

import Intro from "./pages/Intro/Intro";
import Home from "./pages/Home/Home";
import Tienda from "./pages/Tienda/Tienda";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Admin from "./pages/Admin/Admin";

import PrivateRoute from "./pages/protected/PrivateRoutes";
import LoginRoute from "./pages/protected/LoginRoutes";


import { Route, Routes } from 'react-router-dom';
import BigLayout from "./pages/BigLayout/BigLayout";

import { ToastContainer } from 'react-toastify';

function App() {
  return <>
    <Routes>
      <Route path="/" element={<Intro />} />

      <Route path="/" element={<BigLayout />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/Tienda" element={<Tienda />} />

        <Route path="/lovestar" element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        } />
      </Route>

      <Route path="/Login" element={
        <LoginRoute>
          <Login />
        </LoginRoute>
      } />
      <Route path="/Register" element={
        <LoginRoute>
          <Register />
        </LoginRoute>
      } />



    </Routes>
    <ToastContainer position="top-center" autoClose={2000} />
  </>;
}

export default App;
