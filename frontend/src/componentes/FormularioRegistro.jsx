import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

class FormularioRegistro extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            datos: [],
            form: {
                Documento: '',
                Nombre_apellido: '',
                telefono: '',
                correo: '',
                direccion_especifica: '',
                contraseña: '',
                
            }
        }
    }

    peticionGet = () => {
        axios.get('http://localhost:4001/api/usuarios')
            .then((response) => {
                this.setState({
                    datos: response.data
                });
            }).catch(error => {
                console.log(error.message);
            })
    }

    peticionPost = async () => {
        delete this.state.form.id;
        await axios.post('http://localhost:4001/api/usuarios', this.state.form)
            .then(response => {
                alert(`Bienvenido`)

            }).catch(error => {
                console.log(error.message);
            })

    }


    handleChange = async (e) => {
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form)
    }



    render() {

        // const datosForm = this.state.form;
        const data = this.state.datos;
        console.log(data)

        return (

            <div className="bg-white col-md-8 order-md-1 container my-5">
                <h1 className="mb-3 text-center">Registro</h1>
                <form className="needs-validation" noValidate="">
                    <div className="row">
                        
                        <div className="col-md-6 mb-3">
                            <label >Documento</label>
                            <input type="text" className="form-control" name="Documento" id="Usuario" placeholder="Documento" required="" onChange={this.handleChange} value={data.Documento}></input>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Nombre_apellido</label>
                            <input type="text" className="form-control" name="Nombre_apellido" id="Usuario" placeholder="Nombre_apellido" required="" onChange={this.handleChange} value={data.Nombre_apellido}></input>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label>telefono</label>
                        <input type="email" className="form-control" name="telefono" id="email" placeholder="you@example.com" onChange={this.handleChange} value={data.telefono}></input>
                    </div>
                    <div className="mb-3">
                        <label>Correo</label>
                        <input type="password" className="form-control" name="Correo" id="Contraseña" onChange={this.handleChange} value={data.Correo}></input>
                    </div>
                    
                    <div className="mb-3">
                        <label>direccion_especifica</label>
                        <input type="text" className="form-control" name="direccion_especifica" id="email" onChange={this.handleChange} value={data.direccion_especifica}></input>
                    </div>
                    <div className="mb-3">
                        <label>Contraseña</label>
                        <input type="text" className="form-control" name="contraseña" id="email" onChange={this.handleChange} value={data.contraseña}></input>
                    </div>
                   
                    <hr className="mb-4"></hr>
                    <Link to="/">
                        <button className="btn btn-outline-primary btn-lg btn-block" type="submit" onClick={() => this.peticionPost()} ><font style={{ marginRight: 'vertical-align: inherit' }} >Registrarme</font></button>
                    </Link>
                </form>
            </div>

        );
    }
}

export default FormularioRegistro;