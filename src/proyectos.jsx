import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import dataproyectos from "./dataproyectos";
import React, { useState, useContext } from 'react';
import { Tooltip } from "@nextui-org/tooltip";
import csslogo from "./logos/css-b.svg"
import logobootstrap from "./logos/Bootstrap-b.svg"
import { ThemeContext } from "./contexts/themecontexts";
import { motion } from "framer-motion";

function Proyectos() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const { theme } = useContext(ThemeContext);

    const tamano = 25

    return (
        <div className="container mx-auto w-10/12  md:w-7/12 mt-32  " id="proyectos">
            <div className="" style={{ alignContent: 'stretch' }}>
                <h1 className="text-center text-4xl font-extrabold mt-10 mb-5">Proyectos principales</h1>

                {dataproyectos.map((proyecto, index) => (

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}


                        key={index} className={`grid grid-cols-1 md:grid-cols-6 md:gap-8 md:p-10`}
                        onMouseEnter={() => setHoveredIndex(index)}

                    >
                        <div className={`col-span-1 md:col-span-4 py-8 px-1 pr-10 self-center  md:text-left ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}>
                            <h3 className="text-lg">{proyecto.company}</h3>
                            <h2 className="text-4xl font-bold mb-4">{proyecto.title}</h2>
                            <p>{proyecto.description}</p>
                            <div className="flex  gap-4 mt-10">
                                {Object.entries(proyecto.tecnologias).map(([tecnologia, ruta]) => (
                                    <Tooltip showArrow={true} color={"primary"} content={tecnologia}>
                                        <img key={tecnologia} src={ruta} alt={tecnologia}

                                            className={`
                                        tecnologia-icono 
                                        ${theme === 'dark' ? 'iconwhite2' : ''} 
                                        ${tecnologia === 'FIGMA' ? 'tecnologia-icono-grande' : ''} ,
                                        ${tecnologia === 'PHP' ? 'tecnologia-icono-small' : ''} ,
                                        ${tecnologia === 'MYSQL' ? 'tecnologia-icono-small' : ''} ,
                                        ${tecnologia === 'BOOTSTRAP' ? 'tecnologia-icono-boots' : ''}`} />
                                    </Tooltip>
                                ))}


                            </div>
                        </div>
                        <div className={`col-span-1 mb-28 md:mb-0 md:p-2 md:col-span-2 ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}>
                            <Card
                                className=" py-2 px-2 bg-white/10 text-zinc-1000 h-96 self-center hover:-translate-y-1 hover:scale-102 duration-600"
                                style={{
                                    backgroundImage: `url(${proyecto.img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '100%',
                                    padding: '0px',
                                    height: '400px',
                                    overflow: 'hidden'
                                }}
                            >
                                {hoveredIndex === index && proyecto.video && (
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        webkit-playsinline="true"
                                        style={{
                                            position: 'absolute',
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    >
                                        <source src={proyecto.video} type="video/webm" />{ }</video>
                                )}
                            </Card>
                        </div>

                    </motion.div>
                ))}


            </div>

        </div >


    )
}

export default Proyectos