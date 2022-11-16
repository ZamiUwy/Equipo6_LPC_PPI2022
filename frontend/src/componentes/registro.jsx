import React from "react";
import { Link } from 'react-router-dom';
import '../Estilos/index.css';


function Register(){
    return(
        <div className="fondo">         
           <div className="row pt-4"> 

                <div className="container pt-3 pb-5 "> 
                  <div className="mx-auto" style={{maxWidth:"400px"}}> 

            <div class="card text-center" > 
            <div className="letra2"> 
                  Registro  
           </div> 

                   <div class="card-body"> 
                 <form action="/HomeL" method="get"> 
                     <div class="mb-3"> 
                           <label for="exampleInputEmail1" class="form-label"></label> 
                           <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Nombre y apellido"/> 
                           <div id="emailHelp" class="form-text"></div> 
                     </div> 
             
                   <div class="mb-3"> 
                            <label for="exampleInputEmail1" class="form-label"></label> 
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Correo electrónico"/> 
                            <div id="emailHelp" class="form-text"></div> 
                            
                            
                    </div> 

                    <div class="mb-3"> 
                            <label for="exampleInputEmail1" class="form-label"></label> 
                            <input type="email" class="form-control" id="exampleInputEmail1"placeholder="telefono" /> 
                            <div id="emailHelp" class="form-text"></div> 
                    </div> 

                         <div class="mb-3"> 
                             <label for="exampleInputEmail1" class="form-label"></label> 
                              <input type="email" class="form-control" id="exampleInputEmail1"placeholder="Documento" /> 
                              <div id="emailHelp" class="form-text"></div> 
                     </div> 
                     <div class="mb-3"> 
                             <label for="exampleInputEmail1" class="form-label"></label> 
                              <input type="email" class="form-control" id="exampleInputEmail1"placeholder="Dirección espefica ciudad/país" /> 
                              <div id="emailHelp" class="form-text"></div> 
                     </div>

                        <div class="mb-3"> 
                             <label for="exampleInputPassword1" class="form-label"></label> 
                             <input type="password" class="form-control" id="exampleInputPassword1"placeholder="Contraseña"/> 
                       </div> 

                                    <button type="submit" class="btn btn-primary">Registrar</button> 

                                  </form>        
                              </div> 
                          </div> 
                      </div> 
                 </div> 
             </div> 
         </div> 
   
    );
}

export default Register;