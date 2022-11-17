import React from "react";
import { Link } from 'react-router-dom';
import '../Estilos/index.css';
import casitav2 from '../Imagenes/casitav2.PNG';
import edifico from '../Imagenes/edifico.PNG';
import otro from '../Imagenes/otro.PNG';
import '../Estilos/index.css';
import casita5 from '../Imagenes/casita5.jpg';
import casita2 from '../Imagenes/casita2.webp';
import casita3 from '../Imagenes/casita3.jpg';
import casal1 from '../Imagenes/casal1.jpg';
import casal2 from '../Imagenes/casal2.jpg';
import casal3 from '../Imagenes/casal3.jpg';
import casal4 from '../Imagenes/casal4.jpg';
import casal5 from '../Imagenes/casal5.jpg';


function InicioL() {
  return (

    <div className="row pt-3">
      <div classNameName="fondo" style={{ backgroundcolor: "#D933FF" }}>

        <div className="pt-3">
          <h1 className="letra3 text-center"> Agregados recientemente</h1>
        </div>

      </div>
      <div className="fondo row pt-4">
      <div className="mx-auto" id="cursos" style={{maxWidth: "500px"}}>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <div class="card">
                <img src={casitav2} class="card-img-top img-fluid cards" alt="..." />
                <div class="card-body">
                  <h5 class="card-title"> <strong>Código:</strong> 01</h5>
                  <p class="card-text"><strong>Zona:</strong> San Javier</p>

                  <p class="card-text"><strong>Arriendo</strong></p>
                  <Link to="/House" class="btn btn-primary">Conocer más</Link>
                </div>
              </div>

            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <div class="card">
                <img src={edifico} class="card-img-top img-fluid cards" alt="..." />
                <div class="card-body">
                  <h5 class="card-title"> <strong>Código:</strong>02</h5>
                  <p class="card-text"><strong>Zona:</strong>Manrrique</p>

                  <p class="card-text"><strong>Venta</strong></p>
                  <Link to="/House2" class="btn btn-primary">Conocer más</Link>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <div class="card">
                <img src={casita3} class="card-img-top img-fluid cards" alt="..." />
                <div class="card-body">
                  <h5 class="card-title"> <strong>Código</strong>:03</h5>
                  <p class="card-text"><strong>Zona:</strong>Aranjuez</p>

                  <p class="card-text"><strong>Arriendo</strong></p>
                  <Link to="/House3" class="btn btn-primary">Conocer más</Link>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <div class="card">
                <img src={casita2} class="card-img-top img-fluid cards" alt="..." />
                <div class="card-body">
                  <h5 class="card-title"> <strong>Código:</strong>04</h5>
                  <p class="card-text"><strong>Zona:</strong>El picacho</p>

                  <p class="card-text"><strong>Venta</strong></p>
                  <Link to="/House4" class="btn btn-primary">Conocer más</Link>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <div class="card">
                <img src={casita5} class="card-img-top img-fluid cards" alt="..." />
                <div class="card-body">
                  <h5 class="card-title"> <strong>Código:</strong>05</h5>
                  <p class="card-text"><strong>Zona:</strong>San cristóbal</p>

                  <p class="card-text"><strong>Arriendo</strong></p>
                  <Link to="/House5" class="btn btn-primary">Conocer más</Link>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card">
                <img src={otro} class="card-img-top img-fluid cards" alt="..." />
                <div class="card-body">
                  <h5 class="card-title"><strong>Código:</strong>06</h5>
                  <p class="card-text"><strong>Zona:</strong>San Javier</p>
                  <p class="card-text">Sin amoblar</p>

                  <Link to="/House6" class="btn btn-primary">Conocer más</Link>
                </div>
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
      
      <div className="row pt-3">
      <h1 className="letra3 text-center">Inmuebles destacados.</h1>
      </div>

      <div class="fondo1 row row-cols-1 row-cols-md-5 g-10">

  <div class="caja pt-3">
    <div class="card h-100">
      <img src={casal1} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"> <strong>Código:07</strong></h5>
        <p class="card-text">es una casa con dos pisos,tiene parqueadero, tres baños,5 habitaciones,cocina amplia y patio trasero.</p>
        <h5 class="card-title"> <strong> En venta</strong></h5>
        <h5 class="card-title"> <strong>Precio:180.000.000</strong></h5>
        <Link to="/House7" class="btn btn-primary">Conocer más</Link>
      </div>
    </div>
  </div>

  <div class="caja pt-3">
    <div class="card h-100">
      <img src={casal2} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"> <strong>Código:08</strong></h5>
        <p class="card-text">es una casa de un solo piso, tres habitaciones, dos baños, cocina mediana</p>
        <h5 class="card-title"> <strong>En alquiler</strong></h5>
        <h5 class="card-title"> <strong> Precio:600.000</strong></h5>
        <Link to="/House8" class="btn btn-primary">Conocer más</Link>
      </div>
    </div>
  </div>

  <div class="caja pt-3">
    <div class="card h-100">
      <img src={casal3} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"> <strong>Código:09</strong></h5>
        <p class="card-text">Es una casa de dos pisos,4 habitaciones,3 baños, cocina mediana, patio trasero</p>
        <h5 class="card-title"> <strong>En alquiler</strong></h5>
        <h5 class="card-title"> <strong>Precio:750.000</strong></h5>
        <Link to="/House9" class="btn btn-primary">Conocer más</Link>
      </div>
    </div>
  </div>

  <div class="caja pt-3">
    <div class="card h-100">
      <img src={casal4} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"> <strong> Código:10</strong></h5>
        <p class="card-text">Es una casa de dos pisos, 6 habitaciones, 5 baños, cocina mediana,sala amplia,patio trasero</p>
        <h5 class="card-title"><strong>En venta</strong></h5>
        <h5 class="card-title"> <strong>Precio: 167.000.000</strong></h5>
        <Link to="/House10" class="btn btn-primary">Conocer más</Link>
      </div>
    </div>
  </div>

  <div class="caja pt-3">
    <div class="card h-100">
      <img src={casal5} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"> <strong>Código:11</strong></h5>
        <p class="card-text">Es una casa de un piso, dos habitaciones,dos baños,cocina pequeña,amoblada</p>
       <h5 class="card-title">  <strong>En alquiler</strong></h5>
        <h5 class="card-title"> <strong>Precio: 450.000</strong></h5>
        <Link to="/House11" class="btn btn-primary">Conocer más</Link>
      </div>
    </div>
  </div>

  

  <div class="caja pt-3">
    <div class="card h-100">
      <img src={casitav2} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"> <strong>Código:01</strong></h5>
        <p class="card-text">Es un apartamento con dos baños, tres habiataciones, cocina amplia...</p>
        <h5 class="card-title"> <strong> En alquiler</strong></h5>
        <h5 class="card-title"> <strong>Precio:800.000</strong></h5>
        <Link to="/House" class="btn btn-primary">Conocer más</Link>
      </div>
    </div>
  </div>


</div>

    </div>






  );
}

export default InicioL;