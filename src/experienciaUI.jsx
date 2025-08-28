import { MagicCard, MagicContainer } from "./components/magicui/magic-card";

import { motion } from "framer-motion";

export function ExperienciaUI() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="z-0"
    >
      <h1 className="text-center text-4xl font-extrabold mt-16 mb-16">
        Experiencia
      </h1>
      <MagicContainer
        className={
          "flex h-full md:h-[600px]  w-full flex-col gap-8 md:gap-10 lg:h-[400px] lg:flex-row px-8 md:px-1 mb-24 md:mb-10"
        }
      >
        <MagicCard
          borderWidth={3}
          className="flex md:w-2/6 cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)]  shadow-2xl"
        >
          <h3 className="text-8xl font-black">2025</h3>
          <h3 className="text-8xl font-black -mt-5">2022</h3>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] py-10 md:py-20 px-5 md:px-10 shadow-2xl">
          <div>
            <div>
    <div class="text-left w-full mb-5">
        <p class="text-lg font-light">Banco Unión</p>
        <p class="text-2xl font-bold">Diseñador Web 💻 | Septiembre 2022 - Presente</p>
    </div>
    <div class="font-light text-left text-base">
        <p>Como diseñador web, lidero el ciclo de vida del diseño y desarrollo de la plataforma principal de Banco Unión. Mi enfoque es crear experiencias de usuario (UX) atractivas y de alto rendimiento que impulsen los objetivos de negocio. ✨</p>
        <ul class="mt-4 list-none list-inside">
            <li className="mb-2"> ✅<strong>Desarrollo</strong> y mantengo la página web principal, <strong>mejorando</strong> la experiencia de usuario y garantizando su accesibilidad en múltiples dispositivos (HTML, CSS y JavaScript). ⚙️</li>
            <li className="mb-2"> ✅<strong>Colaboro</strong> de forma estratégica con los equipos de marketing y tecnología, <strong>lanzando más de 15 campañas</strong> digitales exitosas. 🤝</li>
            <li className="mb-2"> ✅<strong>Optimizo</strong> la interfaz de usuario (UI) de las campañas, <strong>incrementando la tasa de conversión y el compromiso</strong> de los clientes. 📈</li>
            <li className="mb-2"> ✅<strong>Contribuyo</strong> en la producción de contenido multimedia y <strong>diseñé correos electrónicos</strong> codificados para fortalecer las iniciativas de comunicación de la empresa. 📹</li>
        </ul>
    </div>
</div>
            
          </div>

          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
      </MagicContainer>

      <MagicContainer
        className={
          "flex h-full md:h-[500px]  w-full flex-col gap-10 lg:h-[400px] lg:flex-row px-8 md:px-1 mb-24 md:mb-10 flex-col-reverse  "
        }
      >
        <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] py-10 md:py-20 px-5 md:px-10 shadow-2xl">
         <div>
    <div class="text-left w-full mb-5">
        <p class="text-lg font-light">América de Cali</p>
        <p class="text-2xl font-bold">Webmaster & Desarrollador Front-End ⚽️ | Abril 2019 - Agosto 2022</p>
    </div>
    <div class="font-light text-left text-base">
        <p>Como Webmaster y Desarrollador Front-End, fui el responsable de la presencia digital del club. Combiné habilidades técnicas y creativas para gestionar la plataforma web y la tienda virtual, impulsando la eficiencia y el crecimiento de la marca. ✨</p>
        <ul class="mt-4 list-none list-inside">
            <li class="mb-2"> ✅ <strong>Supervisé y optimicé</strong> la plataforma de la tienda virtual, <strong>generando ingresos adicionales</strong> y mejorando la experiencia de compra para los aficionados. 💰</li>
            <li class="mb-2"> ✅ <strong>Desarrollé</strong> plataformas internas clave (gestión de comunidades, carnetización y gestión de periodistas) que <strong>mejoraron la eficiencia operativa</strong> en un 30%. 🚀</li>
            
            <li class="mb-2"> ✅ <strong>Garantice</strong> la operatividad y la seguridad de la página web oficial y la tienda virtual, gestionando su contenido y actualizaciones diarias. 🛡️</li>
        </ul>
    </div>
</div>

          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard
          borderWidth={3}
          className="flex md:w-2/6 cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)]  shadow-2xl"
        >
          <h3 className="text-8xl font-black">2022</h3>
          <h3 className="text-8xl font-black -mt-5">2019</h3>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
      </MagicContainer>

      <MagicContainer
        className={
          "flex h-full md:h-[500px]  w-full flex-col gap-10 lg:h-[400px] lg:flex-row px-8 md:px-1 mb-24 md:mb-10"
        }
      >
        <MagicCard
          borderWidth={3}
          className="flex md:w-2/6 cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)]  shadow-2xl"
        >
          <h3 className="text-8xl font-black">2024</h3>
          <h3 className="text-8xl font-black -mt-5">2017</h3>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] py-10 md:py-20 px-5 md:px-10 shadow-2xl">
         <div>
    <div>
    <div class="text-left w-full mb-5">
        <p class="text-lg font-light">Independiente</p>
        <p class="text-2xl font-bold">Consultor Web Freelance 💼 | Desde 2017</p>
    </div>
    <div class="font-light text-left text-base">
        <p>Desde 2017, he colaborado con diversas empresas nacionales e internacionales, incluyendo a clientes de alto perfil como <b> Western Union, Transur S.A. y el Ministerio de Cultura </b>, para crear e implementar soluciones web y graficas que optimizan sus resultados de negocio. Mi enfoque es combinar diseño creativo y desarrollo técnico para entregar productos de alta calidad. ✨</p>
        <ul class="mt-4 list-none list-inside">
            <li class="mb-2"> ✅ <strong>Colaboré con más de 40 empresas</strong>, construyendo numerosas aplicaciones web y e-commerce que mejoraron su presencia digital y generaron ingresos. 💰</li>
            <li class="mb-2"> ✅ <strong>Desarrollé proyectos complejos</strong> utilizando tecnologías front-end modernas como React, Angular, HTML, CSS y JavaScript para asegurar soluciones robustas y escalables. 🚀</li>
            <li class="mb-2"> ✅ <strong>Gestioné el ciclo de vida del proyecto</strong>, desde el diseño gráfico y la planificación UX hasta la implementación y optimización final. 🎨</li>
        </ul>
    </div>
</div>
</div>

          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
      </MagicContainer>
    </motion.div>
  );
}
