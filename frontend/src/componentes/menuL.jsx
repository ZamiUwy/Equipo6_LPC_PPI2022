import React from "react";
import { Link } from 'react-router-dom';
import '../Estilos/index.css';
function MenuL(){
    return(
       <div classNameName="header">
          <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
              <div className="letra2">
              Dream House 
              </div>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
               <Link className="nav-link active" aria-current="page" to="/HomeL">Inicio</Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link active" to="/perfil">Perfil</Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link active" to="/pagosdevivienda">Pagos de vivienda</Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link active" to="/Publicarvivienda">Publicar vivienda</Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link active" to="/filtro">Filtro</Link>
             </li>
        
             <li className="nav-item">
               <Link className="nav-link active" to="/">Cerrar sesión</Link>
             </li>
             </ul>
      
    </div>
  </div>
</nav>

<div className="buscador">
  <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
      <button className="btn btn-primary btn-primary outline-success" type="submit">Buscar</button>
  </form>
</div>





       </div>
    );
}

export default MenuL;