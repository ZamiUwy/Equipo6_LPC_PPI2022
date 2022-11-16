import React from "react";
import { Link } from 'react-router-dom';
import '../Estilos/index.css';


function Publicarvivienda(){
    return(
      <div className="fondo">         
      <div className="row pt-4"> 

           <div className="container pt-3 pb-7 "> 
             <div className="mx-auto" style={{maxWidth:"700px"}}> 

       <div class="card text-center" > 
       <div className="letra2"> 
             ¡Gracias por elegirnos! 
      </div>
      <div className="letra3"> 
             Por favor llena el formulario 
      </div> 

              <div class="card-body"> 
            <form class="row g-3"> 
                <div class="col-md-4"> 
                      <label for="exampleInputEmail1" class="form-label"></label> 
                      <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Nombre"/> 
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
                         <input type="email" class="form-control" id="exampleInputEmail1"placeholder="Tipo de inmueble" /> 
                         <div id="emailHelp" class="form-text"></div> 
                </div> 

                   <div class="col-md-5"> 
                        <label for="exampleInputPassword1" class="form-label"></label> 
                        <input type="password" class="form-control" id="exampleInputPassword1"placeholder="Venta o arriendo"/> 
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
                        <input type="password" class="form-control" id="exampleInputPassword1"placeholder="Estrato"/> 
                  </div> 

                  <div class="col-md-5"> 
                        <label for="exampleInputPassword1" class="form-label"></label> 
                        <input type="password" class="form-control" id="exampleInputPassword1"placeholder="Cantidad de baños"/> 
                  </div> 

                  <div class="col-md-5"> 
                        <label for="exampleInputPassword1" class="form-label"></label> 
                        <input type="password" class="form-control" id="exampleInputPassword1"placeholder="Cantidad de habitaciones"/> 
                  </div> 

                  <div class="mb-1"> 
                        <label for="exampleInputPassword1" class="form-label"></label> 
                        <input type="password" class="form-control" id="exampleInputPassword1"placeholder="Extra..."/> 
                  </div> 

                  <div class="input-group mb-4">
                     <input type="file" class="form-control" id="inputGroupFile01"  />
                  </div>

                  

              

              <Link to='/HomeL'>
              <div class="d-grid gap-2 col-md-4 col-6 mx-auto pb-3" >
                    <button type="button" class="btn btn-primary">Enviar</button>
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

export default Publicarvivienda;