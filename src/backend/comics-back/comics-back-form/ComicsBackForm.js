import { Component } from "react"
import ComicsValidator from "../Validadores/ComicsValidator";

export default class ComicsBackForm extends Component{

	constructor(props){
		super(props);

		this.state = { 
			values: {
				title: "",
				image: "",
				content: "",
				author: "",
			},
			validations: {
				title: "",
				image: "",
				content: "",
				author: ""
			}
		};
	}

	//TODO: mirar esto
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
        const {title, image, content, author} = this.state.values;
        const validations =   {
            title: "",
            image: "",
            content: "",
            author: ""
        }

        validations.title = this.validateTitulo(title);
        validations.image = this.validateUrl(image);
        validations.content = this.validateContenido(content);
        validations.author = this.validateAutor(author);

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

	validateTitulo = (value) => {
        const validatorTitulo = new ComicsValidator(value);
        return validatorTitulo
                    .isNotEmpty("Obligatorio")
					.isShorterThan("El título es demasiado largo. Máximo 15 caracteres.")
                    .result
    }

	validateUrl = (url) => {
        const validatorUrl = new ComicsValidator(url);
        return validatorUrl
                    .isNotEmpty("Obligatorio")
					.isValidUrl("No es una url válida")
                    .result
    }

	
	validateContenido = (url) => {
        const validatorContenido = new ComicsValidator(url);
        return validatorContenido
                    .isNotEmpty("Obligatorio")
                    .result
    }

	validateAutor = (url) => {
        const validatorAutor = new ComicsValidator(url);
        return validatorAutor
                    .isNotEmpty("Obligatorio")
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
		const newComic = this.state.values;

		//Me devuelve el array
		let arrayNuevo = JSON.parse(localStorage.getItem("comics"));

		//Comprobacion
		if(!arrayNuevo){
			arrayNuevo=[];
		}else{
			//cojo valor máximo de un array de ids
			const maxId = Math.max(...arrayNuevo.map((item) => item.id));
			console.log(maxId);
			console.log(...arrayNuevo.map((item) => item.id));
			newComic.id = maxId+1;
		}

		//Esto es la adicion
		const arrayUpdateado= [...arrayNuevo, newComic];

		//Limpio el state y por tanto el formulario
		this.setState({
			values: {
				title: '',
				image: '',
				content: '',
				author: ''
			}
        }); 

		localStorage.setItem("comics", JSON.stringify(arrayUpdateado));
	}

	

    render() {

		const {title, image, content, author} = this.state.values;

		const {
            title: tituloVal,
            image: imagenVal,
            content: contenidoVal,
            author: autorVal
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
							<input type="text" value= {title} name="title"
							onChange={this.handleChange}></input>
						</label>
						<p>{tituloVal}</p>
					</div>
					<div>
						<label> Imagen:
							<input type="text" value= {image} name="image"
							onChange={this.handleChange}></input>
						</label>
						<p>{imagenVal}</p>
					</div>
					<div>
						<label> Contenido:
							<input type="text" value= {content} name="content"
							onChange={this.handleChange}></input>
						</label>
						<p>{contenidoVal}</p>
					</div>
					<div>
						<label> Autor:
							<input type="text" value= {author} name="author"
							onChange={this.handleChange}></input>
						</label>
						<p>{autorVal}</p>
					</div>
					<div>
						<button type="submit">Enviar</button>
					</div>
				</form>
				</main>
            </section>
        )
    }
}