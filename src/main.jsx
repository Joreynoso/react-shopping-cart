import { createRoot } from 'react-dom/client'

// --> import context's
import CartProvider from './context/CartContext.jsx';
import ThemeProvider from "./context/ThemeContext";

import App from './App.jsx'
import { StrictMode } from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
          <App />
      </CartProvider>
    </ThemeProvider>
  </StrictMode>
)

