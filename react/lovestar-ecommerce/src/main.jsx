import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from "./context/ContextUser";
import { CartContextProvider } from "./context/ContextCart.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
/*   <StrictMode>
 */    <UserContextProvider>
    <CartContextProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </CartContextProvider>
  </UserContextProvider>
/*   </StrictMode>,
 */)
