import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from "./context/ContextUser";
import { CartContextProvider } from "./context/ContextCart.jsx";


createRoot(document.getElementById('root')).render(
/*   <StrictMode>
 */    <UserContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartContextProvider>
    </UserContextProvider>
/*   </StrictMode>,
 */)
