import papanoel from './assets/papanoel.webm';
import imgvideo1 from './assets/videoestatico1.png'
import imgvideo2 from './assets/videoestatico2.png'
import imgvideo3 from './assets/videoestatico3.png'
import imgvideo4 from './assets/videoestatico4.png'
import tesorosOcultos from './assets/tesorosOcultos.webm'
import americadecali from './assets/americadecali.webm'
import heywallet from './assets/heywallet.webm'
import logoreact from "./logos/React-b.svg"
import BOOTSTRAP from "./logos/Bootstrap-b.svg"
import logotailwind from "./logos/Tailwind-b.svg"
import HTML from "./logos/HTML5-B.svg"
import CSS from "./logos/css-b.svg"
import JS from "./logos/JS-B.svg"
import FIGMA from "./logos/FIGMA-B-2.svg"
import ANGULAR from "./logos/Angular-b.svg"
import NODE_JS from "./logos/Node-b.svg"
import PHP from "./logos/PHP-B.svg"
import MYSQL from "./logos/MYSQLSVG-b.svg"
import MONGO_DB from "./logos/mongodb-b.svg"
import logos from "./logos/logossvg"

const dataproyectos = [
    {
        id: 1,
        company: "Banco Unión - Western Union / 2022",
        title: "Giro Aguinaldo Millonario",
        description: "En el año 2022 desarrollé la campaña 'El Giro Aguinaldo Millonario', una propuesta innovadora que combinaba el envío de dinero al exterior mediante Western Union con la emoción de un juego interactivo inspirado en Flappy Bird. La dinámica era simple: cada persona que realizaba un giro obtenía cinco vidas para jugar, y quien lograra la mayor puntuación al cierre de la campaña recibía un premio en efectivo superior a 500 mil pesos colombianos. La campaña fue altamente exitosa, con más de 8.000 participantes y 200 ganadores, generando un fuerte impacto en la marca y en la fidelización de los clientes.",
  features: [
    "🎮 Juego interactivo tipo Flappy Bird integrado a la campaña",
    "💸 Participación mediante el envío de dinero con Western Union",
    "🏆 Premio en efectivo superior a 500.000 pesos para el mejor puntaje",
    "👥 Más de 8.000 participantes y 200 ganadores",
    "📈 Incremento notable en el engagement y recordación de la marca"
  ],tecnologias: {
            HTML,
            CSS,
            JS,
            BOOTSTRAP,
            FIGMA
        },

        video: papanoel,
        img: imgvideo1,
        url: "https://axelmoncada.com/portafolio/giroaguinaldo"
    },
    {
        id: 2,
        company: "Banco Union / 2023",
        title: "Tesoros escondidos - Calendario 2024",
       description: "En colaboración con el equipo de diseño de Banco Unión, creamos el calendario 2024 bajo el concepto 'Tesoros Ocultos de Colombia'. Cada mes destacó un destino turístico poco conocido con su historia, cómo llegar y consejos. Además, incorporamos códigos QR que dirigían a una landing page desarrollada para ampliar la información. El proyecto superó las expectativas con más de 30.000 copias impresas y distribuidas en todo el país, rompiendo con la idea de los calendarios tradicionales.",
  features: [
    "📅 Concepto creativo: 'Tesoros Ocultos de Colombia'",
    "🌍 12 destinos turísticos poco conocidos con historia y consejos",
    "🔗 Códigos QR enlazados a una landing con más información",
    "🖨️ Más de 30.000 copias impresas y distribuidas a nivel nacional",
    "🚀 Innovación frente a los calendarios tradicionales"
  ],
        video: tesorosOcultos,
        img: imgvideo2,
        tecnologias: {
            HTML,
            CSS,
            JS,
            ANGULAR,
            FIGMA
        },
        url: "https://tesoros-colombia.netlify.app/"
    },
    {
        id: 3,
        company: "América de cali / 2021",
        title: "Automatizador de Minuto a Minuto",
        description: "El equipo de comunicaciones del América de Cali necesitaba agilizar el minuto a minuto durante los partidos. Construí una herramienta web que controla en tiempo real el cronómetro del primer y segundo tiempo y genera copys automáticos (con rivales, marcador, emojis y hashtags), listos para copiar y publicar en todas las redes mientras se ve la transmisión online.",
  features: [
    "⏱️ Control del cronómetro en primer y segundo tiempo",
    "📝 Generación automática de copys con rivales y marcador",
    "📲 Inclusión dinámica de emojis y hashtags",
    "📤 Opción de copiar y publicar de inmediato en redes sociales"
  ],
        video: americadecali,
        img: imgvideo3,
        tecnologias: {
            HTML,
            CSS,
            JS,
            PHP,
            MYSQL
        },
        url:"https://axelmoncada.com/portafolio/min-a-min"
    },
    {
        id: 4,
        company: "U. Iberoamericana / 2020",
        title: "HeyWallet",
       description: "Proyecto final de mi certificación Full Stack en la Universidad Iberoamericana: HeyWallet, una billetera digital desarrollada con el stack MEAN (MongoDB, Express, Angular, Node.js). La aplicación permitía gestionar gastos, ahorros e inversiones, incorporando un proceso de activación de cuenta por correo electrónico para mayor seguridad. Este proyecto evidenció mi capacidad para crear aplicaciones web funcionales y seguras enfocadas en el control financiero personal.",
  features: [
    "💻 Desarrollado con el stack MEAN (MongoDB, Express, Angular, Node.js)",
    "💰 Gestión de gastos, ahorros e inversiones",
    "📧 Activación de cuenta mediante correo electrónico para mayor seguridad",
    "🔒 Énfasis en la seguridad y usabilidad de la aplicación",
    "🎓 Proyecto final de certificación Full Stack en la Universidad Iberoamericana"
  ],
        video: heywallet,
        img: imgvideo4,
        tecnologias: {
            HTML,
            CSS,
            JS,
            ANGULAR,
            NODE_JS,
            MONGO_DB
        },
        url: "https://axelmoncada.com/wp-content/uploads/2025/08/pcheywallet.mp4"
    },
];

export default dataproyectos;
