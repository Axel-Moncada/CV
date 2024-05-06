import papanoel from './assets/papanoel.gif';
import imgvideo1 from './assets/videoestatico1.png'
import imgvideo2 from './assets/videoestatico2.png'
import tesorosOcultos from './assets/tesorosOcultos.gif'
import logoreact from "./logos/React-b.svg"
import logoangular from "./logos/Angular-b.svg"
import BOOTSTRAP from "./logos/Bootstrap-b.svg"
import logonode from "./logos/Node-b.svg"
import logotailwind from "./logos/Tailwind-b.svg"
import HTML from "./logos/HTML5-B.svg"
import CSS from "./logos/css-b.svg"
import JS from "./logos/JS-B.svg"
import FIGMA from "./logos/FIGMA-B-2.svg"
import ANGULAR from "./logos/Angular-b.svg"
import PHP from "./logos/PHP-B.svg"
import MYSQL from "./logos/MYSQLSVG-b.svg"

const dataproyectos = [
    {
        id: 1,
        company: "Banco Unión - Western Union / 2022",
        title: "Giro Aguinaldo Millonario",
        description: "En el año 2022, realice la campaña 'El Giro Aguinaldo Millonario', una iniciativa innovadora que fusionaba la acción de enviar dinero al exterior a través de Western Union con la emoción de participar en un juego interactivo similar a Flappy Bird. La mecánica era sencilla: cada persona que realizara un envío de dinero tenía la oportunidad de jugar al juego con cinco vidas. Aquel participante que lograra la puntuación más alta al final del periodo de la campaña, se hacía merecedor de un premio en efectivo superior a los 500 mil pesos colombianos. Fue una campaña exitosa se lograron mas de 8mil participantes y 200 ganadores generando un gran impacto a la empresa",
        tecnologias: {
            HTML,
            CSS,
            JS,
            BOOTSTRAP,
            FIGMA
        },

        video: papanoel,
        img: imgvideo1
    },
    {
        id: 2,
        company: "Banco Union / 2023",
        title: "Tesoros escondidos - Calendario 2024",
        description: "Trabajé con el equipo de diseño gráfico en el calendario 2024 de Banco Unión, con el objetivo de crear un calendario único y útil para los clientes. Surgió el proyecto 'Tesoros Ocultos de Colombia', un calendario que destaca 12 destinos turísticos poco conocidos en el país, cada uno con su historia, cómo llegar y consejos. Cada mes presenta un destino y tiene un QR que dirige a más información en una landing que desarrollé. El proyecto superó las expectativas al imprimir y distribuir más de 30 mil copias en todo el país, rompiendo con la idea de los calendarios tradicionales. ",
        video: tesorosOcultos,
        img: imgvideo2,
        tecnologias: {
            HTML,
            CSS,
            JS,
            ANGULAR,
            FIGMA
        },
    },
    {
        id: 3,
        company: "América de cali / 2021",
        title: "Sistema de ingreso al Pascual guerrero",
        description: "El equipo colombiano de futbol América de cali poseía un gran problema y es que todos los empleados podían entrar gratis al estadio, generando un sin fin de problemas, para solucionar dicho inconveniente desarrolle un sistema de carga y visualización de los trabajadores actuales de la plantilla, con el fin de que gestión humana para cada partido subiera un Excel con toda la lista de empleados autorizados para ingresar y el día del partido las personas de seguridad ingresaban a la página y verificaban si podían acceder al estadio o no. ",
        video: tesorosOcultos,
        img: imgvideo2,
        tecnologias: {
            HTML,
            CSS,
            JS,
            PHP,
            MYSQL
        },
    },
];

export default dataproyectos;
