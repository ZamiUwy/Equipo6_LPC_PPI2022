import React from "react";
// import { Link } from 'react-router-dom';
import Omori from '../Imagenes/Omori.jpg';
import { FaUniversity } from 'react-icons/fa';


function CursosH(){
    return(
            <div className="container pt-5">
               <div class="row row-cols-1 row-cols-md-3 g-4">
                 <div class="col">
                 <div class="card">
                    <img src={Omori} class="card-img-top" alt="..."/>
                  <div class="card-body">
                     <p><small> <FaUniversity/> Harvard University</small></p>
                    <h6 class="card-title"> <strong>Curso full-stack en desarrollo</strong> </h6>
                     <p class="card-text"> <small>  aqui coloco un texto de ejemplo xd, que flojera escrbrir mas...</small></p>
                     
                      </div>
                        </div>
                         </div>
            <div class="col">
               <div class="card">
                  <img src={Omori} class="card-img-top" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                       <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                        </div>
                            </div>
                  <div class="col">
                    <div class="card">
                        <img src={Omori}class="card-img-top" alt="..."/>
                          <div class="card-body">
                             <h5 class="card-title">Card title</h5>
                             <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                           </div>
                                </div>
                 <div class="col">
                    <div class="card">
                       <img src={Omori} class="card-img-top" alt="..."/>
                          <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                             <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                       </div>
                          </div>
                              </div>
                                </div>
       </div>
    );
}

export default CursosH;