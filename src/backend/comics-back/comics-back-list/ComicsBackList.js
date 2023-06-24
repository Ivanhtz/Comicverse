import React, { useState, useEffect } from 'react';
import './ComicsBackList.css';
import { getComics, eliminarComic } from '../../../services/comics';

export default function ComicsBackList() {

	const [comicsFromDb, setGetComicsFromDb] = useState([]);

	//El use Effect es como el componente DidMount 
	useEffect(() => {
		// Obtener noticias al cargar el componente
		obtenerComics()
	}, [])

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
					let comicsNuevos = comicsFromDb.filter((comic) =>  comic.id !== idToDelete );
					setGetComicsFromDb(comicsNuevos);
				}
			});
		}
	};

	return (
		<>
			<table className="comicsTable">
				<thead>
					<tr>
						<th>Titulo</th>
						<th>Imagen</th>
						<th>Contenido</th>
						<th>Autor</th>
						<th>Administrar</th>
					</tr>
				</thead>
				<tbody>
					{
						comicsFromDb.map((comic, index) => (
							<tr key={index}>
								<td>{comic.title}</td>
								<td>{comic.image}</td>
								<td>{comic.content}</td>
								<td>{comic.author}</td>
								<td>
									<button>Edit</button>
									<button onClick={() => handleDelete(comic.id)}>Delete</button>
								</td>

							</tr>
						))
					}
				</tbody>
			</table>
		</>
	);
}