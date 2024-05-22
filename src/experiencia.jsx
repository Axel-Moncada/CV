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
                            <p className="font-light">Desde septiembre de 2022, soy Diseñador Web en Banco Unión, donde diseño y mantengo el sitio web principal, asegurando una experiencia de usuario excepcional. Colaboro con los departamentos de marketing y tecnología para crear experiencias digitales atractivas y gestionar proyectos de diseño web. Utilizo HTML, CSS y JavaScript para desarrollar sitios web receptivos. He lanzado más de 15 campañas de marketing, optimizando la interfaz de usuario y mejorando la conversión. También apoyo al equipo de diseño gráfico, diseño y codifico correos electrónicos, y contribuyo a la producción de videos para las iniciativas de la empresa.</p>
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
                            <p className="font-light">Durante mi tiempo como Webmaster y Desarrollador Front-End en América de Cali, de abril de 2019 a agosto de 2022, gestioné la página web oficial y la tienda virtual, asegurando su operatividad y actualización. Colaboré con el equipo de comunicaciones para crear materiales gráficos y audiovisuales para campañas de marketing, y desarrollé plataformas internas que mejoraron la eficiencia operativa, incluyendo sistemas de gestión de comunidades, carnetización, y gestión de periodistas. Supervisé la tienda virtual optimizando su plataforma generando ingresos adicionales, combinando habilidades técnicas y creativas para una presencia digital robusta y atractiva.</p>
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
                                <h3 className="text-8xl font-black">2017</h3>
                                <h3 className="text-8xl font-black -mt-5">2024</h3>
                                
                            </div>                            
                        </CardHeader>
                        
                    </Card>
                </div>

                <div className="col-span-4">
                    <Card className="py-4 px-10 bg-white/10 text-zinc-1000 h-full self-center  hover:-translate-y-1 hover:scale-102  duration-600 glass">
                        <CardHeader className=" flex-col items-start mb-3">
                            <p className="text-lg font-light">Independiente</p>
                            <p className="text-3xl font-bold">Diseñador creativo</p>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <p className="font-light">Desde 2017, he trabajado como freelancer con diversas empresas nacionales e internacionales en la creación e implementación de soluciones web para optimizar sus resultados. He colaborado con más de 40 empresas, construyendo numerosos ecommerces y aplicaciones web utilizando tecnologías front-end como React, HTML, CSS, JavaScript y Angular. Entre los clientes más relevantes se encuentran Transur S.A., Western Union, Fundación Adrián Ramos, Fundación Canto por la Vida y el Ministerio de Cultura. Mi trabajo ha abarcado desde el diseño grafico y desarrollo de sitios web hasta la optimización de experiencias de usuario, asegurando siempre resultados eficaces y de alta calidad.</p>
                        </CardBody>
                    </Card>
                </div>

            </div>
        </div>

)

}

export default Experiencia