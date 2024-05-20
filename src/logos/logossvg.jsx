import React, { useContext } from "react"
import { Tooltip, Button } from "@nextui-org/react";
import { ThemeContext } from "../contexts/themecontexts";

function logos () {

    const { theme } = useContext(ThemeContext);
  
    const md = "30px"
    const lg = "40px"
    const xl = "50px"

    if (theme === "dark") {
        fill = "white"
    }

const logos = {
    HTML: <Tooltip showArrow={true} color={"primary"} content="HTML5">
    <svg id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.75 32.2" fill={fill} width={md}>
        <g id="Capa_1-2" data-name="Capa 1">
            <path class="cls-1" d="M28.57.23c-.13-.14-.32-.23-.52-.23H.7c-.2,0-.39.08-.52.23C.05.37-.02.57,0,.76l2.46,27.6c.02.29.23.53.51.61l11.21,3.2c.06.02.13.03.19.03s.13,0,.19-.03l11.22-3.2c.28-.08.48-.32.51-.61L28.75.76c.02-.2-.05-.39-.18-.54ZM22.67,9.74h-13.17l.31,3.56h12.54l-.94,10.53-7.04,2.13-.07-.02-6.96-2.11-.38-4.29h3.41l.15,1.67,3.89.81,3.82-.81.41-4.51H6.71l-.93-10.36h17.19l-.3,3.4Z" />
        </g>
    </svg>
</Tooltip>
}
   
}

export default logos