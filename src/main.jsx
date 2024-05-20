import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from "@nextui-org/react";
import Swiper from 'swiper';
import { ThemeContextProvider } from "./contexts/themecontexts";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
)
