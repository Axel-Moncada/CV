import './App.css'
import {Button, ButtonGroup} from "@nextui-org/button";
import Header from './header.jsx';
import Proyectos from './proyectos.jsx';
import Estudios from './estudios.jsx';





function App() {
  return (
    <div>
    <Header />,
    <Proyectos/>,
    <Estudios/>
    </div>
  )
}

export default App
