import React from "react";
import Menusin from '../componentes/menusin';
import Filtro from "../componentes/filtro";
import Piedepagina2 from "../componentes/piedepagina2";

function Filtrador(){
    return(
        <div className="Login">
               <Menusin/>
               <Filtro/>
               <Piedepagina2/>
        </div>

    );

}
export default Filtrador;