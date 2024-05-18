import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';


import dataestudios from "./dataestudios"

function Estudioscarrusel() {
    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={40}
                loop={true}
                
                pagination={{
                    clickable: true,
                }}
                
                modules={[Pagination]}
                className="mySwiper px-20 "
            >
                {dataestudios.map((estudio, index) => (
                    <SwiperSlide>
                        <Card className=" mb-12 py-8 px-8 bg-white/10 text-zinc-1000 min-h-96  hover:-translate-y-1 hover:scale-102  duration-600" isBlurred
                            shadow="md">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                <p className="text-2sm font-bold">{estudio.institucion}</p>
                                <small className="text-default-500 mb-5">{estudio.fecha}</small>
                                <h4 className="font-bold text-large">{estudio.titulo}</h4>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2">
                                <p>{estudio.descripcion}</p>
                            </CardBody>
                        </Card>
                    </SwiperSlide>


                ))
                }
            </Swiper>
        </div>
    )

}

export default Estudioscarrusel