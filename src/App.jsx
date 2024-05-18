import './App.css'
import 'swiper/css';
import Header from './header.jsx';
import Proyectos from './proyectos.jsx';
import Estudios from './estudios.jsx';
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "./assets/MoonIcon";
import {SunIcon} from "./assets/SunIcon";
import { useEffect, useState } from 'react'








function App() {
  const [theme,setTheme] = useState("light")

   useEffect(() => {
    if (theme== "dark"){
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
   },[theme])

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
  }

  return (
    <div>
       <Switch
            defaultSelected
            size="lg"
            color="success"
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
            onClick={handleChangeTheme}
          >
            Dark mode
          </Switch>
    <Header theme={theme} />,
    
    <Proyectos/>,
    <Estudios/>
    </div>
  )
}

export default App
