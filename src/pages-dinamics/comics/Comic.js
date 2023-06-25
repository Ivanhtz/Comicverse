import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";
import "./Comic.css";
import { useEffect, useState } from "react";
import { getComic } from '../../services/comics';
import "./Comics.css";

const Comic = () => {
	//obtengo la id que recibo por parámetro de url
	let { id } = useParams();
	const navigation = useNavigate();

	const [comic, setComic] = useState([]);
	  
	//El use Effect es como el componente DidMount 
    useEffect(() => {
		// Obtener noticias al cargar el componente
		obtenerComic(id)
	  }, [])

  
	  //Esto es la funcion 
	  const obtenerComic = async () => {
		  const data = await getComic(id);
		  if (data) {
			  setComic(data);
		  }else{
			//tuve que usar esto porque al ser asíncrono ya no me servía el return <Navigate to='/not-found'/>
			navigation("/not-found");
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