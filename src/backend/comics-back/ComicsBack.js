import ComicsBackForm from './comics-back-form/ComicsBackForm';
import ComicsBackList from './comics-back-list/ComicsBackList';
import React, { useState, useEffect } from 'react';
import { getComics, crearComics, eliminarComic, actualizarComic} from '../../services/comics';
import ComicDTO from '../../models/ComicDTO';

export default function ComicsBack() {

	//recibe las mmodificaciones de los hijos para actualizar el estado con ellas
	//aal hacerlo así, se actualiza automáticamente la vista al detectar los cambios
	const [comicsFromDb, setGetComicsFromDb] = useState([]);

	const[comicAEditar, setComicAEditar] = useState(new ComicDTO());

	useEffect(() => {
		obtenerComics()
	}, []);

	const obtenerComics = async () => {
		const data = await getComics();
		if (data) {
			setGetComicsFromDb(data);
		}
	};

	//actualizo el estado añadiendo el nuevo comic
	const handleAddComic = (newComic) => {
		crearComics(newComic)
			.then(data => {
				setGetComicsFromDb([...comicsFromDb, data]);
			});
	}

	//borro el comic seleccionado y gestiono si se borró correctamente mediante el status, si es así
	//actualizo el estado con el estado con la lista de comics actualizada
	const handleDeleteComic = (idToDelete) => {
		eliminarComic(idToDelete)
			.then((status) => {
				if (status === 200) {
					let comicsNuevos = comicsFromDb.filter((comic) => comic.id !== idToDelete);
					setGetComicsFromDb(comicsNuevos);
				}
			});
	};

	//con el filter recojo todos los comics menos el que modifico
	//en la nueva variable le meto los datos nuevos y
	//actualizo el estado
	const handleEditComic = (id, comicToModify) => {
		actualizarComic(id, comicToModify)
		.then(data => {
		 const comicsTempEditados = comicsFromDb.filter(comic => comic.id !== id);
		 comicsTempEditados.push(comicToModify);
		 setGetComicsFromDb(comicsTempEditados);
		 //vacío el comic a editar para que el formulario vuelva a mostrarse vacío una vez se ha editado
		 setComicAEditar(new ComicDTO());
		})
	}

	return (
		<>
			<section>
				<header>
					<h1>
						Comics Back
					</h1>
				</header>
				<ComicsBackForm handleAddComic={handleAddComic} comicAEditar={comicAEditar} handleEdit={handleEditComic}/>
				<ComicsBackList datosComics={comicsFromDb} handleDelete={handleDeleteComic} setComicAEditar={setComicAEditar} />
			</section>
		</>
	)
}