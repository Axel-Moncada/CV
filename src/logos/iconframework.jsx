import React from "react"
import logoreact from "./React-b.svg"
import logoangular from "./Angular-b.svg"
import logobootstrap from "./Bootstrap-b.svg"
import logonode from "./Node-b.svg"
import logotailwind from "./Tailwind-b.svg"
import {Tooltip} from "@nextui-org/tooltip";

var tamano = 40
function Iconoframework() {

    return (
        <div className="flex iconwhite gap-4 mt-2">
            <Tooltip showArrow={true} color={"primary"} content="React">
                <img src={logoreact} alt="logo-react" width={tamano} />
            </Tooltip>
            <Tooltip showArrow={true} color={"primary"} content="Angular">
                <img src={logoangular} alt="logo-angular" width={tamano - 5} />
            </Tooltip>
            <Tooltip showArrow={true} color={"primary"} content="NodeJS">
                <img src={logonode} alt="logo-nodejs" width={tamano} />
            </Tooltip>
            <Tooltip showArrow={true} color={"primary"} content="Boostrap">
                <img src={logobootstrap} alt="logo-bootstrap" width={tamano} />
            </Tooltip>
            <Tooltip showArrow={true} color={"primary"} content="Tailwind">
                <img src={logotailwind} alt="logo-tailwind" width={tamano} />
            </Tooltip>
        </div>
    )
}

export default Iconoframework