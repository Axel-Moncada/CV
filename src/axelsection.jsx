import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {
    MagicCard,
    MagicContainer,
} from "./components/magicui/magic-card";


import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "./ListboxWrapper";
import Player1 from "./musicplayer";
import VideoCard from "./mapvideo";
import mapvideo from "./assets/map.webm"
import axelphoto from "./assets/axel.png"
import photo1 from "./assets/fotos/Post1.png"
import photo2 from "./assets/fotos/Post2.png"
import photo3 from "./assets/fotos/Post3.png"
import photo4 from "./assets/fotos/Post4.png"
import photo5 from "./assets/fotos/Post5.png"
import photo6 from "./assets/fotos/Post6.png"
import photo7 from "./assets/fotos/Post7.png"


import emoji from "./assets/memoji.png"
import callred from "./assets/Phone-Call.png"
import callgreen from "./assets/Phone-Call-green.png"



import DateTimeComponent from './datetimecomponent';


function Axelsection() {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-8 md:gap-8 md:p-10 md:pb-0 ">
                    <div



                        className=" col-span-1 px-1 md:px-1 md:px-0 md:col-span-4">
                        <MagicContainer className={
                            "flex h-full md:h-[700px]  w-full flex-col gap-1 lg:h-[320px] lg:flex-row px-8 md:px-0 mb-8 md:mb-10"}>
                            <MagicCard
                                borderwidth={3}
                                className="flex md:w-6/6 p-6 md:p-12 md:pt-11 cursor-pointer flex-col items-start justify-start overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)]  shadow-lg">
                                <h2 className=" text-left text-5xl md:text-left md:text-5xl font-bold mb-4">Mas de mi </h2>
                                <ul className="text-lg md:pl-1 space-y-2">
                                    <li className="transition-all duration-200 hover:translate-x-1 hover:text-orange-400">🎨 Soy diseñador creativo de varios festivales de música</li>
                                    <li className="transition-all duration-200 hover:translate-x-1 hover:text-orange-400">🎷 Músico apasionado, toco saxofón y bajo</li>

                                    <li className="transition-all duration-200 hover:translate-x-1 hover:text-orange-400">📸 En mis tiempos libres soy fotógrafo</li>
                                    <li className="transition-all duration-200 hover:translate-x-1 hover:text-orange-400">💹 Futuro trader del NASDAQ y SP500</li>
                                    <li className="transition-all duration-200 hover:translate-x-1 hover:text-orange-400">🤖 Entusiasta de la IA y su aplicación creativa</li>

                                </ul>

                                <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                            </MagicCard>

                        </MagicContainer>



                    </div>

                    <div className=" col-span-2 px-6 md:px-0 mt-8 md:mt-0">
                        <Card className=" bg-white/10 text-zinc-1000 h-full  hover:-translate-y-1 hover:scale-102  duration-600 glass justify-center items-center axelphoto h-96 md:h-80">

                        </Card>
                    </div>

                    <div className="col-span-2 px-6 md:px-0 mt-8 md:mt-0 mb-6 md:mb-0 relative">
                        {/* Texto flotante sobre el carrusel */}
                        <div className="absolute  transform  bg-black/60 text-white text-sm m-2 px-4 py-2 rounded shadow-lg z-10">
                            Fotos generadas con IA ✨
                        </div>

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
                            className="mySwiper2 h-80 z-0"
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
                        <MagicContainer className={
                            "flex h-full md:h-[700px]  w-full flex-col gap-1 lg:h-[220px] lg:flex-row px-8 md:px-1 mb-8 md:mb-10"}>
                            <MagicCard
                                borderwidth={3}
                                className="relative flex md:w-6/6 p-10 md:p-12 md:pt-8 cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] shadow-lg"
                            >
                                <h3 className="text-xl font-light text-white">English level</h3>
                                <h2 className="text-9xl font-bold text-white">B1</h2>
                                <p className="text-white text-lg italic">En progreso 🚀</p>

                                <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                            </MagicCard>

                        </MagicContainer>



                    </div>

                    <div className=" col-span-4">




                        <Card className=" bg-white/10 text-zinc-1000 h-96 mt-8 md:m-0 md:h-56 hover:-translate-y-1 hover:scale-102  duration-600 glass justify-center items-center map">
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
                                <source src={mapvideo} type="video/webm" />{ }</video>

                        </Card>
                    </div>

                    <div className=" col-span-2 mt-5 mb-10 md:mb-0 md:mt-0">


                        <MagicContainer className={
                            "flex h-full md:h-[700px]  w-full flex-col gap-1 lg:h-[220px] lg:flex-row px-8 md:px-0 mb-8 md:mb-10"}>
                            <MagicCard
                                borderwidth={3}
                                className="flex md:w-6/6 p-10 md:p-4 md:pt-8 cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)]  shadow-lg">
                                <div className="flex flex-row gap-6 items-center">
                                    <div className='text-center mb-1'>
                                        <DateTimeComponent />
                                    </div>
                                </div>

                                <div className='bg-black w-full p-1  md:p-3 rounded-full flex flex-row gap-16 md:gap-10  mt-4 md:mt-2'>
                                    <div className='flex flex-row items-center '>
                                        <img src={emoji} alt="" width={40} height={60} />
                                        <div className='pl-3 items-center '>
                                            <p className='text-sm text-white '>Axel M.</p>
                                            <p className='text-xs text-default-500'>Frontend</p>
                                        </div>

                                    </div>
                                    <div className='flex flex-row gap-2 call mt-0'>
                                        <img className='hover:-translate-y-1 hover:scale-105 duration-700' src={callred} alt="" />

                                        <img
                                            onClick={() => window.open("https://wa.me/573146620066", "_blank")}
                                            className="hover:-translate-y-1 hover:scale-105 duration-700 md:w-full   h-auto md:h-auto"
                                            src={callgreen}
                                            alt="WhatsApp"
                                            width={60}
                                        />

                                    </div>
                                </div>
                                <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                            </MagicCard>

                        </MagicContainer>






                    </div>


                </div>


            </div>
        </div>
    )
}

export default Axelsection