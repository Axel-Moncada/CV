import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import dataproyectos from "./dataproyectos";
import React, { useState, useContext } from 'react';
import { Tooltip } from "@nextui-org/tooltip";
import csslogo from "./logos/css-b.svg"
import logobootstrap from "./logos/Bootstrap-b.svg"
import { ThemeContext } from "./contexts/themecontexts";

function Proyectos() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const { theme } = useContext(ThemeContext);
    
    const tamano = 25

    return (
        <div className="container mx-auto w-7/12 mt-32 ">
            <div className="" style={{ alignContent: 'stretch' }}>
                <h1 className="text-center text-4xl font-extrabold mt-10 mb-5">Proyectos principales</h1>

                {dataproyectos.map((proyecto, index) => (
                    <div key={index} className={`grid grid-cols-6 gap-8 p-10 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {index % 2 === 0 ? (
                            <>
                                <div className="col-span-4 py-8 px-1 pr-10 self-center">
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
                                <div className="col-span-2">
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
                            </>
                        ) : (
                            <>
                                <div className="col-span-2 self-center">
                                    <Card
                                        className="py-2 px-2 bg-white/10 text-zinc-1000 h-96 self-center hover:-translate-y-1 hover:scale-102 duration-600"
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
                                <div className="col-span-4 py-8 px-8">
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
                                        ${(tecnologia === 'PHP') || (tecnologia === 'NODE_JS') ? 'tecnologia-icono-small' : ''} ,
                                        ${tecnologia === 'MYSQL' ? 'tecnologia-icono-small' : ''} ,
                                        ${tecnologia === 'BOOTSTRAP' ? 'tecnologia-icono-boots' : ''}`} />
                                            </Tooltip>
                                        ))}


                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ))}


            </div>

        </div >


    )
}

export default Proyectos