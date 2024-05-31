import { useContext } from 'react'
import React from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./assets/MoonIcon";
import { SunIcon } from "./assets/SunIcon";
import emoji from './assets/Axel-emoji.png'
import { ThemeContext } from "./contexts/themecontexts";
import bg from "./assets/bg-2.png"
import bg3 from "./assets/bg-3.png"
import pattern from "./assets/pattern.png"
import { Initialtext } from './initialtext';


function Heroseccion() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <div className="relative isolate px-6 md:pt-14">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-1">

          <div className="mode">
            <Switch
              defaultSelected={theme === "dark"}
              size="lg"
              color="secondary"
              startContent={<SunIcon />}
              endContent={<MoonIcon />}
              onClick={toggleTheme}
            >

            </Switch>
          </div>



          {theme === "dark" && (
            <div>
              <div className="background">
                <img src={bg} alt="" width="100%" />
                <img src={bg3} alt="" width="100%" id="bg3" />

              </div>
              <div className="patter">
                <img src={pattern} alt="" width="60%" id="pattern" />
              </div>
            </div>
          )}
          <div>

            <div>
              <img className='w-80 mx-auto' src={emoji} alt="" />
            </div>
          </div>

          <div className="text-center min-h-20">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-10 dark:text-white">
              Hola, Soy  <span className='text-gradient'>  Axel Moncada, </span>
              <div className='min-h-20'>
              <Initialtext />
              </div>
            </h1>




            <div className='mt-10  flex md:space-x-20 justify-center'>
              <button onClick={() => window.location.href = '#experiencia'} className='text-xl hover:border-solid hover:drop-shadow-8xl btn-blanco dark:bg-white dark:text-gray-900 dark:hover:bg-[#272334] dark:hover:text-white'>EXPERIENCIA
              </button>

              <button onClick={() => window.location.href = '#proyectos'} className='text-xl btn-blanco dark:bg-white dark:text-gray-900 dark:hover:bg-[#272334] dark:hover:text-white' >MIS PROYECTOS</button>

            </div>
          </div>
        </div>

      </div>
    </div>
  )


}

export default Heroseccion
