import ComicsBackForm from './comics-back-form/ComicsBackForm';
import ComicsBackList from './comics-back-list/ComicsBackList';
import React, { useState, useEffect } from 'react';
import { getComics, crearComics, eliminarComic } from '../../services/comics';

export default function ComicsBack() {

	//recibe las mmodificaciones de los hijos para actualizar el estado con ellas
	//aal hacerlo así, se actualiza automáticamente la vista al detectar los cambios
	const [comicsFromDb, setGetComicsFromDb] = useState([]);

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
			setGetComicsFromDb([...comicsFromDb, newComic]);
		});
	}

	//borro el comic seleccionado y gestiono si se borró correctamente mediante el status, si es así
	//actualizo el estado con el estado con la lista de comics actualizada
	const handleDelete = (idToDelete) => {
		if (comicsFromDb) {
			eliminarComic(idToDelete)
				.then((status) => {
					if (status === 200) {
						let comicsNuevos = comicsFromDb.filter((comic) => comic.id !== idToDelete);
						setGetComicsFromDb(comicsNuevos);
					}
				});
		}
	};

	const handleEdit = (comicToModify) => {

	}

	return (
		<>
			<section>
				<header>
					<h1>
						Comics Back
					</h1>
				</header>
				<ComicsBackForm handleAddComic={handleAddComic} />
				<ComicsBackList datosComics={comicsFromDb} handleDelete={handleDelete}/>
			</section>
		</>
	)
}