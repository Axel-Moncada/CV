import {
    MagicCard,
    MagicContainer,
} from "./components/magicui/magic-card";

import { motion } from "framer-motion";

export function ExperienciaUI() {
    return (
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{once:true}}
        transition={{duration:1}}
        className="z-0">
            <h1 className="text-center text-4xl font-extrabold mt-16 mb-16">Experiencia</h1>
            <MagicContainer
                className={
                    "flex h-full md:h-[500px]  w-full flex-col gap-8 md:gap-10 lg:h-[300px] lg:flex-row px-8 md:px-1 mb-24 md:mb-10"
                }
            >
                <MagicCard
                    borderWidth={3}
                    className="flex md:w-2/6 cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)]  shadow-2xl">
                    <h3 className="text-8xl font-black">2025</h3>
                    <h3 className="text-8xl font-black -mt-5">2022</h3>
                    <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                </MagicCard>
                <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] py-10 md:py-20 px-5 md:px-10 shadow-2xl">
                    <div className="text-left w-full mb-5">
                        <p className="text-lg font-light">Banco Unión</p>
                        <p className="text-3xl font-bold">Diseñador web</p>
                    </div>
                    <p className="font-light text-left">Desde septiembre de 2022, soy Diseñador Web en Banco Unión, donde diseño y mantengo la pagina web principal, asegurando una experiencia de usuario excepcional. Colaboro con los departamentos de marketing y tecnología para crear experiencias digitales atractivas y gestionar proyectos de diseño web. Utilizo HTML, CSS y JavaScript para desarrollar sitios web receptivos. He lanzado más de 15 campañas de marketing, optimizando la interfaz de usuario y mejorando la conversión. También apoyo al equipo de diseño gráfico, diseño y codifico correos electrónicos, y contribuyo a la producción de videos para las iniciativas de la empresa.</p>

                    <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                </MagicCard>
            </MagicContainer>


            <MagicContainer
                className={
                    "flex h-full md:h-[500px]  w-full flex-col gap-10 lg:h-[300px] lg:flex-row px-8 md:px-1 mb-24 md:mb-10 flex-col-reverse  "
                }
            >

                <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] py-10 md:py-20 px-5 md:px-10 shadow-2xl">
                    <div className="text-left w-full mb-5">
                        <p className="text-lg font-light">América de cali</p>
                        <p className="text-3xl font-bold">Webmaster</p>
                    </div>
                    <p className="font-light text-left">Durante mi tiempo como Webmaster y Desarrollador Front-End en América de Cali, de abril de 2019 a agosto de 2022, gestioné la página web oficial y la tienda virtual, asegurando su operatividad y actualización. Colaboré con el equipo de comunicaciones para crear materiales gráficos y audiovisuales para campañas de marketing, y desarrollé plataformas internas que mejoraron la eficiencia operativa, incluyendo sistemas de gestión de comunidades, carnetización, y gestión de periodistas. Supervisé la tienda virtual optimizando su plataforma generando ingresos adicionales, combinando habilidades técnicas y creativas para una presencia digital robusta y atractiva.</p>

                    <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                </MagicCard>
                <MagicCard
                    borderWidth={3}
                    className="flex md:w-2/6 cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)]  shadow-2xl">
                    <h3 className="text-8xl font-black">2022</h3>
                    <h3 className="text-8xl font-black -mt-5">2019</h3>
                    <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                </MagicCard>




            </MagicContainer>

            <MagicContainer
                className={
                    "flex h-full md:h-[500px]  w-full flex-col gap-10 lg:h-[300px] lg:flex-row px-8 md:px-1 mb-24 md:mb-10"
                }
            >
                <MagicCard
                    borderWidth={3}
                    className="flex md:w-2/6 cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)]  shadow-2xl">
                    <h3 className="text-8xl font-black">2024</h3>
                    <h3 className="text-8xl font-black -mt-5">2017</h3>
                    <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                </MagicCard>
                <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] py-10 md:py-20 px-5 md:px-10 shadow-2xl">
                    <div className="text-left w-full mb-5">
                        <p className="text-lg font-light">Independiente</p>
                        <p className="text-3xl font-bold">Diseñador creativo</p>
                    </div>
                    <p className="font-light text-left">Desde 2017, he trabajado como freelancer con diversas empresas nacionales e internacionales en la creación e implementación de soluciones web para optimizar sus resultados. He colaborado con más de 40 empresas, construyendo numerosos ecommerces y aplicaciones web utilizando tecnologías front-end como React, HTML, CSS, JavaScript y Angular. Entre los clientes más relevantes se encuentran Transur S.A., Western Union, Fundación Adrián Ramos, Fundación Canto por la Vida, Festival Bandola, Festival mono nuñez y el Ministerio de Cultura. Mi trabajo ha abarcado desde el diseño grafico y desarrollo de sitios web hasta la optimización de experiencias de usuario, asegurando siempre resultados eficaces y de alta calidad.</p>

                    <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                </MagicCard>
            </MagicContainer>









        </motion.div>
    );

}