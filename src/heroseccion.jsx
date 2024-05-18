import { useEffect, useState } from 'react'
import React from "react";

import emoji from './assets/Axel-emoji.png'




function Heroseccion() {


  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-1">




          <div>
            <div>
              <img className='w-80 mx-auto' src={emoji} alt="" />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-10 dark:text-white">
              Hola, Soy  <span className='text-gradient'>  Axel Moncada, </span>
              Frontend Colombiano.
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600 font-regular dark:text-white">
              👨🏻‍💻Desarrollador y diseñador web - 💻Ingeniero de software <br></br> ✔FrontEnd developer - 🖌UX/UI
            </p>

            <div className='mt-10  flex space-x-20 justify-center'>
              <button className='text-xl btn-blanco dark:bg-white dark:text-gray-900 dark:hover:bg-zinc-600 dark:hover:text-white'>QUIEN SOY</button>
              <button className='text-xl btn-blanco dark:bg-white dark:text-gray-900 dark:hover:bg-zinc-600 dark:hover:text-white ' >MIS PROYECTOS</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )


}

export default Heroseccion
