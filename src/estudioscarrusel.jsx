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
import { Pagination, Navigation, HashNavigation, Autoplay } from 'swiper/modules';


import dataestudios from "./dataestudios"

function Estudioscarrusel() {
    return (
        <div className=''>
            <Swiper
               
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}

                modules={[Autoplay, Pagination]}
                className="mySwiper px-20 pt-5 carrusel"
            >
                {dataestudios.map((estudio, index) => (
                    <SwiperSlide>
                        <Card className=" mb-12 md:py-8 md:px-8 px-4 py-4 bg-white/10 text-zinc-1000 h-96 md:min-h-96 glass mx-2">
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