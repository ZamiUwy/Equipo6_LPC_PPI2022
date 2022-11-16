import React from "react";
import casa from '../Imagenes/casa.PNG';
import { Link } from 'react-router-dom';
import '../Estilos/index.css';

function portada(){
    return(
      <div className="fondo1">        
      <div className="row pt-5">
      <img src={casa} alt="" className="mx-auto py-5" style={{maxWidth:"400px"}}/>

        <div className="container text-center">
             <div className="mx-auto">
              <p className="text center"> Empieza a buscar la casa de tus sueños o encuentra al comprador prefecto con nosotros.</p>
          </div>
        </div>
        <Link to="/Login">
             <div class="d-grid gap-2 col-md-4 col-6 mx-auto pb-3" >
                 <button class="btn btn-primary" type="button">
                   <Link to='Login' className="text" style={{color:"white"}}> Iniciar sesión</Link>
                   </button>
             </div>
        </Link>
        <Link to="/Registro">
             <div class="d-grid gap-2 col-md-4 col-6 mx-auto pb-1" >
                 <button class="btn btn-primary" type="button">
                   <Link to='/Registro' className="text" style={{color:"white"}}>Registrarme</Link>
                   </button>
             </div>
        </Link>
           
      </div>     
      
     </div>
        
       
      
    );
}

export default portada;