import { cn } from "./lib/utils";
import Marquee from "./components/magicui/marquee";
import React from "react";

const reviews = [
    {
        name: "Sebastián Núñez Pardo",
        username: "Growth Hacker / Marketing leader ",
        body: "Axel es un excelente trabajador, es una persona que hace más sencillo el trabajo en el día a día. Posee grandes virtudes no solo como profesional sino también como persona.",
        img: "https://media.licdn.com/dms/image/v2/C4E03AQFidmvs3UYPZw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1618187811234?e=1750291200&v=beta&t=c0YokZ8X2Bt0HOLpVzz6mtbaTgtQWoSkmaXetKLF0mc",
    },
    {
        name: "Diana Largo Orozco",
        username: "Jefe de publicidad",
        body: "Axel es una persona muy proactiva y un excelente colaborador en equipo. Su habilidad para abordar los desafíos, encontrar soluciones creativas y trabajar de manera colaborativa lo destacan. Su actitud y su disposición para apoyar a sus colegas hicieron que el entorno de trabajo fuera más positivo y productivo.",
        img: "https://media.licdn.com/dms/image/v2/D4E03AQHM65c1ouaCLA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1669755455399?e=1750291200&v=beta&t=i01OaT0yqT65bx7vY95KDmeRuThhZ4CshNdCapxljgg",
    },
    {
        name: "Santiago Pizano",
        username: "Director de Mercadeo & Patrocinios",
        body: "Axel es un excelente profesional con excelentes capacidades técnicas y de trabajo en equipo. Por su experiencia y conocimiento, tiene la capacidad para aportar valor estratégicamente y operativamente a cualquier departamento de comunicación o mercadeo digital de una empresa.",
        img: "https://media.licdn.com/dms/image/v2/D5603AQE-K7fYa-uFzQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1728573797053?e=1750291200&v=beta&t=E4OttRANNi6MDFoMiOPtVQr5Dz03lYr9S_HPT_yZfl0",
    },
    {
        name: "Lina Fiquitiva",
        username: "Digital marketing | Email marketing | Social Media Manager",
        body: "Axel, es un gran compañero de trabajo. Se destaca por brindar soluciones, ser proactivo, se interesa por apoyar no solo su trabajo si no también el de los demás. Además constantemente busca continuar aprendiendo con cursos y certificaciones.",
        img: "https://media.licdn.com/dms/image/v2/C4E03AQHzo83Wp2jO0A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1601347694380?e=1750291200&v=beta&t=wJ7nlkRbioaw_rKpm9nBF2PA0B18rpbH9aDTlPR8o0E",
    },
    {
        name: "Jhon Dayron Orozco Meneses",
        username: "Desarrollador web en Pontificia Universidad Javeriana Cali",
        body: "Excelente profesional, con unos skills técnicos fuertes, habilidades creativas y crecimiento autodidacta. Es una persona con disposición para la colaboración en el grupo de trabajo y el compartir sus conocimientos. ",
        img: "https://media.licdn.com/dms/image/v2/D4E03AQEslV5usGuAnA/profile-displayphoto-shrink_100_100/B4EZVhx9SXGgAU-/0/1741102241673?e=1750291200&v=beta&t=5UNfqX8LrrUksfvTv5bpA4raNl6IBxk7vWYrDBJfSTQ",
    },
    {
        name: "Laura Campo PotesLaura Campo Potes",
        username: "Comunicaciones | RR.PP | Clima organizacional ",
        body: "Axel, es un excelente profesional y gran ser humano. Comprometido, responsable, creativo y colaborador. Tiene una gran capacidad para el trabajo en equipo y para crear y liderar proyectos novedosos que impactan positivamente a la imagen del club. ",
        img: "https://media.licdn.com/dms/image/v2/D4E03AQErH9Ze53PgFQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1731607883433?e=1750291200&v=beta&t=Bgyp_mUX5M8mbtR4nXsDxJBUClZhc48SBXEi8Mq7cyc",
    },
    {
        name: "Danny Figueroa Ramírez",
        username: "Líder en Publicidad, Mercadeo y Comunicaciones | Experto en Growth Marketing, Inteligencia Artificial y Customer Experience | Especialista en Marketing Estratégico ",
        body: "Tuve el privilegio de trabajar con Axel en el equipo creativo de Banco Unión y puedo decir con certeza que es un profesional excepcional. Tiene un talento increíble y una curiosidad innata que lo impulsan a aprender y mejorar constantemente. Su creatividad y habilidad para resolver problemas destacan en cada campaña. ",
        img: "https://media.licdn.com/dms/image/v2/D4E03AQE77tRZLCHUaw/profile-displayphoto-shrink_100_100/B4EZVHls74HgAc-/0/1740662821125?e=1750291200&v=beta&t=r_Ldu8R0GoMuwiuy01fRQQXm-bMEvxWeP3FEmqsQ8Yg",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}) => {
    return (
        <figure
            className={cn(
                "relative w-96 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] ",
            )}
        >
            <div className=" flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </figure>
    );
};

const Comentarios = () => {
    return (
        <div> <h1 className="text-center text-4xl font-extrabold mt-10 mb-5">Recomendaciones</h1>
        <div className="flex justify-center align-center mt-16 mb-32">
           
            <div className=" flex h-full w-10/12 flex-col items-center justify-center overflow-hidden rounded-lg   py-20 comentarios ">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />

                    ))}
                </Marquee>

                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r "></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l "></div>

            </div>
        </div>
        </div>
    );
};

export default Comentarios;
