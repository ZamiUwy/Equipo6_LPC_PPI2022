import React from "react";
import MenuL from '../componentes/menuL';
import InicioL from '../componentes/inicioL';
import Piedepagina2 from '../componentes/piedepagina2';


function HomeL(){
    return(
        <div className="inicioL">
               <MenuL/>
               <InicioL/>
               <Piedepagina2/> 
        </div>

    );

}
export default HomeL;