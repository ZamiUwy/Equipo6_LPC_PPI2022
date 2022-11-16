import React from "react";
import Menusin from '../componentes/menusin';
import Pagosdevivienda from '../componentes/pagosdevivienda';
import Piedepagina2 from '../componentes/piedepagina2';


function Pagosdevi(){
    return(
        
        <div className="pagos">
               <Menusin/>
               <Pagosdevivienda/>
               <Piedepagina2/> 
        </div>

    );

}
export default Pagosdevi;