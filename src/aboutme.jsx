import React from "react"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Socialicons from "./logos/iconssocial"
import Disenoicons from "./logos/icondiseno";
import Iconlenguajes from "./logos/iconlenguajes";
import Iconoframework from "./logos/iconframework";




function Aboutme() {

    return (

        <div className="container mx-auto px-4 ">

            <div className="grid grid-cols-1  md:grid-cols-3 md:gap-8 md:p-10 " style={{ alignContent: 'stretch' }}>

                <div className="col-span-1 md:col-span-2 mb-8 md:mb-0">

                    <Card className="py-8 px-8 bg-white/10 text-zinc-1000 h-full  hover:-translate-y-1 hover:scale-102  duration-600 glass">
                        <CardHeader className="pb-0 pt-2 px-0 md:px-4 flex-col items-start">
                            <div className="justify-between flex w-full">
                                <h3 className="text-xl">Bienvenidos, 👋🏼</h3>
                                <div>
                                    <Socialicons />
                                </div>
                            </div>
                            <h1 className="text-4xl font-bold mb-7 mt-4 md:mt-1">¿Desarrollador o diseñador?  </h1>
                            <p className="pr-0 md:pr-20 text-lg" > Las dos, apasionado del  <b>diseño gráfico y la programación de software</b>. Inicié mi trayectoria estudiando Comunicación Publicitaria, donde adquirí habilidades en diseño gráfico, tendencias publicitarias y marketing digital. Después, por hobby, descubrí la programación y fusioné mis habilidades para convertirme en un diseñador y desarrollador Front-end desde hace mas de <b>5 años.</b> Manejo la suite Adobe y herramientas de UI/UX como Figma, junto con habilidades sólidas en desarrollo de código, especializándome en lenguajes de programación del lado del Front-end.</p>
                            
                        </CardHeader>
                        
                    </Card>
                </div>

                <div className="col-span-1 ">
                    <Card className="py-4 px-10 bg-white/10 text-zinc-1000 h-full self-center  hover:-translate-y-1 hover:scale-102  duration-600 glass">
                        <CardHeader className=" flex-col items-start mb-3">
                            <p className="text-4xl font-bold">Herramientas</p>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <h4 className="font-bold text-large mb-4">Diseño
                                <Disenoicons/> </h4>
                            <h4 className="font-bold text-large mb-4">Programación
                                <Iconlenguajes/></h4>
                            <h4 className="font-bold text-large mb-4" >Frameworks
                                <Iconoframework/></h4>
                        </CardBody>
                    </Card>
                </div>

            </div>
        </div>


    )

}

export default Aboutme