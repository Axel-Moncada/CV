import React from "react";

import { button, nextui } from "@nextui-org/react";
import Navbaraxel from "./navbar.jsx";
import Heroseccion from "./heroseccion.jsx";
import Aboutme from "./aboutme.jsx";


function Header ({ theme }) {
    return(
        <div className=" dark:bg-neutral-900">
      <Navbaraxel />,
      <Heroseccion />,
      <Aboutme theme={ theme }/>,
      

      </div>
  )
}

export default Header