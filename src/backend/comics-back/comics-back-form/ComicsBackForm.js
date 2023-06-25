import { useEffect, useState } from "react";
import ComicsValidator from "../Validadores/ComicsValidator";


export default function ComicsBackForm(props) {

	useEffect(() => {
		//hago esto para evitar que me de un warning de uncontrolled component
		//porque de primeras llega el objeto con propiedades nulas
		setValuesComic({
			id: props.comicAEditar.id ?? null,
			title: props.comicAEditar.title ?? "",
			image: props.comicAEditar.image ?? "",
			content: props.comicAEditar.content ?? "",
			author: props.comicAEditar.author ?? "",
		});
	}, [props.comicAEditar])

	//estado para cuando se crea un comic nuevo
	const [valuesComic, setValuesComic] = useState({
		id: null,
		title: "",
		image: "",
		content: "",
		author: "",
	});

	const [validations, setValidations] = useState({
		title: "",
		image: "",
		content: "",
		author: ""
	});


	const handleChange = (e) => {
		const { name, value } = e.target;
		setValuesComic({
			...valuesComic,
			[name]: value
		});
	}

	const validateAll = () => {
		const { title, image, content, author } = valuesComic;
		const validations = {
			title: "",
			image: "",
			content: "",
			author: ""
		}

		validations.title = validateTitulo(title);
		validations.image = validateUrl(image);
		validations.content = validateContenido(content);
		validations.author = validateAutor(author);

		const mensajesValidacion = Object.values(validations).filter(mensaje => mensaje.length > 0)

		const isValid = !mensajesValidacion.length;

		if (!isValid) {
			setValidations({
				validations
			});
		}
		return isValid;
	}

	const validateTitulo = (value) => {
		const validatorTitulo = new ComicsValidator(value);
		return validatorTitulo
			.isNotEmpty("Obligatorio")
			.isShorterThan("El título es demasiado largo. Máximo 15 caracteres.")
			.result
	}

	const validateUrl = (url) => {
		const validatorUrl = new ComicsValidator(url);
		return validatorUrl
			.isNotEmpty("Obligatorio")
			.isValidUrl("No es una url válida")
			.result
	}


	const validateContenido = (url) => {
		const validatorContenido = new ComicsValidator(url);
		return validatorContenido
			.isNotEmpty("Obligatorio")
			.result
	}

	const validateAutor = (url) => {
		const validatorAutor = new ComicsValidator(url);
		return validatorAutor
			.isNotEmpty("Obligatorio")
			.result
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		const isValid = validateAll();

		if (!isValid) {
			return false;
		}

		//Crea el objeto
		const newComic = valuesComic;

		//Limpio el state y por tanto el formulario
		setValuesComic({
			id: null,
			title: '',
			image: '',
			content: '',
			author: ''
		});

		props.handleAddComic(newComic);
	}

	//limpio el estado y envío los datos al método que edita del padre
	const editarComic = () => {
		props.handleEdit(valuesComic.id, valuesComic);
		setValuesComic({
			id: null,
			title: '',
			image: '',
			content: '',
			author: ''
		});
	}


	const { title, image, content, author } = valuesComic;

	const {
		title: tituloVal,
		image: imagenVal,
		content: contenidoVal,
		author: autorVal
	} = validations;

	return (
		<section id="comic">
			<header>
				<h1>Lista de Comics</h1>
			</header>
			<main>
				<form onSubmit={handleSubmit}>
					<div>
						<label> Título:
							<input type="text" value={title} name="title"
								onChange={handleChange}></input>
						</label>
						<p>{tituloVal}</p>
					</div>
					<div>
						<label> Imagen:
							<input type="text" value={image} name="image"
								onChange={handleChange}></input>
						</label>
						<p>{imagenVal}</p>
					</div>
					<div>
						<label> Contenido:
							<input type="text" value={content} name="content"
								onChange={handleChange}></input>
						</label>
						<p>{contenidoVal}</p>
					</div>
					<div>
						<label> Autor:
							<input type="text" value={author} name="author"
								onChange={handleChange}></input>
						</label>
						<p>{autorVal}</p>
					</div>
					<div>
						{
							valuesComic.id === null && <button type="submit">Enviar</button>
						}
						{
							valuesComic.id !== null && <button type="button" onClick={editarComic}>Editar</button>				
						} 
					</div>
				</form>
			</main>
		</section>
	)
}