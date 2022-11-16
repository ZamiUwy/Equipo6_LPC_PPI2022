import React from "react";
import Menux from '../componentes/menux';
import Iniciosesion from "../componentes/login";
import Piedepagina2 from "../componentes/piedepagina2";

function Login(){
    return(
        <div className="Login">
               <Menux/>
               <Iniciosesion/>
               <Piedepagina2/>
        </div>

    );

}
export default Login;