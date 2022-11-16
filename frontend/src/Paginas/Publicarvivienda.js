import React from "react";
import Menusin from '../componentes/menusin';
import Publicarvivienda from '../componentes/publicarvivienda';
import Piedepagina2 from "../componentes/piedepagina2";

function Publicarvi(){
    return(
        <div className="Registro">
               <Menusin/>
               <Publicarvivienda/>
               <Piedepagina2/>
        </div>

    );

}
export default Publicarvi;