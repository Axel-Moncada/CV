import React from "react";

import { button, nextui } from "@nextui-org/react";
import Navbaraxel from "./navbar.jsx";
import Heroseccion from "./heroseccion.jsx";
import Aboutme from "./aboutme.jsx";


function Header () {
    return(
        <div>
      
      <Heroseccion />
      <Aboutme/>
      

      </div>
  )
}

export default Header