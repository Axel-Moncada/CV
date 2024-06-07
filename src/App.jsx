import './App.css'
import 'swiper/css';
import Header from './header.jsx';
import Proyectos from './proyectos.jsx';
import Estudios from './estudios.jsx';
import Experiencia from './experiencia.jsx';
import Axelsection from './axelsection.jsx';
import Menuaxel from './menu.jsx';
import Mode from './Mode.jsx';
import Comentarios from './Carruselcomen.jsx';
import Hablemos from './Hablemos.jsx';









function App() {




  return (
    <div className='bg-default-100 dark:bg-zinc-900'>
      
      <Mode />
      <Header />
      <Proyectos />
      <Estudios />
      <Experiencia/>
      <Comentarios/>
      <Axelsection/>
      <Hablemos/>


    </div>
  )
}

export default App
