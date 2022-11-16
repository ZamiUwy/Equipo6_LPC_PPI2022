import React from "react";
import Menu from '../componentes/menu';
import Portada from '../componentes/portada';
import Piedepagina from "../componentes/piedepagina";
import FormularioRegistro from "../componentes/FormularioRegistro";

function Inicio(){
    return(
        <div className="inicio">
               <Menu/>
               <Portada/>
               <Piedepagina/>
               <FormularioRegistro/>
        </div>

    );

}
export default Inicio;