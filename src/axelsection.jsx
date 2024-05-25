import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "./ListboxWrapper";
import Player1 from "./musicplayer";
import VideoCard from "./mapvideo";
import mapvideo from "./assets/map.webm"
import axelphoto from "./assets/axel.png"
import photo1 from "./assets/fotos/1.jpg"
import photo2 from "./assets/fotos/2.jpg"
import photo3 from "./assets/fotos/3.jpg"
import photo4 from "./assets/fotos/4.jpg"
import photo5 from "./assets/fotos/5.jpg"
import photo6 from "./assets/fotos/6.jpg"
import photo7 from "./assets/fotos/7.jpg"


import emoji from "./assets/memoji.png"
import callred from "./assets/Phone-Call.png"
import callgreen from "./assets/Phone-Call-green.png"

import contacticon from "./assets/contact.svg"

import DateTimeComponent from './datetimecomponent';


function Axelsection() {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-8 md:gap-8 md:p-10 ">
                    <div className=" col-span-1 px-6 md:px-0 md:col-span-4">
                        <Card className=" bg-white/10 text-zinc-1000 h-full  hover:-translate-y-1 hover:scale-102  duration-600 glass justify-center items-center">
                            <CardHeader className=" flex-col md:items-start px-10 pt-10">
                                <h2 className=" text-center text-5xl md:text-left md:text-3xl font-bold">Hoobies </h2>
                            </CardHeader>
                            <CardBody className="overflow-visible px-14 md:pl-20 pt-1 pb-10">
                                <ul className="list-disc text-lg	">
                                    <li>Me encanta la musica toco saxofon y bajo</li>
                                    <li>Soy diseñador creativo de varios festivales musicales</li>
                                    <li>Me encanta hacer videos y animaciones</li>
                                    <li>En mis tiempos libres soy fotografo</li>
                                    <li>Hago trading cuando tengo la posibilidad</li>
                                    <li>Disfruto mucho los videojuegos</li>
                                    
                                </ul>

                            </CardBody>

                        </Card>
                    </div>

                    <div className=" col-span-2 px-6 md:px-0 mt-8 md:mt-0">
                        <Card className=" bg-white/10 text-zinc-1000 h-full  hover:-translate-y-1 hover:scale-102  duration-600 glass justify-center items-center axelphoto h-96 md:h-80">

                        </Card>
                    </div>

                    <div className=" col-span-2 col-span-2 px-6 md:px-0 mt-8 md:mt-0 mb-6 md:mb-0 ">

                        <Swiper
                            spaceBetween={0}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={false}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper2 h-80"
                        >
                            <SwiperSlide><img src={photo1} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={photo2} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={photo3} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={photo4} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={photo5} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={photo6} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={photo7} alt="" /></SwiperSlide>

                        </Swiper>



                    </div>
                </div>
                <div className="grid grid-cols-1 p-4 md:grid-cols-8 md:gap-8 md:p-10 md:pt-1">
                    <div className=" col-span-2">
                        <Card className=" bg-white/10 text-zinc-1000 h-full  hover:-translate-y-1 hover:scale-102  duration-600 glass justify-center items-center">
                            <CardHeader className=" flex-col px-10 pb-0 text-center">
                                <h3 className="text-xl font-light ">English level</h3>
                            </CardHeader>
                            <CardBody className="overflow-visible text-center -mt-6">
                                <h2 className="text-9xl font-bold">A2</h2>
                            </CardBody>

                        </Card>
                    </div>

                    <div className=" col-span-4">
                        <Card className=" bg-white/10 text-zinc-1000 h-96 mt-8 md:m-0 md:h-full  hover:-translate-y-1 hover:scale-102  duration-600 glass justify-center items-center map">
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
                                <source src={mapvideo} type="video/webm" />{ }</video>

                        </Card>
                    </div>
                    
                    <div className=" col-span-2 mt-5 mb-10 md:mb-0 md:mt-0">                    
                        <div className="   pb-10 aling-center items-center md:absolute  ">
                        <Card className=" bg-white/10 text-zinc-1000 h-full  glass justify-center items-center p-3">
                            <div className="flex flex-row gap-6 items-center">
                                <div className='text-center mb-1'>
                                    <DateTimeComponent/>
                                </div>
                            </div>

                            <div className='bg-black w-100 p-3 rounded-full flex flex-row gap-28 md:gap-12  mt-4 md:mt-2'>
                                <div className='flex flex-row items-center '>
                                    <img src={emoji} alt="" width={40} height={60} />
                                    <div className='pl-3 items-center '>
                                        <p className='text-sm text-white '>Axel M.</p>
                                        <p className='text-xs text-default-500'>Frontend</p>
                                    </div>

                                </div>
                                <div className='flex flex-row gap-2 call mt-0'>
                                    <img className='hover:-translate-y-1 hover:scale-105 duration-700' src={callred} alt="" />
                                    <img className='hover:-translate-y-1 hover:scale-105 duration-700' src={callgreen} alt="" />
                                </div>
                            </div>
                            </Card>
                        </div>

                       
                    </div>
                    

                </div>


            </div>
        </div>
    )
}

export default Axelsection