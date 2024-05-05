import React from "react"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Socialicons from "./iconssocial"




function Aboutme() {

    return (

        <div className="container mx-auto px-4">

            <div className="grid grid-cols-3 gap-4 p-10">

                <div className=" col-span-2">
                    <Card className="py-8 px-8 bg-zinc-800 text-white">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <div className="justify-between flex w-full">
                                <h3 className="text-xl">Bienvenidos, 👋🏼</h3>
                                <div>
                                    <Socialicons />
                                </div>
                            </div>
                            <h1 className="text-4xl font-bold mb-10">¿Desarrollador o diseñador?  </h1>
                            <p className="pr-20 text-lg"> Las dos, apasionado del diseño gráfico y la programación de software. Inicié mi trayectoria estudiando Comunicación Publicitaria, donde adquirí habilidades en diseño gráfico, tendencias publicitarias y marketing digital. Después, por hobby, descubrí la programación y fusioné mis habilidades para convertirme en un diseñador y desarrollador Front-end. Manejo la suite Adobe y herramientas de UI/UX como Figma, junto con habilidades sólidas en desarrollo de código, especializándome en lenguajes de programación del lado del Front-end.</p>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">

                        </CardBody>
                    </Card>
                </div>

                <div className="col-span-1">
                    <Card className="py-4 bg-zinc-800 text-white">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <p className="text-tiny uppercase font-bold">Daily Mix</p>
                            <small className="text-default-500">12 Tracks</small>
                            <h4 className="font-bold text-large">Frontend Radio</h4>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">

                        </CardBody>
                    </Card>
                </div>

            </div>
        </div>


    )

}

export default Aboutme