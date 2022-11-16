import React from "react";
import { Link } from 'react-router-dom';
import '../Estilos/index.css';
import logo_f from '../Imagenes/logo_f.png';
import logo_w from '../Imagenes/logo_w.png';
import logo_i from '../Imagenes/logo_i.png';
function Piedepagina() {
    return (
       <div className="fondo1">
        <div className="row mx-auto p-5 text-center">
                <div id="copyright">
                    <p><small>Dream House ©-2022 Todos los derechos reservados.</small></p>
                    
                    <div className="row pb-3">

                    <div className ="col-md 4"> <b><img src={logo_f} alt="" /></b></div>
                    <div className ="col-md 4"> <b><img src={logo_w} alt="" /></b></div>
                    <div className ="col-md 4"> <b><img src={logo_i} alt="" /></b></div>

                    </div>
                </div>
            </div>
        
        </div>
        

    );
}
export default Piedepagina;