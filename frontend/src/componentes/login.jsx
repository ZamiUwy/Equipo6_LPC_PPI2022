import React from "react";
import logosin from '../Imagenes/logosin.png';
import '../Estilos/index.css';


function Iniciosesion() {
  return (
    <div className=" fondo">
      <div className="row ms-0">
        <img src={logosin} alt="" className="mx-auto" style={{ maxWidth: "150px" }} />

        <div className="container pt-4 pb-5 ">
          <div className="mx-auto" style={{ maxWidth: "400px" }}>

            <div class="card text-center" >
              <div className="letra2">
                Bienvenido
              </div>
              <div class="card-body">
                <form action="/HomeL" method="get">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"></label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Correo electrónico" />

                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label"></label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña" />
                  </div>
                 
                  <button type="submit" class="btn btn-primary">Iniciar sesión</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Iniciosesion; 