import React from "react";
import { Link } from 'react-router-dom';
import '../Estilos/index.css';
import otro from '../Imagenes/otro.PNG';
import Baño from '../Imagenes/Baño.jpg';
import doscamas from '../Imagenes/doscamas.jpg';
import sencilla from '../Imagenes/sencilla.jpg';
import cocina from '../Imagenes/cocina.jpg';

function house6(){
    return(
        <div className="fondo1 pt-3">
        <div classNameName="fondo col-17" style={{ backgroundcolor: "#D933FF" }}>
        
        <div className="pt-4">
          <h1 className="letra3 text-center">Código:06</h1>
        </div>
                       <div className="fondo1 col-14">
                       <div className="caja row pt-4 col-md-6">
              <div className="mx-auto" id="cursos" style={{maxWidth: "500px"}}>
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                      <div class="card">
                        <img src={otro} class="card-img-top img-fluid cards" alt="..." />
                      </div>
        
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <div class="card">
                        <img src={Baño} class="card-img-top img-fluid cards" alt="..." />
                      </div>
                    </div>
                  
                    <div class="carousel-item" data-bs-interval="2000">
                      <div class="card">
                        <img src={sencilla} class="card-img-top img-fluid cards" alt="..." />
                      </div>
                    </div>
                    
                    
                    <div class="carousel-item">
                      <div class="card">
                        <img src={doscamas} class="card-img-top img-fluid cards" alt="..." />
                      </div>
                    </div>

                    <div class="carousel-item">
                      <div class="card">
                        <img src={cocina} class="card-img-top img-fluid cards" alt="..." />
                      </div>
                    </div>

                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
        
              </div>
              
              </div>
        


              <div class="fondo1 row row-cols-1 row-cols-md-4">
        
        <div class="caja pt-3">
        <div class="card h-100 ">
        <div class="card-body ">
                     <h5 class="card-title"><strong>En arriendo</strong></h5>
                     <p class="card-text">Habitaciones: 3</p>
                     <p class="card-text">Baños: 2</p>
                     <p class="card-text">Medidas: 55.2 m2</p>
                     <p class="card-text">Estrato: 3</p>
                     <p class="card-text">Tipo de propiedad: Apartamento</p>
                     <h5 class="card-title"><strong>Ubicada en:</strong>San javier-calle 8</h5>
                     <h5 class="card-title"><strong>Valor: $800.000</strong></h5>
             </div>
        </div>
        </div>

        <div class="caja pt-3">
        <div class="card h-100 ">
        <div class="card-body ">
                    
                    <div class="col pt-3">
                        <input type="text" class="form-control" placeholder="Nombre" aria-label="First name"/>
                   </div>
                   <div class="col pt-3">
                        <input type="text" class="form-control" placeholder="Celular" aria-label="First name"/>
                   </div>
                   <div class="col pt-3">
                        <input type="text" class="form-control" placeholder="Correo electrónico" aria-label="First name"/>
                   </div>
                   <div class="col pt-3">
                        <input type="text" class="form-control" placeholder="Me interesa, porque..." aria-label="First name"/>
                   </div>
                    
                     <div class="col pt-4">
                     <Link to="/HomeL" class="btn btn-primary">Conocer más</Link>
                     </div>
             </div>
        </div>
        </div>
        
        <div class="caja pt-3">
        <div class="card h-100">
        
        <div class="card-body">
          <h5 class="card-title"> <strong>Extra</strong></h5>
          <p class="card-text">Te ofrecemos un lindo apartamento que tiene 2 baños,cocina, un balcón amplio,sala comedor,ubicado en el 6to piso, ubicado al frente un supermercado, con estacionamiento privado. </p>
        </div>
        </div>
        </div>
      
        </div>
                       </div>
        
                       
        
        </div>
        
             </div>
    );
}

export default house6;