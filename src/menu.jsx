import React from "react"

import {
    MagicCard,
    MagicContainer,
} from "./components/magicui/magic-card";

function Menuaxel() {

    return (
        <div className="flex justify-center z-50 " >
            <MagicContainer
                className={
                    "menu flex h-full md:h-[500px]  w-full flex-col md:gap-10 lg:h-[40px] lg:flex-row px-3 md:px-0 mb-24 md:mb-10 items-center justify-center"
                }
            >
                <MagicCard
                    borderwidth={3}
                    className="flex md:w-4/12 cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)]  md:p-8 shadow-2xl text-justify">
                    <ul className="flex flex-row gap-10 text-center z-50" >
                        <li>Inicio</li>
                        <li>Proyectos</li>
                        <li>Educacion</li>
                        <li>Acerca de mi</li>
                    </ul>
                    <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                </MagicCard>
            </MagicContainer>
        </div>
    )

}

export default Menuaxel