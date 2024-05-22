import React from "react"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "./ListboxWrapper";
import Player1 from "./musicplayer";


function Axelsection() {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto">

                <div className="grid grid-cols-8 gap-8 p-10 ">
                    <div className=" col-span-4">
                        <Card className=" bg-white/10 text-zinc-1000 h-full  hover:-translate-y-1 hover:scale-102  duration-600 glass justify-center items-center">
                            <CardHeader className=" flex-col items-start px-10 pt-10">
                                <h2 className="text-3xl font-bold">Conoceme mas </h2>
                            </CardHeader>
                            <CardBody className="overflow-visible pl-20 pt-1 pb-10">
                                <ul className="list-disc	">
                                    <li>Me encanta la musica toco saxofon y bajo</li>
                                    <li>Soy diseñador creativo de varios festivales musicales de la region</li>
                                    <li>Me encanta hacer videos y animaciones</li>
                                    <li>En mis tiempos libres soy fotogrago</li>
                                    <li>Hago trading cuando tengo la posibilidad</li>
                                    <li>Disfruto mucho los videojuegos</li>
                                    <li>Quisiera crear contenido para redes</li>
                                </ul>

                            </CardBody>

                        </Card>
                    </div>

                    <div className=" col-span-2">
                        <Card className=" bg-white/10 text-zinc-1000 h-full  hover:-translate-y-1 hover:scale-102  duration-600 glass justify-center items-center">

                            <h3>foto mia</h3>

                        </Card>
                    </div>

                    <div className=" col-span-2">
                        <Card className=" bg-white/10 text-zinc-1000 h-full  hover:-translate-y-1 hover:scale-102  duration-600 glass justify-center items-center">
                            <h1>otras fotos</h1>


                        </Card>
                    </div>
                </div>
                <div className="grid grid-cols-8 gap-8 p-10 pt-1">
                    <div className=" col-span-2">
                        <Card className=" bg-white/10 text-zinc-1000 h-full  hover:-translate-y-1 hover:scale-102  duration-600 glass justify-center items-center">
                            <CardHeader className=" flex-col px-10 pb-0 text-center">
                                <h3 className="text-xl font-light ">English level</h3>
                            </CardHeader>
                            <CardBody className="overflow-visible text-center -mt-6">
                                <h2 className="text-9xl font-bold">A2</h2>
                            </CardBody>

                        </Card>
                    </div>

                    <div className=" col-span-4">
                        <Card className=" bg-white/10 text-zinc-1000 h-full  hover:-translate-y-1 hover:scale-102  duration-600 glass justify-center items-center">
                            
                            <Player1 className="text-white "/>

                        </Card>
                    </div>

                    <div className=" col-span-2">
                        <Card className=" bg-white/10 text-zinc-1000 h-full  hover:-translate-y-1 hover:scale-102  duration-600 glass justify-center items-center">
                            <CardHeader className=" flex-col items-start px-10 pt-10">
                                <h2 className="text-3xl font-bold">diseños</h2>
                            </CardHeader>
                            <CardBody className="overflow-visible pl-20 pt-1 pb-10">


                            </CardBody>

                        </Card>
                    </div>


                </div>


            </div>
        </div>
    )
}

export default Axelsection