import ComicsBackForm from './comics-back-form/ComicsBackForm';
import ComicsBackList from './comics-back-list/ComicsBackList';
import React, { useState, useEffect } from 'react';

export default function ComicsBack() {

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

	return (
		<>
			<section>
				<header>
					<h1>
						Comics Back
					</h1>
				</header>
				<ComicsBackForm />
				<ComicsBackList datosComics={comicsFromDb} handleDelete={handleDelete}/>
			</section>
		</>
	)
}