import React from "react"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";


function Experiencia () {
return(
    <div className="max-w-screen-xl mx-auto">

            <div className="grid grid-cols-6 gap-8 p-10 ">
                <div className=" col-span-2">
                    <Card className=" bg-white/10 text-zinc-1000 h-full  hover:-translate-y-1 hover:scale-102  duration-600 glass justify-center items-center">
                        <CardHeader className=" flex-col items-start">
                            <div className="flex flex-col w-full text-center" >
                                <h3 className="text-8xl font-black">2024</h3>
                                <h3 className="text-8xl font-black -mt-5">2022</h3>
                                
                            </div>                            
                        </CardHeader>
                        
                    </Card>
                </div>

                <div className="col-span-4">
                    <Card className="py-4 px-10 bg-white/10 text-zinc-1000 h-full self-center  hover:-translate-y-1 hover:scale-102  duration-600 glass">
                        <CardHeader className=" flex-col items-start mb-3">
                            <p className="text-lg font-light">Banco Unión</p>
                            <p className="text-3xl font-bold">Diseñador web</p>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <p className="font-light">Como diseñador web, me encargo del diseño, desarrollo y despliegue de campañas web, en colaboración con el equipo de mercadeo. He contribuido al éxito de más de 20 campañas, implementando landing pages interactivas de marketing. Además, desarrollé la librería CSS del banco, optimizando el proceso de la construccion de sitios web</p>
                        </CardBody>
                    </Card>
                </div>

            </div>

            <div className="grid grid-cols-6 gap-8 px-10 ">
                <div className=" col-span-4">
                <Card className="py-4 px-10 bg-white/10 text-zinc-1000 h-full self-center  hover:-translate-y-1 hover:scale-102  duration-600 glass">
                        <CardHeader className=" flex-col items-start mb-3">
                            <p className="text-lg font-light">América de cali</p>
                            <p className="text-3xl font-bold">Webmaster</p>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <p className="font-light">Como diseñador web, me encargo del diseño, desarrollo y despliegue de campañas web, en colaboración con el equipo de mercadeo. He contribuido al éxito de más de 20 campañas, implementando landing pages interactivas de marketing. Además, desarrollé la librería CSS del banco, optimizando el proceso de la construccion de sitios web</p>
                        </CardBody>
                    </Card>
                    
                </div>

                <div className="col-span-2">
                <Card className=" bg-white/10 text-zinc-1000 h-full  hover:-translate-y-1 hover:scale-102  duration-600 glass justify-center items-center">
                        <CardHeader className=" flex-col items-start">
                            <div className="flex flex-col w-full text-center" >
                                <h3 className="text-8xl font-black">2022</h3>
                                <h3 className="text-8xl font-black -mt-5">2019</h3>
                                
                            </div>                            
                        </CardHeader>
                        
                    </Card>
                    
                </div>

            </div>

            <div className="grid grid-cols-6 gap-8 p-10 ">
                <div className=" col-span-2">
                    <Card className=" bg-white/10 text-zinc-1000 h-full  hover:-translate-y-1 hover:scale-102  duration-600 glass justify-center items-center">
                        <CardHeader className=" flex-col items-start">
                            <div className="flex flex-col w-full text-center" >
                                <h3 className="text-8xl font-black">2019</h3>
                                <h3 className="text-8xl font-black -mt-5">2015</h3>
                                
                            </div>                            
                        </CardHeader>
                        
                    </Card>
                </div>

                <div className="col-span-4">
                    <Card className="py-4 px-10 bg-white/10 text-zinc-1000 h-full self-center  hover:-translate-y-1 hover:scale-102  duration-600 glass">
                        <CardHeader className=" flex-col items-start mb-3">
                            <p className="text-lg font-light">Independiente</p>
                            <p className="text-3xl font-bold">Web developer</p>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <p className="font-light">Como diseñador web, me encargo del diseño, desarrollo y despliegue de campañas web, en colaboración con el equipo de mercadeo. He contribuido al éxito de más de 20 campañas, implementando landing pages interactivas de marketing. Además, desarrollé la librería CSS del banco, optimizando el proceso de la construccion de sitios web</p>
                        </CardBody>
                    </Card>
                </div>

            </div>
        </div>

)

}

export default Experiencia