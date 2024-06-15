import React from 'react';
import './App.css';
import 'swiper/css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './header.jsx';
import Proyectos from './proyectos.jsx';
import Estudios from './estudios.jsx';
import Experiencia from './experiencia.jsx';
import Axelsection from './axelsection.jsx';
import Mode from './Mode.jsx';
import Comentarios from './Carruselcomen.jsx';
import Hablemos from './Hablemos.jsx';




function Home () {
  return (
    <div>
      <Header />
      <Experiencia />
      <Proyectos />
      <Estudios />
      
      <Comentarios />
      <Axelsection />
      <Hablemos />
    </div>
  );
}

function HomeWithCompany() {
  return (
    <div>
      <Header />
      <Experiencia />
      <Proyectos />
      <Estudios />
      
      <Comentarios />
      <Axelsection />
      <Hablemos />
    </div>
  );
}

function App() {
  return (
   
      <div className='bg-default-100 dark:bg-zinc-900'>
        <Mode />
        <Routes>
          <Route  path="/"  element={<Home/>} />
          <Route  path="/portafolio/:companyName"  element={<HomeWithCompany/>} />
          
        </Routes>
      </div>
    
  );
}

export default App;