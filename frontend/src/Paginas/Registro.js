import React from "react";
import Menux from '../componentes/menux';
import Register from '../componentes/registro';
import Piedepagina2 from "../componentes/piedepagina2";

function Registro(){
    return(
        <div className="Registro">
               <Menux/>
               <Register/>
               <Piedepagina2/>
        </div>

    );

}
export default Registro;