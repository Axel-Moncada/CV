import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {
    MagicCard,
    MagicContainer,
} from "./components/magicui/magic-card";
import { motion } from 'framer-motion';
import { Pagination, Navigation, HashNavigation, Autoplay } from 'swiper/modules';



import dataestudios from "./dataestudios"

function Estudioscarrusel() {
    return (
        <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            viewport={{once:true, amount:0.5}}
            transition={{duration:1}}
        
        className=''>
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
                        <MagicContainer className={
                            "flex h-full md:h-[800px]  w-full flex-col gap-2 lg:h-[330px] lg:flex-row px-8 md:px-0 pb-8  mb-24 md:mb-10"}>
                            <MagicCard
                                borderwidth={3}
                                className="flex md:w-6/6 p-8 cursor-pointer flex-col items-start justify-start overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)]  shadow-lg">
                                <p className="text-2sm font-bold">{estudio.institucion}</p>
                                <small className="text-default-500 mb-5">{estudio.fecha}</small>
                                <h4 className="font-bold text-large">{estudio.titulo}</h4>
                                <p>{estudio.descripcion}</p>
                                <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                            </MagicCard>

                        </MagicContainer>

                    </SwiperSlide>



                ))
                }


                

            </Swiper>


        </motion.div>
    )

}

export default Estudioscarrusel