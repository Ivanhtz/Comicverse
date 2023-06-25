import { useEffect, useState } from "react";
import ComicsValidator from "../Validadores/ComicsValidator";
import ComicDTO from "../../../models/ComicDTO";
import ComicValidacionesDTO from "../../../models/ComicValidacionesDTO";


export default function ComicsBackForm(props) {

	//estado para cuando se crea un comic nuevo
	const [valuesComic, setValuesComic] = useState(new ComicDTO());

	const [validations, setValidations] = useState(new ComicValidacionesDTO());


	useEffect(() => {
		//hago esto para evitar que me de un warning de uncontrolled component
		//porque de primeras llega el objeto con propiedades nulas

		// setValuesComic(new ComicDTO(props.comicAEditar));
		setValuesComic(props.comicAEditar);
	}, [props.comicAEditar])


	const handleChange = (e) => {
		const { name, value } = e.target;
		setValuesComic({
			...valuesComic,
			[name]: value
		});
	}

	const validateAll = () => {
		const { title, image, content, author } = valuesComic;
		const objValidaciones = new ComicValidacionesDTO();

		objValidaciones.title = validateTitulo(title);
		objValidaciones.image = validateUrl(image);
		objValidaciones.content = validateContenido(content);
		objValidaciones.author = validateAutor(author);

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

		props.handleAddComic(valuesComic);

		//Limpio el state y por tanto el formulario
		setValuesComic(new ComicDTO());
	}

	//envío los datos al método que edita del padre
	const editarComic = () => {
		props.handleEdit(valuesComic.id, valuesComic);
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
							valuesComic.id === -1 && <button type="submit">Enviar</button>
						}
						{
							valuesComic.id !== -1 && <button type="button" onClick={editarComic}>Editar</button>
						}
					</div>
				</form>
			</main>
		</section>
	)
}