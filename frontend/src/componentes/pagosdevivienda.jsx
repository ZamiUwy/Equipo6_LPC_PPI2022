import React from "react";
import '../Estilos/index.css';
import { Link } from 'react-router-dom';

function Pagosdevivienda(){
    return(
      <div className="fondo">         
      <div className="row pt-4"> 

           <div className="container pt-3 pb-7 "> 
             <div className="mx-auto" style={{maxWidth:"700px"}}> 

       <div class="card text-center" > 
       <div className="letra2"> 
             ¡Pagos de vivienda! 
      </div>

              <div class="card-body"> 
            <form class="row g-3"> 
                <div class="col-md-4"> 
                      <label for="exampleInputEmail1" class="form-label"></label> 
                      <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Código de propiedad"/> 
                      <div id="emailHelp" class="form-text"></div> 
                </div> 
        
              <div class="col-md-4"> 
                       <label for="exampleInputEmail1" class="form-label"></label> 
                       <input type="email" class="form-control" id="exampleInputEmail1" placeholder="telefono"/> 
                       <div id="emailHelp" class="form-text"></div> 
                             
               </div> 

               <div class="mb-1"> 
                       <label for="exampleInputEmail1" class="form-label"></label> 
                       <input type="email" class="form-control" id="exampleInputEmail1"placeholder="Correo electrónico" /> 
                       <div id="emailHelp" class="form-text"></div> 
               </div> 

                    <div class="col-md-5"> 
                        <label for="exampleInputEmail1" class="form-label"></label> 
                         <input type="email" class="form-control" id="exampleInputEmail1"placeholder="Documento" /> 
                         <div id="emailHelp" class="form-text"></div> 
                </div> 

                   <div class="col-md-5"> 
                        <label for="exampleInputPassword1" class="form-label"></label> 
                        <input type="password" class="form-control" id="exampleInputPassword1"placeholder="Valor"/> 
                  </div> 

                  <div class="mb-1"> 
                        <label for="exampleInputPassword1" class="form-label"></label> 
                        <input type="password" class="form-control" id="exampleInputPassword1"placeholder="Dirección especifica/zoan/barrio"/> 
                  </div> 

                  <div class="col-md-5"> 
                        <label for="exampleInputPassword1" class="form-label"></label> 
                        <input type="password" class="form-control" id="exampleInputPassword1"placeholder="Valor"/> 
                  </div> 

                  <div class="col-md-5"> 
                        <label for="exampleInputPassword1" class="form-label"></label> 
                        <input type="password" class="form-control" id="exampleInputPassword1"placeholder="Numero de tarjeta"/> 
                  </div> 

                  <div class="col-md-5"> 
                        <label for="exampleInputPassword1" class="form-label"></label> 
                        <input type="password" class="form-control" id="exampleInputPassword1"placeholder="Año de expedición"/> 
                  </div> 

                  

                  <Link to='/HomeL'>
                  <div class="d-grid gap-2 col-md-4 col-6 mx-auto pb-3" >
                  <button class="btn btn-success" type="button">
                    Pagar
                    </button>
                  </div>
                    </Link>

                             </form>        
                         </div> 
                     </div> 
                 </div> 
            </div> 
        </div> 
    </div> 
    );
}

export default Pagosdevivienda; 