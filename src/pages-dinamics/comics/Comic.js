import { Navigate, useParams } from "react-router-dom";
import comic from "../../data/comic"
import { Link } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";
import "./Comic.css";
import { useEffect, useState } from "react";
import { getComic } from '../../services/comics';
import "./Comics.css";

const Comic = () => {
	let { id } = useParams();
	let comicLocalStorage = JSON.parse(localStorage.getItem("comics"));
	let comicSeleccionado = comicLocalStorage.find((comic) => comic.id == id);

	const [comic, setComic] = useState([]);
	  
	//El use Effect es como el componente DidMount 
    useEffect(() => {
		// Obtener noticias al cargar el componente
		obtenerComic(comicSeleccionado.id)
	  }, [])

	if (!comicSeleccionado) {
		return <Navigate to='/not-found'/>;
	  }
  
	  //Esto es la funcion 
	  const obtenerComic = async () => {
		  const data = await getComic(comicSeleccionado.id);
		  if (data) {
			  setComic(data);
		  }
		};

	return (
		<>
			<Container maxWidth="sm"  className="comicIndividual">
				{
					<article key={comic.id}>
						<header>
							<h2>{comic.title}</h2>
						</header>
						<figure>
							<img className="imagenComicIndividual" src={comic.image} />
						</figure>
						<Typography variant="body2" color="text.primary">
							{comic.content}
						</Typography>
						<p>Autor: {comic.author}</p>
						<Link to="/comics">
							<Button variant="contained">Volver</Button>
						</Link>
					</article>

				}
			</Container>
		</>
	)
}

export default Comic;