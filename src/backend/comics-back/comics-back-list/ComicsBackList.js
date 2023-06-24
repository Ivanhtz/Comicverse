import React, { useState, useEffect } from 'react';
import './ComicsBackList.css';
import { getComics, eliminarComic } from '../../../services/comics';

export default function ComicsBackList(props) {

	//extrae las propiedades que llega en props y las guarda en las variables
	//estas tienen que llamarse igual que el prop para que lo encuentre
	const {datosComics, handleDelete} = props;

	

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
						datosComics.map((comic, index) => (
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