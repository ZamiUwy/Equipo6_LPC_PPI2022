import React from "react";
import { Link } from 'react-router-dom';
import '../Estilos/index.css';
import icono from '../Imagenes/icono.webp';
function PerfilL(){
    return(
       
        <div className="fondo">         
      <div className="row pt-4"> 

           <div className="container pt-3 pb-7 "> 
             <div className="mx-auto" style={{maxWidth:"700px"}}> 

       <div class="card text-center" > 
       <div className="letra2"> 
             Código 
      </div>
      <div className="letra3"> 
        003
      </div> 

              <div class="card-body"> 
            <form class="row g-3"> 
             <img src={icono} alt="avatar" class="rounded-circle img-fluid" style={{width: "150px"}}/> 
                <h5 class="my-3">...</h5> 
                 <p class="text-muted mb-1">Información personal</p> 
                 <hr/>

                  <div class="d-flex justify-content-center mb-1"> 
                    <p className="nose"><strong>Nombre completo:</strong>... </p>
                    <hr/>
                         </div>

                         <div class="d-flex justify-content-center mb-1"> 
                    <p className="nose"><strong>Telefóno:</strong>...</p>
                    <hr/>
                         </div>

                         <div class="d-flex justify-content-center mb-1"> 
                    <p className="nose"><strong>Correo eletrónico:</strong>...</p>
                    <hr/>
                         </div>

                         <div class="d-flex justify-content-center mb-1"> 
                    <p className="nose"><strong>Lugar de residencia:</strong>...</p>
                    <hr/>
                         </div>

                         <div class="d-flex justify-content-center mb-1"> 
                    <p className="nose"><strong>Descripción:</strong>...</p>
                    <hr/>
                         </div>
<hr/>

<p class="text-muted mb-1">Información sobre propiedades</p> 
             <div class="d-flex justify-content-center mb-1"> 
                    <p className="nose"><strong>Propiedades arrendadas:</strong>...</p>
                    <hr/>
                         </div>

                         <div class="d-flex justify-content-center mb-1"> 
                    <p className="nose"><strong>Propiedades publicadas:</strong>...</p>
                    <hr/>
                         </div>
                             </form>        
                         </div> 
                     </div> 
                 </div> 
            </div> 
        
        
        </div> 

        
    </div> 

 
    );
}

export default PerfilL;