import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from "@nextui-org/react";
import Swiper from 'swiper';
import { ThemeContextProvider } from "./contexts/themecontexts";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
