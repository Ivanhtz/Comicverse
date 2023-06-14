import { Link } from "react-router-dom";
import React, { Component } from 'react';

class ComicsBack extends Component {

	constructor(props){
		super(props);

		this.state = {
			titulo: "",
			imagen: "",
			contenido: "",
			autor: "",
		};
	}

	componentDidMount() {
		const comics = localStorage.getItem("comics");

		if(!comics){
			let comicsArray = [];
			localStorage.setItem("comics", JSON.stringify(comicsArray));
		}

		// if (comics) {
		// 	this.setState({ newsArray: JSON.parse(comics) });
		//   }

	}

	handleChange = (e) => {
		const {name, value} = e.target;
		this.setState({[name]: value});
	}
	handleSubmit = (e) => {
		e.preventDefault();
		//Crea el objeto
		const newComic = this.state
		console.log(newComic);

		//Me devuelve el array
		let arrayNuevo = JSON.parse(localStorage.getItem("comics"));

		//Comprobacion
		if(!arrayNuevo){
			arrayNuevo=[]
		}

		//Esto es la adicion
		const arrayUpdateado=[...arrayNuevo,newComic]

		this.setState({
            titulo: '',
            imagen: '',
            contenido: '',
            autor: ''
        });


		localStorage.setItem("comics", JSON.stringify(arrayUpdateado));
	}

    render() {

		const {titulo, imagen, contenido, autor} = this.state;

        return (
            <section id="comic">
                <header>
                    <h1>Lista de Comics</h1>
                </header>
				<main>
				<form onSubmit={this.handleSubmit}>
					<p>
						<label> Título:
							<input type="text" value= {titulo} name="titulo"
							onChange={this.handleChange}></input>
						</label>
					</p>
					<p>
						<label> Imagen:
							<input type="url" value= {imagen} name="imagen"
							onChange={this.handleChange}></input>
						</label>
					</p>
					<p>
						<label> Contenido:
							<input type="text" value= {contenido} name="contenido"
							onChange={this.handleChange}></input>
						</label>
					</p>
					<p>
						<label> Autor:
							<input type="text" value= {autor} name="autor"
							onChange={this.handleChange}></input>
						</label>
					</p>
					<p>
						<button type="submit">Enviar</button>
					</p>
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