import React from "react";
import Menu from '../componentes/menu';
import Portada from '../componentes/portada';
import Piedepagina from "../componentes/piedepagina";

function Inicio(){
    return(
        <div className="inicio">
               <Menu/>
               <Portada/>
               <Piedepagina/>
               
        </div>

    );

}
export default Inicio;