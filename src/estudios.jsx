import React from "react"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";


function Estudios () {
    return (

        <div className="container mx-auto px-4 ">

            <div className="grid grid-cols-9 gap-8 p-10 " style={{ alignContent: 'stretch' }}>

                <div className=" col-span-3">

                    <Card className="py-8 px-8 bg-white/10 text-zinc-1000 min-h-80  hover:-translate-y-1 hover:scale-102  duration-600" isBlurred
                        shadow="md">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <h1>estudio 1</h1>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis mollitia, eius incidunt ipsa at tenetur, recusandae modi reiciendis dolore minima deserunt ullam repellat ex impedit? Consequuntur totam necessitatibus alias iusto.</p>
                        </CardBody>
                    </Card>
                </div>

                <div className=" col-span-3">

                    <Card className="py-8 px-8 bg-white/10 text-zinc-1000 min-h-80  hover:-translate-y-1 hover:scale-102  duration-600" isBlurred
                        shadow="md">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <h1>estudio 1</h1>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis mollitia, eius incidunt ipsa at tenetur, recusandae modi reiciendis dolore minima deserunt ullam repellat ex impedit? Consequuntur totam necessitatibus alias iusto.</p>
                        </CardBody>
                    </Card>
                </div>

                <div className=" col-span-3">

                    <Card className="py-8 px-8 bg-white/10 text-zinc-1000 min-h-80  hover:-translate-y-1 hover:scale-102  duration-600" isBlurred
                        shadow="md">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <h1>estudio 1</h1>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis mollitia, eius incidunt ipsa at tenetur, recusandae modi reiciendis dolore minima deserunt ullam repellat ex impedit? Consequuntur totam necessitatibus alias iusto.</p>
                        </CardBody>
                    </Card>
                </div>

               

            </div>
        </div>


    )
}

export default Estudios