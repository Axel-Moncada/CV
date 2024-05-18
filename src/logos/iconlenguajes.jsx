import React from "react";
import {Tooltip} from "@nextui-org/tooltip";
import logoreact from "./React-b.svg"
import logoangular from "./Angular-b.svg"
import BOOTSTRAP from "./Bootstrap-b.svg"
import logonode from "./Node-b.svg"
import logotailwind from "./Tailwind-b.svg"
import html from "./HTML5-B.svg"
import css from "./css-b.svg"
import js from "./JS-B.svg"
import figma from "./FIGMA-B-2.svg"
import angular from "./Angular-b.svg"
import php from "./PHP-B.svg"
import mysql from "./MYSQLSVG-b.svg"
import MONGO_DB from "./mongodb-b.svg"


function Iconlenguajes({theme}) {
    const fillColor = theme === 'dark' ? 'white' : 'black';
    return (

        <div className="flex iconwhite gap-4 mt-2 iconwhite">

            <Tooltip showArrow={true}  color={"primary"} content="HTML5">
               <img src={html} alt="html logo" width={30} fill={fillColor} />
            </Tooltip>


            <Tooltip showArrow={true} color={"primary"} content="CSS3">
                <img src={css} alt="logo-css" width={30} />
            </Tooltip>

            <Tooltip showArrow={true} color={"primary"} content="JavaScript">
            <img src={js} alt="logo-css" width={30} />
            </Tooltip>

            

            <Tooltip showArrow={true} color={"primary"} content="PHP">
           <img src={php} alt="logo-php" width={50} />
            </Tooltip>

            <Tooltip showArrow={true} color={"primary"} content="Mongo DB">
           <img src={MONGO_DB} alt="logo-php" width={30} />
            </Tooltip>

            <Tooltip showArrow={true} color={"primary"} content="Mysql">
            <img className="self-center" src={mysql} width={60} height="auto" />
            </Tooltip>
        </div>



    )
}


export default Iconlenguajes 