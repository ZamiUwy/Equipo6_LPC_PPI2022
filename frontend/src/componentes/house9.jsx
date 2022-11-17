import React from "react";
import { Link } from 'react-router-dom';
import '../Estilos/index.css';
import casal3 from '../Imagenes/casal3.jpg';
import baño8 from '../Imagenes/baño8.jpg';
import sencilla from '../Imagenes/sencilla.jpg';
import cocina6 from '../Imagenes/cocina6.jpg';

function house9(){
    return(
        <div className="fondo1 pt-3">
        <div classNameName="fondo col-17" style={{ backgroundcolor: "#D933FF" }}>
        
        <div className="pt-4">
          <h1 className="letra3 text-center">Código:09</h1>
        </div>
                       <div className="fondo1 col-14">
                       <div className="caja row pt-4 col-md-6">
              <div className="mx-auto" id="cursos" style={{maxWidth: "500px"}}>
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                      <div class="card">
                        <img src={casal3} class="card-img-top img-fluid cards" alt="..." />
                      </div>
        
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <div class="card">
                        <img src={baño8} class="card-img-top img-fluid cards" alt="..." />
                      </div>
                    </div>
                  
                    <div class="carousel-item" data-bs-interval="2000">
                      <div class="card">
                        <img src={sencilla} class="card-img-top img-fluid cards" alt="..." />
                      </div>
                    </div>
                    
                    
                    

                    <div class="carousel-item">
                      <div class="card">
                        <img src={cocina6} class="card-img-top img-fluid cards" alt="..." />
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
                     <p class="card-text">Habitaciones: 4</p>
                     <p class="card-text">Baños: 3</p>
                     <p class="card-text">Medidas: 100 m2</p>
                     <p class="card-text">Estrato: 3</p>
                     <p class="card-text">Tipo de propiedad: Casa</p>
                     <h5 class="card-title"><strong>Ubicada en:</strong>Laureles-calle 15-casa 50</h5>
                     <h5 class="card-title"><strong>Valor: $750.000</strong></h5>
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
          <p class="card-text">Te ofrecemos una linda casa que tiene 3 baños, 4 habiatciones, cocina, un balcón amplio, sala comedor,ubicado en el poblado, con estacionamiento privado. </p>
        </div>
        </div>
        </div>
      
        </div>
                       </div>
        
                       
        
        </div>
        
             </div>
    );
}

export default house9;