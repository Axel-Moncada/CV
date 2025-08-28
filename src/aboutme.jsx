import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Socialicons from "./logos/iconssocial";
import Disenoicons from "./logos/icondiseno";
import Iconlenguajes from "./logos/iconlenguajes";
import Iconoframework from "./logos/iconframework";

import { MagicCard, MagicContainer } from "./components/magicui/magic-card";

import { motion } from "framer-motion";

function Aboutme() {
  return (
    <div className="container mx-auto px-4 md:mt-16 z-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 2 }}
        className="flex flex-auto flex-row gap-10"
      >
        <MagicContainer
          className={
            "flex h-full md:h-[500px]  w-full flex-col md:gap-10 lg:h-[600px] lg:flex-row px-3 md:px-0 md:mt-1 mb-24 md:mb-10"
          }
        >
          <MagicCard
            borderwidth={3}
            className="flex md:w-8/12 cursor-pointer flex-col items-start justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-7 md:p-12 shadow-2xl text-justify"
          >
            <div className="flex flex-col flex-col-reverse md:flex-row md:justify-between flex w-full">
              <h3 className="text-xl text-center md:text-left">
                
              </h3>
              <div className="flex mb-5 md:mt-0 justify-center">
                <Socialicons />
              </div>
            </div>
            <div>
              <h1 class="text-4xl font-bold mb-7 mt-4 md:mt-1 text-center md:text-left">
                Desarrollador Full-Stack & Diseñador UX/UI 🚀
              </h1>
              <p class="pr-0 md:pr-5 text-lg/5">
                Con más de 5 años de experiencia, combino el pensamiento lógico
                de la programación con la visión creativa del diseño para
                construir experiencias web completas. Mi objetivo es desarrollar
                soluciones robustas y funcionales, asegurando que cada proyecto
                no solo cumpla con sus objetivos, sino que también ofrezca una
                usabilidad excepcional y una estética impecable.
              </p>
              <br />
              <p class="pr-0 md:pr-5 text-lg/5">
                Mi especialidad es la creación de sitios web responsive,
                optimizados para un rendimiento superior y con una estructura de
                código clara y mantenible. Mis habilidades abarcan todo el
                ecosistema de desarrollo:
              </p>
              <br />
              <p class="font-bold">Tecnologías clave:</p>
              
              <p class="text-lg">
                <strong>Backend:</strong> Node.js, Express, PHP, SQL
                <br />
                <strong>Frontend:</strong> JavaScript, React, Angular, HTML,
                CSS, Tailwind CSS, Bootstrap
                <br />
                <strong>Bases de datos:</strong> MySQL, MongoDB
                <br />
                <strong>Herramientas de Diseño:</strong> Figma, Adobe Photoshop,
                Illustrator
              </p>
              <br />
              <p class="pr-0 md:pr-5 text-lg/5">
                Mi doble rol me permite entender la visión del cliente desde el
                primer boceto hasta la implementación final, garantizando que el
                producto sea escalable y cumpla con los más altos estándares de
                calidad.
              </p>
            </div>
            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
          </MagicCard>

          <MagicCard
            borderwidth={3}
            className="flex md:w-4/12 cursor-pointer flex-col items-start justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] mt-10 md:mt-0 p-6 md:p-12 shadow-2xl"
          >
            <p className="text-4xl font-bold mb-5">Herramientas</p>
            <h4 className="font-bold text-large mb-4">
              Diseño
              <Disenoicons />{" "}
            </h4>
            <h4 className="font-bold text-large mb-4">
              Programación
              <Iconlenguajes />
            </h4>
            <h4 className="font-bold text-large mb-4">
              Frameworks
              <Iconoframework />
            </h4>

            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
          </MagicCard>
        </MagicContainer>
      </motion.div>
    </div>
  );
}

export default Aboutme;
