import React, { useState, useEffect } from 'react';
import './ComicsBackList.css';

export default function ComicsBackList() {

	let comicsFromStorage = JSON.parse(localStorage.getItem("comics"));
	const [comics, setComics] = useState('');

	//Es como el componentDidMount de las clases.
	//al pasarle en el segundo parámetro [] se evita que se ejecute en cada update del componente
	useEffect(() => {
		setComics(comics => comics = comicsFromStorage);
	}, []);

	console.log(comics);

	if(!comicsFromStorage){
		let comicsArray = [];
		localStorage.setItem("comics", JSON.stringify(comicsArray));	
	}	

	const handleDelete = (indexToDelete) => {
		if(comics){
			let comicsNuevos = comics.filter(
				(comic, index) => {return index != indexToDelete}
			); 
			
			setComics(comics => comics = comicsNuevos);
			localStorage.setItem("comics", JSON.stringify(comicsNuevos));
		}
	};


	if(!comicsFromStorage){
		 comicsFromStorage = JSON.parse(localStorage.getItem("comics"));
	}
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
					comicsFromStorage.map((comic, index) => (
						<tr key={index}>
							<td>{comic.values.titulo}</td>
							<td>{comic.values.imagen}</td>
							<td>{comic.values.contenido}</td>
							<td>{comic.values.autor}</td>
							<td>
								<button>Edit</button>
								<button onClick={() => handleDelete(index)}>Delete</button>
							</td>

						</tr>
					))
				}
				</tbody>
			</table>
        </>
    );
}