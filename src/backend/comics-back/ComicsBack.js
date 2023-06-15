import React, { Component } from 'react';
import ComicsValidator from "./Validadores/ComicsValidator";

class ComicsBack extends Component {

	constructor(props){
		super(props);

		this.state = { 
			values: {
				titulo: "",
				imagen: "",
				contenido: "",
				autor: "",
			},
			validations: {
				titulo: "",
				imagen: "",
				contenido: "",
				autor: ""
			}
		};
	}

/* 	componentDidMount() {
		const comics = localStorage.getItem("comics");

		if(!comics){
			let comicsArray = [];
			localStorage.setItem("comics", JSON.stringify(comicsArray));
		}

	} */

	handleChange = (e) => {
		const {name, value} = e.target;
		this.setState(
			{
				values:{
                    ...this.state.values,                   
                    [name]:value
                }
			}
		);
	}

	validateAll = () => {
        const {titulo, imagen, contenido, autor} = this.state.values;
        const validations =   {
            titulo: "",
            imagen: "",
            contenido: "",
            autor: ""
        }

        validations.titulo = this.validateEmpty(titulo);
        validations.imagen = this.validateUrl(imagen);
        validations.contenido = this.validateEmpty(contenido);
        validations.autor = this.validateEmpty(autor);

        const mensajesValidacion = Object.values(validations).filter(mensaje => mensaje.length > 0)

        const isValid = !mensajesValidacion.length;

        if(!isValid)
        {
            this.setState({
                validations
            });
        }
        return isValid;
    }

	validateEmpty = (value) => {
        const validatorTitulo = new ComicsValidator(value);
        return validatorTitulo
                    .isNotEmpty("Obligatorio")
                    .result
    }

	validateUrl = (url) => {
        const validatorUrl = new ComicsValidator(url);
        return validatorUrl
                    .isNotEmpty("Obligatorio")
					.isValidUrl("No es una url válida")
                    .result
    }

	handleSubmit = (e) => {
		e.preventDefault();
		
		const isValid = this.validateAll();

        if(!isValid)
        {
            return false;
        }

		//Crea el objeto
		const newComic = this.state;

		//Me devuelve el array
		let arrayNuevo = JSON.parse(localStorage.getItem("comics"));

		//Comprobacion
		if(!arrayNuevo){
			arrayNuevo=[];
		}

		//Esto es la adicion
		const arrayUpdateado= [...arrayNuevo, newComic];

		//Limpio el state y por tanto el formulario
		this.setState({
			values: {
				titulo: '',
				imagen: '',
				contenido: '',
				autor: ''
			}
        }); 

		localStorage.setItem("comics", JSON.stringify(arrayUpdateado));
	}

	

    render() {

		const {titulo, imagen, contenido, autor} = this.state.values;

		const {
            titulo: tituloVal,
            imagen: imagenVal,
            contenido: contenidoVal,
            autor: autorVal
        } = this.state.validations;

        return (
            <section id="comic">
                <header>
                    <h1>Lista de Comics</h1>
                </header>
				<main>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label> Título:
							<input type="text" value= {titulo} name="titulo"
							onChange={this.handleChange}></input>
						</label>
						<p>{tituloVal}</p>
					</div>
					<div>
						<label> Imagen:
							<input type="text" value= {imagen} name="imagen"
							onChange={this.handleChange}></input>
						</label>
						<p>{imagenVal}</p>
					</div>
					<div>
						<label> Contenido:
							<input type="text" value= {contenido} name="contenido"
							onChange={this.handleChange}></input>
						</label>
						<p>{contenidoVal}</p>
					</div>
					<div>
						<label> Autor:
							<input type="text" value= {autor} name="autor"
							onChange={this.handleChange}></input>
						</label>
						<p>{autorVal}</p>
					</div>
					<div>
						<button type="submit">Enviar</button>
					</div>
				</form>
				<ul>
			{/* 		{
						this.arrayComics.map(
							comic => 
							<li>{comic.titulo}</li>
						)
					} */}
				</ul>
				<div>
					<h2>Valores</h2>
					<p>Nombre: {this.state.titulo}</p>
				</div>
				</main>
            </section>
        )
    }
}

export default ComicsBack;