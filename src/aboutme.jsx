import React from "react"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Socialicons from "./logos/iconssocial"
import Disenoicons from "./logos/icondiseno";
import Iconlenguajes from "./logos/iconlenguajes";
import Iconoframework from "./logos/iconframework";

import {
    MagicCard,
    MagicContainer,
} from "./components/magicui/magic-card";

import { motion } from "framer-motion";


function Aboutme() {

    return (

        <div className="container mx-auto px-4 md:mt-16 z-0">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 2 }}

                className="flex flex-auto flex-row gap-10">
                <MagicContainer
                    className={
                        "flex h-full md:h-[500px]  w-full flex-col md:gap-10 lg:h-[600px] lg:flex-row px-3 md:px-0 md:mt-1 mb-24 md:mb-10"
                    }
                >

                    <MagicCard
                        borderwidth={3}
                        className="flex md:w-8/12 cursor-pointer flex-col items-start justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-7 md:p-12 shadow-2xl text-justify">
                        <div className="flex flex-col flex-col-reverse md:flex-row md:justify-between flex w-full">
                            <h3 className="text-xl text-center md:text-left">Bienvenidos, 👋🏼</h3>
                            <div className="flex mb-5 md:mt-0 justify-center">
                                <Socialicons />
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold mb-7 mt-4 md:mt-1  text-center md:text-left">¿Diseñador o desarrollador? ¿Por qué no ambos? </h1>
                        <p className="pr-0 md:pr-5 text-lg">
                            Soy un apasionado del <b>diseño gráfico y la programación web</b>. Comencé mi camino en la Comunicación Publicitaria, donde desarrollé habilidades en diseño visual, tendencias digitales y marketing. Más adelante, descubrí el mundo del código y fusioné ambos mundos para construir experiencias web que combinan estética y funcionalidad.
                            
                            Desde hace más de 5 años me desempeño como <b>diseñador y desarrollador Front-end</b>, con experiencia en diseño UI/UX y programación web moderna.
                            Manejo herramientas como <b>Figma</b>, <b>Adobe Photoshop</b>, <b>Illustrator</b>, y en el desarrollo domino tecnologías como:
                            <br /><br />
                            <b>Lenguajes:</b> HTML, CSS, JavaScript, PHP, SQL<br />
                            <b>Frameworks y librerías:</b> React, Angular, Node.js, Express, Bootstrap, Tailwind CSS<br />
                            <b>Bases de datos:</b> MySQL, MongoDB<br />
                        
                            Me especializo en crear sitios web responsive, optimizados para rendimiento, con una estructura clara y adaptable. Mi enfoque es construir soluciones web completas, desde el diseño visual hasta la implementación funcional.
                        </p>
                        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                    </MagicCard>




                    <MagicCard
                        borderwidth={3}
                        className="flex md:w-4/12 cursor-pointer flex-col items-start justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] mt-10 md:mt-0 p-6 md:p-12 shadow-2xl">
                        <p className="text-4xl font-bold mb-5">Herramientas</p>
                        <h4 className="font-bold text-large mb-4">Diseño
                            <Disenoicons /> </h4>
                        <h4 className="font-bold text-large mb-4">Programación
                            <Iconlenguajes /></h4>
                        <h4 className="font-bold text-large mb-4" >Frameworks
                            <Iconoframework /></h4>

                        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                    </MagicCard>
                </MagicContainer>


            </motion.div>


        </div>


    )

}

export default Aboutme