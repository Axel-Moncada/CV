import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import dataproyectos from "./dataproyectos";

function Proyectos() {
    return (
        <div className="container mx-auto px-4 ">
            <div className="" style={{ alignContent: 'stretch' }}>


            {dataproyectos.map((proyecto) => (
                    <div key={proyecto.id} className="grid grid-cols-2 gap-8 p-10">
                        <div className="col-span-1 py-8 px-8">
                            <h3 className="text-lg">{proyecto.company}</h3>
                            <h2 className="text-4xl font-bold mb-4">{proyecto.title}</h2>
                            <p>{proyecto.description}</p>
                            <div className="tecnologias">
                                {/* Aquí puedes agregar cualquier contenido adicional */}
                            </div>
                        </div>
                        <div className="col-span-1">
                            <Card className="py-4 px-10 bg-white/10 text-zinc-1000 h-full self-center  hover:-translate-y-1 hover:scale-102  duration-600">
                                <CardHeader className=" flex-col items-start mb-3">
                                    <p className="text-4xl font-bold">Herramientas</p>
                                </CardHeader>
                                <CardBody className="overflow-visible py-2">
                                    {/* Contenido de las herramientas */}
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                ))}



            </div>

        </div >


    )
}

export default Proyectos