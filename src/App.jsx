import './App.css'
import 'swiper/css';
import Header from './header.jsx';
import Proyectos from './proyectos.jsx';
import Estudios from './estudios.jsx';
import Experiencia from './experiencia.jsx';
import Axelsection from './axelsection.jsx';









function App() {




  return (
    <div className='bg-default-100 dark:bg-zinc-900'>
      <Header />
      <Proyectos />
      <Estudios />
      <Experiencia/>
      <Axelsection/>


    </div>
  )
}

export default App
