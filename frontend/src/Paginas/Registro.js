import React from "react";
import Menux from '../componentes/menux';
import FormularioRegistro from "../componentes/FormularioRegistro";

import Piedepagina2 from "../componentes/piedepagina2";

function Registro(){
    return(
        <div className="Registro">
               <Menux/>
               <FormularioRegistro/>
               <Piedepagina2/>
        </div>

    );

}
export default Registro;