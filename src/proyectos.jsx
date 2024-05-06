import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import dataproyectos from "./dataproyectos";
import React, { useState } from 'react';
import { Tooltip } from "@nextui-org/tooltip";
import csslogo from "./logos/css-b.svg"
import logobootstrap from "./logos/Bootstrap-b.svg"

function Proyectos() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const tamano = 25

    return (
        <div className="container mx-auto w-7/12 ">
            <div className="" style={{ alignContent: 'stretch' }}>


                {dataproyectos.map((proyecto, index) => (
                    <div key={proyecto.id} className={`grid grid-cols-6 gap-8 p-10 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {index % 2 === 0 ? (
                            <>
                                <div className="col-span-4 py-8 px-8 self-center">
                                    <h3 className="text-lg">{proyecto.company}</h3>
                                    <h2 className="text-4xl font-bold mb-4">{proyecto.title}</h2>
                                    <p>{proyecto.description}</p>
                                    <div className="flex iconwhite gap-4 mt-10">
                                        {Object.entries(proyecto.tecnologias).map(([tecnologia, ruta]) => (
                                            <Tooltip showArrow={true} color={"primary"} content={tecnologia}>
                                                <img key={tecnologia} src={ruta} alt={tecnologia} width={tamano} className="tecnologia-icono" />
                                            </Tooltip>
                                        ))}


                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <Card
                                        style={{
                                            backgroundImage: `url(${hoveredIndex === index ? proyecto.video : proyecto.img})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            width: '100%',
                                            height: '400px'
                                        }}
                                        className="py-2 px-2 bg-white/10 text-zinc-1000 h-96 self-center  hover:-translate-y-1 hover:scale-102  duration-600">
                                    </Card>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="col-span-2 self-center">
                                    <Card
                                        style={{
                                            backgroundImage: `url(${hoveredIndex === index ? proyecto.video : proyecto.img})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            width: '100%',
                                            height: '400px'
                                        }}
                                        className="py-2 px-2 bg-white/10 text-zinc-1000 h-96 self-center  hover:-translate-y-1 hover:scale-102  duration-600">
                                    </Card>
                                </div>
                                <div className="col-span-4 py-8 px-8">
                                    <h3 className="text-lg">{proyecto.company}</h3>
                                    <h2 className="text-4xl font-bold mb-4">{proyecto.title}</h2>
                                    <p>{proyecto.description}</p>
                                    <div className="flex iconwhite gap-4 mt-10">
                                        {Object.entries(proyecto.tecnologias).map(([tecnologia, ruta]) => (
                                            <Tooltip showArrow={true} color={"primary"} content={tecnologia}>
                                                <img key={tecnologia} src={ruta} alt={tecnologia} 
                                                    className={`
                                            tecnologia-icono 
                                            ${tecnologia === 'FIGMA' ? 'tecnologia-icono-grande' : ''} 
                                            ${tecnologia === 'PHP' ? 'tecnologia-icono-small' : ''}`} />
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