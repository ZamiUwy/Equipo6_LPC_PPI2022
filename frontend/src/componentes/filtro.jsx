import React from "react";
import { Link } from 'react-router-dom';
import '../Estilos/index.css';
function filtro(){
    return(
      <div className=" fondo">
      <div className="row pt-5">
        <div className="container pt-5 pb-0 ">
          <div className="mx-auto" style={{ maxWidth: "500px" }}>
           <div className="fondo ">
              <div className=" row pt-5">
                <p></p>
              </div>
           </div>
            <div class="card text-center" >
              <div className="letra2">
                Buscar por filtro
              </div>
              <div class="card-body">
                <form action="/HomeL" method="get">
                  
                <div class="form-check pt-2">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                          <label class="form-check-label" for="exampleRadios1">
                            Arriendo
                        </label>
                     </div>
                  <div class="form-check pt-2">
                         <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                           <label class="form-check-label" for="exampleRadios2">
                              Venta
                          </label>
                       </div>

                       <div class="dropdown pt-4">
  <div class="btn btn-secondary dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Zona
  </div>

  <ul class="dropdown-menu">
    <li><div class="dropdown-item" href="#">San Cristobal</div></li>
    <li><div class="dropdown-item" href="#">El popular</div></li>
    <li><div class="dropdown-item" href="#">Manrique</div></li>
    <li><div class="dropdown-item" href="#">Aranjuez</div></li>
    <li><div class="dropdown-item" href="#">Robledo</div></li>
    <li><div class="dropdown-item" href="#">El picacho</div></li>

  </ul>
</div>


           <div class="d-grid gap-2 col-md-4 col-6 mx-auto pb-3 pt-3" >
                 <button type="submit" class="btn btn-primary">Filtrar</button>
             </div>
                
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="fondo ">
              <div className=" row pt-5">
                <p></p>
              </div>
           </div>
    </div>
    );
}

export default filtro;