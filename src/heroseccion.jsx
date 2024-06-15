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
import { motion } from 'framer-motion';
import BtnHome from "./components/Botonesinicio"
import { useParams } from 'react-router-dom';



function Heroseccion() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  let { companyName } = useParams();
  console.log(companyName)
  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      id="inicio"
    >



      <div className="relative isolate px-6 md:pt-24">
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-1">





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
              <motion.img
                className='w-80 mx-auto'
                src={emoji}
                alt="emoji"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}                
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>

          <div className="text-center min-h-40">
            <h1 className="text-4xl font-regular tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            👋🏻  Hola {companyName} , Me llamo <br/>   <div className='mt-1 '> <span className='text-gradient sm:text-7xl font-black'>Axel Moncada</span></div> </h1>

            <div className='min-h-32'>
              <Initialtext />
            </div>




            <div className='  flex md:flex-row flex-col md:space-x-20 justify-center'>
              <BtnHome></BtnHome>

            </div>
          </div>
        </div>

      </div>
    </motion.div >
  )


}

export default Heroseccion
