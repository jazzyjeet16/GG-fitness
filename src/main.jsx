import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BannerProvider } from './context/BannerContext';
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from './context/WishlistContext';
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <BannerProvider>
    <WishlistProvider>
     <CartProvider>
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
  </CartProvider>
  </WishlistProvider>
  </BannerProvider>
);
