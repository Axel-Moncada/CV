import { cn } from "../lib/utils";
import AnimatedShinyText from "./magicui/animated-shiny-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";

function BtnHome() {
    return (
        <div className="z-10 flex min-h-[5rem] gap-10 items-center justify-center">
            <div
                className={cn(
                    "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                )}
            >
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                    <a href="#experiencia">
                    <span className="text-2xl px-10">🖱️ Experiencia</span>
                    </a>
                    <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>

                
            </div>

            <div
                className={cn(
                    "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                )}
            >
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                    <a href="#proyectos">
                    <span className="text-2xl px-10">📕 Proyectos</span>
                    </a>
                    <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>

                
            </div>

        </div>
    );
}

export default BtnHome
