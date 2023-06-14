import { Link } from "react-router-dom";
const { Component } = require("react");

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
		const comics = sessionStorage.getItem("comics");

		if(!comics){
			let comicsArray = [];
			sessionStorage.setItem("comics", JSON.stringify(comicsArray));
		}

	}

	handleChange = (e) => {
		const {name, value} = e.target;
		this.setState({[name]: value});
	}
	handleSubmit = (e) => {
		e.preventDefault();
		const values = this.state;
		console.log(values);
		const newComic = {...values};
		console.log(newComic);

		let arrayNuevo = JSON.parse(sessionStorage.getItem("comics"));

		arrayNuevo.push(newComic);

		sessionStorage.setItem("comics", JSON.stringify(arrayNuevo));
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