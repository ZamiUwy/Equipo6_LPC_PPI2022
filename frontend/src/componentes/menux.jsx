import React from "react";
import { Link } from 'react-router-dom';
import '../Estilos/index.css';
function Menu() {
    return (
        <div className="container3">

            <div className="row mx-auto p-5">
                <div id="copyright">
                    <h1 className="letra"><strong>Dream House</strong> </h1>
                    <Link to='/'>
                    <button type="button" class="btn btn-dark"> ←</button>
                    </Link>
                    

                </div>
            </div>
        </div>
    );
}

export default Menu;